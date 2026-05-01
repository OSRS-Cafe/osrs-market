import * as React from "react";
import styles from "./SkeletonText.module.css"
import {style} from "../../utils/styles";

type Props = {
	w: number;
	show: boolean;
	children?: React.ReactNode;
}

function SkeletonText({ w, show, children }: Props) {
	return (
		<div
			style={style({
				"--w": w
			})}
			className={show ? "" : styles.skeleton}
		>
			{show ? children : "#".repeat(w)}
		</div>
	);
}

export default SkeletonText;