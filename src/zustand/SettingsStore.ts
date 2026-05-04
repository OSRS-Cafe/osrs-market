import {create} from "zustand";
import {getDefaultTheme} from "../utils/themes";
import {persist} from "zustand/middleware";
import type {TranslationKey} from "../lang";
import type {AveragesKey} from "../utils/market-data";

export type ThemeType = "light" | "dark";
export type NumberFormatType = "none" | "dot" | "comma" | "space";

interface SettingsState {
	theme: ThemeType;
	numberFormat: NumberFormatType;
	detailIcons: boolean;
	averagesKey: AveragesKey;
	language: TranslationKey;
}

interface SettingsActions {
	setTheme: (theme: ThemeType) => void;
	setNumberFormat: (numberFormat: NumberFormatType) => void;
	setDetailIcons: (detailIcons: boolean) => void;
	setLanguage: (language: TranslationKey) => void;
	setAveragesKey: (averagesKey: AveragesKey) => void;
}

const DEFAULTS: SettingsState = {
	theme: getDefaultTheme(),
	detailIcons: false,
	numberFormat: "dot",
	language: "en_us",
	averagesKey: "24h"
}

export const useSettingsStore = create<SettingsState & SettingsActions>()(
	persist(
		(set) => ({
			theme: DEFAULTS.theme,
			numberFormat: DEFAULTS.numberFormat,
			detailIcons: DEFAULTS.detailIcons,
			language: DEFAULTS.language,
			averagesKey: DEFAULTS.averagesKey,

			setTheme: (theme) => set({ theme }),
			setNumberFormat: (numberFormat) => set({ numberFormat }),
			setDetailIcons: (detailIcons) => set({ detailIcons }),
			setLanguage: (language) => { set({ language }) },
			setAveragesKey: (averagesKey) => set({ averagesKey }),
		}),
		{
			name: "settings-storage",
		}
	)
);