import {formatNumber} from "../../utils/number-format";
import {useSettingsStore} from "../../zustand/SettingsStore.ts";
import CoinIcon from "../../assets/coin.webp";
import styles from "./PriceDisplay.module.css";
import {useEffect, useState} from "react";

type Props = {
	value: number;
}

function PriceDisplay({ value }: Props) {
	const [price, setPrice] = useState<number>(value);

	useEffect(() => {
		const intervalID = setInterval(() => {
			const difference = value - price;
			const toAdd = Math.ceil(difference / 4);
			setPrice(prev => Math.min(value, prev + toAdd));
		}, 50);

		return () => clearInterval(intervalID);
	}, [price, value]);

	const numberFormat = useSettingsStore((s) => s.numberFormat);
	const formattedText = formatNumber(price, numberFormat);

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