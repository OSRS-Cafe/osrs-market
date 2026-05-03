import {useEffect} from "react";
import {useMarketDataStore} from "./zustand/MarketDataStore.ts";
import {useShallow} from "zustand/react/shallow";
import {Route, Routes} from "react-router";
import CoreLayout from "./views/CoreLayout/CoreLayout.tsx";
import {useSettingsStore} from "./zustand/SettingsStore.ts";
import SettingsView from "./views/SettingsView.tsx";
import ListsView from "./views/ListsView.tsx";
import HomeView from "./views/HomeView.tsx";

function App() {
	const { loadMarketData, updateMarketData } = useMarketDataStore(
		useShallow((state) => ({
			loadMarketData: state.load,
			updateMarketData: state.update
		}))
	);

	const theme = useSettingsStore((s) => s.theme);

	useEffect(() => {
		document.documentElement.setAttribute("data-theme", theme);
	}, [theme]);

	useEffect(() => {
		let updateIntervalId: number = 0;

		//On initial app load, load Market Data. This gets Mappings and Prices.
		loadMarketData().then(() => {
			//Once that is done, start an Interval that requests Prices regularly.
			updateIntervalId = setInterval(async () => {
				//Update Prices and wait until that is done.
				await updateMarketData();
			}, 60_000);
		});

		return () => {
			clearInterval(updateIntervalId);
		};
	}, [loadMarketData, updateMarketData]);

	return (
		<>
			<Routes>
				<Route element={<CoreLayout/>}>
					<Route index element={<HomeView/>} />
					<Route path="lists" element={<ListsView/>} />
					<Route path="calculator" element={<p>Calculator</p>} />
					<Route path="settings" element={<SettingsView/>} />
				</Route>
			</Routes>
		</>
	);

}

export default App
