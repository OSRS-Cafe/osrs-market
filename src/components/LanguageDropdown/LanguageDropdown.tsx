import {type ChangeEvent} from "react";
import {useSettingsStore} from "../../zustand/SettingsStore.ts";
import {useShallow} from "zustand/react/shallow";
import {de_de, en_us, isTranslationKey} from "../../lang";

function LanguageDropdown() {
	const { language, setLanguage } = useSettingsStore(
		useShallow((state) => ({ language: state.language, setLanguage: state.setLanguage }))
	);

	const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
		const selected = e.target.value;
		if(!isTranslationKey(selected)) throw Error(`Bad Translation Key ${selected}.`);
		setLanguage(selected);
	}

	return (
		<select onChange={handleChange} value={language}>
			<option value="en_us">{en_us.tl_name}</option>
			<option value="de_de">{de_de.tl_name}</option>
		</select>
	);
}

export default LanguageDropdown;