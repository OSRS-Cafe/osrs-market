import {create} from "zustand";
import {getDefaultTheme} from "../utils/themes";
import {persist} from "zustand/middleware";
import type {TranslationKey} from "../lang";

export type ThemeType = "light" | "dark";
export type NumberFormatType = "none" | "dot" | "comma" | "space";

interface SettingsState {
	theme: ThemeType;
	numberFormat: NumberFormatType;
	detailIcons: boolean;
	language: TranslationKey;
}

interface SettingsActions {
	setTheme: (theme: ThemeType) => void;
	setNumberFormat: (numberFormat: NumberFormatType) => void;
	setDetailIcons: (detailIcons: boolean) => void;
	setLanguage: (language: TranslationKey) => void;
}

const DEFAULTS: SettingsState = {
	theme: getDefaultTheme(),
	detailIcons: false,
	numberFormat: "dot",
	language: "en_us"
}

export const useSettingsStore = create<SettingsState & SettingsActions>()(
	persist(
		(set) => ({
			theme: DEFAULTS.theme,
			numberFormat: DEFAULTS.numberFormat,
			detailIcons: DEFAULTS.detailIcons,
			language: DEFAULTS.language,

			setTheme: (theme) => set({ theme }),
			setNumberFormat: (numberFormat) => set({ numberFormat }),
			setDetailIcons: (detailIcons) => set({ detailIcons }),
			setLanguage: (language) => {
				set({ language })
			},
		}),
		{
			name: "settings-storage",
		}
	)
);