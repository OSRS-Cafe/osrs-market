import {formatNumber} from "../../utils/number-format";
import {useSettingsStore} from "../../zustand/SettingsStore.ts";
import CoinIcon from "../../assets/coin.webp";
import styles from "./PriceDisplay.module.css";

type Props = {
	value: number;
}

function PriceDisplay({ value }: Props) {
	const numberFormat = useSettingsStore((s) => s.numberFormat);
	const formattedText = formatNumber(value, numberFormat);

	const handleClick = () => {
		navigator.clipboard.writeText(value.toString());
	};

	return (
		<span title={"Click to copy"} onClick={handleClick} className={styles.display}>
			{formattedText}
			<img draggable={false} className={styles.icon} alt="Coin Icon" src={CoinIcon}/>
		</span>
	);
}

export default PriceDisplay;