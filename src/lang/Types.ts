export type TranslationKey = "en_us" | "de_de";

export type TranslationStrings = {
	tl_name: string;
	app_name: string;
	settings: {
		lang: string;
		lang_desc: string;
		theme: string;
		theme_desc: string;
		number_format: string;
		number_format_desc: string;
		detail_icons: string;
		detail_icons_desc: string;
	}
}