import type {ItemID} from "../../utils/grand-exchange";
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
	const { isReady, mapping, price } = useMarketDataStore(
		useShallow((state) => ({
			isReady: state.isReady,
			mapping: state.mapping?.byId?.[id],
			price: state.prices?.byId?.[id]
		}))
	);

	return (
		<div title={mapping?.examine} className={styles.display}>
			<h1><SkeletonText w={20} show={isReady}>{mapping?.name}</SkeletonText></h1>
			<div className={styles.iconContainer}>
				<ItemIcon width={64} height={64} id={id} />
			</div>
			<div className={styles.price}>
				<SkeletonText w={40} show={isReady}>
					<PriceDisplay value={price?.high ?? 0}/>
				</SkeletonText>
			</div>
		</div>
	);
}

export default ItemDisplaySquare;