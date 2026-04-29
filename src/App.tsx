import ThemeDropdown from "./components/ThemeDropdown";
import PriceDisplay from "./components/PriceDisplay";
import NumberFormatDropdown from "./components/NumberFormatDropdown";

function App() {
	return (
		<>
			<p>App</p>
			<PriceDisplay value={123456789}/><br/>
			<ThemeDropdown />
			<NumberFormatDropdown/>
		</>
	);
}

export default App
