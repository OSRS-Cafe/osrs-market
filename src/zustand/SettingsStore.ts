import {create} from "zustand";
import {getDefaultTheme} from "../utils/themes";

export type ThemeType = "light" | "dark";
export type NumberFormatType = "none" | "dot" | "comma" | "space";

interface SettingsState {
	theme: ThemeType;
	numberFormat: NumberFormatType;

	setTheme: (theme: ThemeType) => void;
	setNumberFormat: (numberFormat: NumberFormatType) => void;
}

export const useSettingsStore = create<SettingsState>()((set) => ({
	theme: getDefaultTheme(),
	numberFormat: "dot",
	setTheme: (theme) => set(() => ({ theme })),
	setNumberFormat: (numberFormat) => set(() => ({ numberFormat })),
}));