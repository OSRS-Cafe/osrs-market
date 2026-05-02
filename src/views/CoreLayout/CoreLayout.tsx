import {Outlet} from "react-router";
import SideBar from "../../components/SideBar";
import styles from "./CoreLayout.module.css";

function CoreLayout() {
	return (
		<div className={styles.root}>
			<SideBar/>
			<div className={styles.content}>
				<Outlet/>
			</div>
		</div>
	);
}

export default CoreLayout;