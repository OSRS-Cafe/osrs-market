import styles from "./ListsView.module.css";
import {rune_list} from "../data/lists/rune-list.ts";
import ItemDisplaySquare from "../components/ItemDisplaySquare";
import {ore_list} from "../data/lists/ore-list.ts";

function ListsView() {

	return (
		<div className={styles.root}>
			<h3>Lists</h3>
			<h4>Runes</h4>
			<div className={styles.listContainer}>{rune_list.map((rune_id) => (
				<ItemDisplaySquare id={rune_id}/>
			))}</div>
			<h4>Ores</h4>
			<div className={styles.listContainer}>{ore_list.map((rune_id) => (
				<ItemDisplaySquare id={rune_id}/>
			))}</div>
		</div>
	);
}

export default ListsView;