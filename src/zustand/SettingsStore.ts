import {create} from "zustand";
import {getDefaultTheme} from "../utils/themes";
import {persist} from "zustand/middleware";

export type ThemeType = "light" | "dark";
export type NumberFormatType = "none" | "dot" | "comma" | "space";

interface SettingsState {
	theme: ThemeType;
	numberFormat: NumberFormatType;
	detailIcons: boolean;
}

interface SettingsActions {
	setTheme: (theme: ThemeType) => void;
	setNumberFormat: (numberFormat: NumberFormatType) => void;
	setDetailIcons: (detailIcons: boolean) => void;
}

const DEFAULTS: SettingsState = {
	theme: getDefaultTheme(),
	detailIcons: false,
	numberFormat: "dot"
}

export const useSettingsStore = create<SettingsState & SettingsActions>()(
	persist(
		(set) => ({
			theme: DEFAULTS.theme,
			numberFormat: DEFAULTS.numberFormat,
			detailIcons: DEFAULTS.detailIcons,

			setTheme: (theme) => set({ theme }),
			setNumberFormat: (numberFormat) => set({ numberFormat }),
			setDetailIcons: (detailIcons) => set({ detailIcons }),
		}),
		{
			name: "settings-storage",
		}
	)
);