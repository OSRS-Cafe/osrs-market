import styles from "./BasicFlexRow.module.css";
import * as React from "react";
import type {CSSProperties} from "react";

type Props = {
	style?: CSSProperties;
	children?: React.ReactNode;
}

function BasicFlexRow({ style = {}, children = null }: Props) {
	return <div style={style} className={styles.container}>{children}</div>;
}

export default BasicFlexRow;