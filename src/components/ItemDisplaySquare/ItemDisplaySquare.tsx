import type {ItemID} from "../../utils/market-data";
import styles from "./ItemDisplaySquare.module.css";
import SkeletonText from "../SkeletonText";
import ItemIcon from "../ItemIcon";
import PriceDisplay from "../PriceDisplay";
import {useMarketDataStore} from "../../zustand/MarketDataStore.ts";
import {useShallow} from "zustand/react/shallow";

type Props = {
	id: ItemID;
}

//TODO: Add ability to display price changes with slotmachine like animation
function ItemDisplaySquare({ id }: Props) {
	const { name, examine, price } = useMarketDataStore(
		useShallow((state) => ({
			name: state.data.mapping?.byId?.[id]?.name,
			examine: state.data.mapping?.byId?.[id]?.examine,
			price: state.data.prices?.byId?.[id]?.high
		}))
	);

	return (
		<div title={examine ?? "Loading Examine Text..."} className={styles.display}>
			<h1><SkeletonText w={20} show={name != null}>{name}</SkeletonText></h1>
			<div className={styles.iconContainer}>
				<ItemIcon width={64} height={64} id={id} />
			</div>
			<div className={styles.price}>
				<SkeletonText w={40} show={price != null}>
					<PriceDisplay value={price ?? 0}/>
				</SkeletonText>
			</div>
		</div>
	);
}

export default ItemDisplaySquare;