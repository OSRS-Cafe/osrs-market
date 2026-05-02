import styles from "./ListsView.module.css";
import {useTlStore} from "../zustand/tlStore.ts";
import {rune_list} from "../data/lists/rune-list.ts";
import ItemDisplaySquare from "../components/ItemDisplaySquare";
import * as React from "react";

function ListsView() {
	const tl = useTlStore((s) => s.strings);


	return (
		<div className={styles.root}>
			<h3>Lists</h3>
			<h4>Runes</h4>
			<div className={styles.listContainer}>{rune_list.map((rune_id) => (
				<ItemDisplaySquare id={rune_id}/>
			))}</div>
		</div>
	);
}

export default ListsView;