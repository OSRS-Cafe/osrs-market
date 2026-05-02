import styles from "./SideBar.module.css";
import {NavLink} from "react-router";
import test from "../../../package.json";

function SideBar() {
	return (
		<div className={styles.container}>
			<h1>OSRS Market</h1>
			<NavLink draggable={false} to="/" className={styles.navButton}>Home</NavLink>
			<NavLink draggable={false} to="/lists" className={styles.navButton}>Lists</NavLink>
			<NavLink draggable={false} to="/calculator" className={styles.navButton}>Calculator</NavLink>
			<NavLink draggable={false} to="/settings" className={styles.navButton}>Settings</NavLink>
			<div className={styles.footer}>
				<span>osrs-market v{test.version}</span>
				<span>Made by OSRS.Cafe | 2026</span>
				<span>Data Provided by RuneLite & the Runescape Wiki</span>
			</div>
		</div>
	);
}

export default SideBar;