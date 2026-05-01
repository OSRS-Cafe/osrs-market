import type {ItemID} from "../../utils/grand-exchange";
import LoadingImage from "../../assets/rat-tail.png";
import styles from "./ItemIcon.module.css";
import {classes, style} from "../../utils/styles";
import {useMarketDataStore} from "../../zustand/MarketDataStore.ts";

const BASE_IMAGE_URL: string = "https://oldschool.runescape.wiki/images/";

type Props = {
	id: ItemID;
	width?: number;
	height?: number;
}

function ItemIcon({ id, width = 128, height = 128 }: Props) {
	const isReady = useMarketDataStore((s) => s.isReady);
	const mapping = useMarketDataStore((s) => s.mapping?.byId?.[id]);

	let icon;
	if(isReady && mapping) {
		const filename = mapping.icon.replaceAll(" ", "_");
		const imageURL = BASE_IMAGE_URL + filename;
		icon = <img alt={`${mapping.name} Icon`} className={styles.icon} src={imageURL}/>;
	} else {
		icon = <img alt={"Loading Icon"} className={classes(styles.icon, styles.spin)} src={LoadingImage}/>;
	}

	return (
		<div
			className={styles.container}
			style={style({
				"--width": `${width}px`,
				"--height": `${height}px`
			})}
		>
			{icon}
		</div>
	);
}

export default ItemIcon;