import {isTheme} from "../../utils/themes";
import {useSettingsStore} from "../../zustand/SettingsStore.ts";
import {useShallow} from "zustand/react/shallow";
import Dropdown from "../Dropdown";

function ThemeDropdown() {
	const { theme, setTheme } = useSettingsStore(
		useShallow((state) => ({ theme: state.theme, setTheme: state.setTheme }))
	);

	const handleChange = (value: string) => {
		if(!isTheme(value)) throw Error("Bad Theme in ThemeDropdown");
		setTheme(value);
	}

	return (
		<Dropdown value={theme} onChange={handleChange}>
			<div key="light">Light</div>
			<div key="dark">Dark</div>
		</Dropdown>
	);
}

export default ThemeDropdown;