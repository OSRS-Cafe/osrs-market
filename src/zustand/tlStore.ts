import {create} from "zustand";
import {getTranslationStrings, type TranslationStrings} from "../lang";
import {useSettingsStore} from "./SettingsStore.ts";

export interface TranslationState {
	strings: TranslationStrings;
}

export const useTlStore = create<TranslationState>()((set) => {
	const initialLang = useSettingsStore.getState().language;

	useSettingsStore.subscribe((state) => {
		set({ strings: getTranslationStrings(state.language) });
	});

	return {
		strings: getTranslationStrings(initialLang)
	}
});