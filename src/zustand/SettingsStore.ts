import {create} from "zustand";
import {getDefaultTheme} from "../utils/themes";
import {persist} from "zustand/middleware";

export type ThemeType = "light" | "dark";
export type NumberFormatType = "none" | "dot" | "comma" | "space";

interface SettingsState {
	theme: ThemeType;
	numberFormat: NumberFormatType;
}

interface SettingsActions {
	setTheme: (theme: ThemeType) => void;
	setNumberFormat: (numberFormat: NumberFormatType) => void;
}

const DEFAULTS: SettingsState = {
	theme: getDefaultTheme(),
	numberFormat: "dot"
}

export const useSettingsStore = create<SettingsState & SettingsActions>()(
	persist(
		(set) => ({
			theme: DEFAULTS.theme,
			numberFormat: DEFAULTS.numberFormat,

			setTheme: (theme) => set({ theme }),
			setNumberFormat: (numberFormat) => set({ numberFormat }),
		}),
		{
			name: "settings-storage",
		}
	)
);