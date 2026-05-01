import type {ItemID} from "../../utils/grand-exchange";
import styles from "./ItemDisplaySmall.module.css";
import SkeletonText from "../SkeletonText";
import ItemIcon from "../ItemIcon";
import PriceDisplay from "../PriceDisplay";
import {useMarketDataStore} from "../../zustand/MarketDataStore.ts";
import {useShallow} from "zustand/react/shallow";

type Props = {
	id: ItemID;
}

function ItemDisplaySmall({ id }: Props) {
	const { isReady, mapping, price } = useMarketDataStore(
		useShallow((state) => ({
			isReady: state.isReady,
			mapping: state.mapping?.byId?.[id],
			price: state.prices?.byId?.[id]
		}))
	);

	return (
		<div className={styles.display}>
			<ItemIcon id={id} />
			<div style={{display: "flex", flexDirection: "row"}}>
				<div className={styles.gabbago}>Name:</div><SkeletonText w={20} show={isReady}>{mapping?.name}</SkeletonText>
			</div>
			<div style={{display: "flex", flexDirection: "row"}}>
				<div className={styles.gabbago}>Examine:</div><SkeletonText w={40} show={isReady}>{mapping?.examine}</SkeletonText>
			</div>
			<div style={{display: "flex", flexDirection: "row"}}>
				<div className={styles.gabbago}>Price:</div><SkeletonText w={40} show={isReady}><PriceDisplay value={price?.high ?? 0}/></SkeletonText>
			</div>
		</div>
	);
}

export default ItemDisplaySmall;