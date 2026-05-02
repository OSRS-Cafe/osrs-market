import {type ChangeEvent} from "react";
import {isTheme} from "../../utils/themes";
import {useSettingsStore} from "../../zustand/SettingsStore.ts";
import {useShallow} from "zustand/react/shallow";

function ThemeDropdown() {
	const { theme, setTheme } = useSettingsStore(
		useShallow((state) => ({ theme: state.theme, setTheme: state.setTheme }))
	);

	const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
		const selectedTheme = e.target.value;
		if(!isTheme(selectedTheme)) throw Error("Bad Theme in ThemeDropdown");
		setTheme(selectedTheme);
	}

	return (
		<select onChange={handleChange} value={theme}>
			<option value="light">Light</option>
			<option value="dark">Dark</option>
		</select>
	);
}

export default ThemeDropdown;