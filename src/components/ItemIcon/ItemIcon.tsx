import {getIconByRuneliteName, type ItemID} from "../../utils/market-data";
import LoadingImage from "../../assets/rat-tail.png";
import styles from "./ItemIcon.module.css";
import {classes, style} from "../../utils/styles";
import {useMarketDataStore} from "../../zustand/MarketDataStore.ts";
import {useSettingsStore} from "../../zustand/SettingsStore.ts";
import {useShallow} from "zustand/react/shallow";

type Props = {
	id: ItemID;
	width?: number;
	height?: number;
}

function ItemIcon({ id, width = 128, height = 128 }: Props) {
	const { name, icon } = useMarketDataStore(
		useShallow((state) => ({
			name: state.data.mapping?.byId?.[id]?.name,
			icon: state.data.mapping?.byId?.[id]?.icon
		}))
	);
	const detailIcons = useSettingsStore((s) => s.detailIcons);

	let img;
	if(name && icon) {
		const imageURL = getIconByRuneliteName(icon, detailIcons);
		img = <img
			alt={`${name} Icon`}
			className={styles.icon}
			src={imageURL}
		/>;
	} else {
		img = <img alt={"Loading Icon"} className={classes(styles.icon, styles.spin)} src={LoadingImage}/>;
	}

	return (
		<div
			className={styles.container}
			style={style({
				"--width": `${width}px`,
				"--height": `${height}px`
			})}
		>
			{img}
		</div>
	);
}

export default ItemIcon;