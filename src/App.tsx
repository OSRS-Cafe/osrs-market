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
	const { updateMappings, updatePrices, updateAverages } = useMarketDataStore(
		useShallow((state) => ({
			updateMappings: state.updateMappings,
			updatePrices: state.updatePrices,
			updateAverages: state.updateAverages
		}))
	);

	const theme = useSettingsStore((s) => s.theme);
	const averageKey = useSettingsStore((s) => s.averagesKey);

	useEffect(() => {
		document.documentElement.setAttribute("data-theme", theme);
	}, [theme]);

	useEffect(() => {
		let updateIntervalId: number = 0;

		updateMappings().then(async () => {
			await updatePrices();
			await updateAverages(averageKey);

			updateIntervalId = setInterval(async () => {
				await updatePrices();
				if(averageKey == "5m" || averageKey == "10m")
					await updateAverages(averageKey);
			}, 60_000);
		});

		return () => {
			clearInterval(updateIntervalId);
		};
	}, [averageKey, updateAverages, updateMappings, updatePrices]);

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
