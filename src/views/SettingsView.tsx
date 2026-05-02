import styles from "./SettingsView.module.css";
import SettingsEntry from "../components/SettingsEntry";
import ThemeDropdown from "../components/ThemeDropdown";
import NumberFormatDropdown from "../components/NumberFormatDropdown";
import {useShallow} from "zustand/react/shallow";
import {useSettingsStore} from "../zustand/SettingsStore.ts";
import * as React from "react";
import {useTlStore} from "../zustand/tlStore.ts";
import LanguageDropdown from "../components/LanguageDropdown";
import PriceDisplay from "../components/PriceDisplay";

function SettingsView() {
	const { detailIcons, setDetailIcons } = useSettingsStore(
		useShallow((state) => ({
			detailIcons: state.detailIcons,
			setDetailIcons: state.setDetailIcons
		}))
	);

	const tl = useTlStore((s) => s.strings);

	const handleDetailIconsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setDetailIcons(e.target.checked);
	}

	const numberFormatDesc = <span>{tl.settings.number_format_desc} <PriceDisplay value={123456789}/></span>;

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

			<SettingsEntry label={tl.settings.detail_icons} description={tl.settings.detail_icons_desc}>
				<input onChange={handleDetailIconsChange} type="checkbox" checked={detailIcons} />
			</SettingsEntry>
		</div>
	);
}

export default SettingsView;