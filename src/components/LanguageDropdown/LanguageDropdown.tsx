import {useSettingsStore} from "../../zustand/SettingsStore.ts";
import {useShallow} from "zustand/react/shallow";
import {de_de, en_us, isTranslationKey} from "../../lang";
import Dropdown from "../Dropdown";

function LanguageDropdown() {
	const { language, setLanguage } = useSettingsStore(
		useShallow((state) => ({ language: state.language, setLanguage: state.setLanguage }))
	);

	const handleChange = (value: string) => {
		if(!isTranslationKey(value)) throw Error(`Bad Translation Key ${value}.`);
		setLanguage(value);
	}

	return (
		<Dropdown value={language} onChange={handleChange}>
			<span key="en_us">{en_us.tl_name}</span>
			<span key="de_de">{de_de.tl_name}</span>
		</Dropdown>
	);
}

export default LanguageDropdown;