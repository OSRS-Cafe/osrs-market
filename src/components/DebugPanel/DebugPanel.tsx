import styles from "./DebugPanel.module.css";
import {useMarketDataStore} from "../../zustand/MarketDataStore.ts";
import {useShallow} from "zustand/react/shallow";
import {useSettingsStore} from "../../zustand/SettingsStore.ts";

function DebugPanel() {
	const {
		mappings, prices, averages,
		updateMappings, updatePrices, updateAverages
	} = useMarketDataStore(useShallow((state) => ({
		mappings: state.data.mapping,
		prices: state.data.prices,
		averages: state.data.averages,
		updateMappings: state.updateMappings,
		updatePrices: state.updatePrices,
		updateAverages: state.updateAverages
	})));

	const averagesKey = useSettingsStore((s) => s.averagesKey);

	const logMappingState = () => console.log(mappings);
	const logPricesState = () => console.log(prices);
	const logAveragesState = () => console.log(averages);

	const updateAveragesState = () => updateAverages(averagesKey);

	return (
		<div className={styles.panel}>
			<span>Debug Panel</span>
			<div className={styles.container}>
				<span>Log State</span>
				<button onClick={logMappingState}>Mapping</button>
				<button onClick={logPricesState}>Prices</button>
				<button onClick={logAveragesState}>Averages</button>
			</div>
			<div className={styles.container}>
				<span>Update State</span>
				<button onClick={updateMappings}>Mapping</button>
				<button onClick={updatePrices}>Prices</button>
				<button onClick={updateAveragesState}>Averages</button>
			</div>
		</div>
	);
}

export default DebugPanel;