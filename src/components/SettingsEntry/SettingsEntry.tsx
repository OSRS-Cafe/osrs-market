import styles from "./SettingsEntry.module.css";
import type {JSX, ReactNode} from "react";

type Props = {
	label: string;
	description: string | JSX.Element;
	children: ReactNode;
}

function SettingsEntry({ label, description, children }: Props): ReactNode {
	return (
		<div className={styles.entry}>
			<div className={styles.left}>
				<label>{label}</label>
				<span>{description}</span>
			</div>
			<div className={styles.right}>{children}</div>
		</div>
	);
}

export default SettingsEntry;