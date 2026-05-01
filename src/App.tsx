import ThemeDropdown from "./components/ThemeDropdown";
import PriceDisplay from "./components/PriceDisplay";
import NumberFormatDropdown from "./components/NumberFormatDropdown";
import ItemDisplaySmall from "./components/ItemDisplaySmall/ItemDisplaySmall.tsx";
import {useEffect} from "react";
import {useMarketDataStore} from "./zustand/MarketDataStore.ts";
import {useShallow} from "zustand/react/shallow";

function App() {
	const { loadMarketData, updateMarketData } = useMarketDataStore(
		useShallow((state) => ({ loadMarketData: state.load, updateMarketData: state.update }))
	);
	const allItems = useMarketDataStore((s) => s.mapping?.all);

	useEffect(() => {
		let updateIntervalId: number = 0;

		//On initial app load, load Market Data. This gets Mappings and Prices.
		loadMarketData().then(() => {
			//Once that is done, start an Interval that requests Prices regularly.
			updateIntervalId = setInterval(async () => {
				//Update Prices and wait until that is done.
				await updateMarketData();
			}, 10_000);
		});

		return () => {
			clearInterval(updateIntervalId);
		};
	}, [loadMarketData, updateMarketData]);

	return (
		<>
			<p>App</p>
			<PriceDisplay value={123456789}/><br/>
			<ThemeDropdown />
			<NumberFormatDropdown/>
			<div>Loaded: {allItems?.length}</div>
			<div style={{display: "flex", flexDirection: "column"}}>
				{allItems && (
					allItems.slice(0, 64).map((allItem) => (
						<ItemDisplaySmall key={allItem.id} id={allItem.id}/>
					))
				)}
			</div>
		</>
	);
}

export default App
