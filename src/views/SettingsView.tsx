import styles from "./SettingsView.module.css";
import SettingsEntry from "../components/SettingsEntry";
import ThemeDropdown from "../components/ThemeDropdown";
import NumberFormatDropdown from "../components/NumberFormatDropdown";
import {useShallow} from "zustand/react/shallow";
import {useSettingsStore} from "../zustand/SettingsStore.ts";
import * as React from "react";
import {useTlStore} from "../zustand/tlStore.ts";
import LanguageDropdown from "../components/LanguageDropdown";

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

	return (
		<div className={styles.root}>
			<h3>Settings</h3>
			<SettingsEntry
				label={"Language"}
				description={"Language Desc"}
			>
				<LanguageDropdown/>
			</SettingsEntry>
			<SettingsEntry
				label={tl.settings.theme}
				description={tl.settings.theme_desc}
			>
				<ThemeDropdown/>
			</SettingsEntry>

			<SettingsEntry
				label="Number Format"
				description="How the Prices are formatted"
			>
				<NumberFormatDropdown/>
			</SettingsEntry>

			<SettingsEntry
				label="Detail Icons"
				description="Use High Res Icons for Items"
			>
				<input onChange={handleDetailIconsChange} type="checkbox" checked={detailIcons} />
			</SettingsEntry>
		</div>
	);
}

export default SettingsView;