import ThemeDropdown from "./components/ThemeDropdown";
import PriceDisplay from "./components/PriceDisplay";
import NumberFormatDropdown from "./components/NumberFormatDropdown";
import {useEffect} from "react";
import {useMarketDataStore} from "./zustand/MarketDataStore.ts";
import {useShallow} from "zustand/react/shallow";
import BasicFlexRow from "./components/BasicFlexRow";
import ItemDisplaySquare from "./components/ItemDisplaySquare";

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
			<BasicFlexRow style={{justifyContent: "center"}}>
				{allItems && (
					allItems.slice(0, 256).map((allItem) => (
						<ItemDisplaySquare key={allItem.id} id={allItem.id}/>
					))
				)}
			</BasicFlexRow>
		</>
	);
}

export default App
