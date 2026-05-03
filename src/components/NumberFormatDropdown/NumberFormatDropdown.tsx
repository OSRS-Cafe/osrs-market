import {isNumberFormatType} from "../../utils/number-format";
import {useSettingsStore} from "../../zustand/SettingsStore.ts";
import {useShallow} from "zustand/react/shallow";
import Dropdown from "../Dropdown";

function NumberFormatDropdown() {
	const { numberFormat, setNumberFormat } = useSettingsStore(
		useShallow((state) => ({ numberFormat: state.numberFormat, setNumberFormat: state.setNumberFormat }))
	);

	const handleChange = (value: string) => {
		if(!isNumberFormatType(value)) throw Error("Bad Number Format Type");
		setNumberFormat(value);
	}

	return (
		<Dropdown value={numberFormat} onChange={handleChange}>
			<div key="none">None</div>
			<div key="dot">Dots</div>
			<div key="comma">Commas</div>
			<div key="space">Spaces</div>
		</Dropdown>
	);
}

export default NumberFormatDropdown;