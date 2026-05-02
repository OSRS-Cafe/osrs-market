import styles from "./ListsView.module.css";
import {rune_list} from "../data/lists/rune-list.ts";
import ItemDisplaySquare from "../components/ItemDisplaySquare";
import {ore_list} from "../data/lists/ore-list.ts";
import {log_list} from "../data/lists/log-list.ts";
import {bar_list} from "../data/lists/bar-list.ts";

function ListsView() {

	return (
		<div className={styles.root}>
			<h3>Lists</h3>
			<h4>Runes</h4>
			<div className={styles.listContainer}>{rune_list.map((item_id) => (
				<ItemDisplaySquare id={item_id}/>
			))}</div>
			<h4>Ores</h4>
			<div className={styles.listContainer}>{ore_list.map((item_id) => (
				<ItemDisplaySquare id={item_id}/>
			))}</div>
			<h4>Logs</h4>
			<div className={styles.listContainer}>{log_list.map((item_id) => (
				<ItemDisplaySquare id={item_id}/>
			))}</div>
			<h4>Bars</h4>
			<div className={styles.listContainer}>{bar_list.map((item_id) => (
				<ItemDisplaySquare id={item_id}/>
			))}</div>
		</div>
	);
}

export default ListsView;