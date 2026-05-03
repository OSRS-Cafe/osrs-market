import styles from "./SettingsView.module.css";
import SettingsEntry from "../components/SettingsEntry";
import ThemeDropdown from "../components/ThemeDropdown";
import NumberFormatDropdown from "../components/NumberFormatDropdown";
import {useShallow} from "zustand/react/shallow";
import {useSettingsStore} from "../zustand/SettingsStore.ts";
import {useTlStore} from "../zustand/tlStore.ts";
import LanguageDropdown from "../components/LanguageDropdown";
import PriceDisplay from "../components/PriceDisplay";
import Dropdown from "../components/Dropdown";
import {useState} from "react";
import CheckBox from "../components/checkbox";

function SettingsView() {
	const { detailIcons, setDetailIcons } = useSettingsStore(
		useShallow((state) => ({
			detailIcons: state.detailIcons,
			setDetailIcons: state.setDetailIcons
		}))
	);

	const tl = useTlStore((s) => s.strings);

	const numberFormatDesc = <span>{tl.settings.number_format_desc} <PriceDisplay value={123456789}/></span>;

	const [test, setTest] = useState<string>("test2");

	return (
		<div className={styles.root}>
			<h3>Settings</h3>

			<SettingsEntry label={tl.settings.lang} description={tl.settings.lang_desc}>
				<LanguageDropdown/>
			</SettingsEntry>

			<SettingsEntry label={tl.settings.theme} description={tl.settings.theme_desc}>
				<ThemeDropdown/>
			</SettingsEntry>

			<SettingsEntry label={tl.settings.number_format} description={numberFormatDesc}>
				<NumberFormatDropdown/>
			</SettingsEntry>

			<SettingsEntry label={"Test"} description={"Test Description"}>
				<Dropdown value={test} onChange={(v) => setTest(v)}>
					<span key="test1">Test 1</span>
					<span key="test2">Test 2</span>
					<span key="test3">Test 3</span>
				</Dropdown>
			</SettingsEntry>

			<SettingsEntry label={tl.settings.detail_icons} description={tl.settings.detail_icons_desc}>
				<CheckBox onChange={setDetailIcons} value={detailIcons} />
			</SettingsEntry>
		</div>
	);
}

export default SettingsView;