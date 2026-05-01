import {getIconByMapping, type ItemID} from "../../utils/grand-exchange";
import LoadingImage from "../../assets/rat-tail.png";
import styles from "./ItemIcon.module.css";
import {classes, style} from "../../utils/styles";
import {useMarketDataStore} from "../../zustand/MarketDataStore.ts";
import {useSettingsStore} from "../../zustand/SettingsStore.ts";

type Props = {
	id: ItemID;
	width?: number;
	height?: number;
}

function ItemIcon({ id, width = 128, height = 128 }: Props) {
	const isReady = useMarketDataStore((s) => s.isReady);
	const mapping = useMarketDataStore((s) => s.mapping?.byId?.[id]);
	const detailIcons = useSettingsStore((s) => s.detailIcons);

	let icon;
	if(isReady && mapping) {
		const imageURL = getIconByMapping(mapping, detailIcons);
		icon = <img
			alt={`${mapping.name} Icon`}
			className={styles.icon}
			src={imageURL}
		/>;
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