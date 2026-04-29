import {type ChangeEvent} from "react";
import {isNumberFormatType} from "../../utils/number-format";
import {useSettingsStore} from "../../zustand/SettingsStore.ts";
import {useShallow} from "zustand/react/shallow";

function NumberFormatDropdown() {
	const { numberFormat, setNumberFormat } = useSettingsStore(
		useShallow((state) => ({ numberFormat: state.numberFormat, setNumberFormat: state.setNumberFormat }))
	);

	const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
		const selected = e.target.value;
		if(!isNumberFormatType(selected)) throw Error("Bad Number Format Type");
		setNumberFormat(selected);
	}

	return (
		<select onChange={handleChange} value={numberFormat}>
			<option value="none">None</option>
			<option value="dot">Dots</option>
			<option value="comma">Commas</option>
			<option value="space">Spaces</option>
		</select>
	);
}

export default NumberFormatDropdown;