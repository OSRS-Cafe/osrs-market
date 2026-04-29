import {formatNumber} from "../../utils/number-format";
import {useSettingsStore} from "../../zustand/SettingsStore.ts";

type Props = {
	value: number;
}

function PriceDisplay({ value }: Props) {
	const numberFormat = useSettingsStore((s) => s.numberFormat);

	return <span>{formatNumber(value, numberFormat)}</span>;
}

export default PriceDisplay;