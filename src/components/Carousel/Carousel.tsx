import styles from "./Carousel.module.css";
import * as React from "react";
import {type CSSProperties, type ReactElement} from "react";

type Props = {
	speed?: number;
	clones?: number;
	children: React.ReactElement[];
}

function Carousel({ speed = 15, clones = 2, children }: Props) {
	const style = {
		"--speed": `${speed}s`
	} as CSSProperties;

	const groups: ReactElement[] = [];
	for(let i = 0; i < clones; i++) {
		groups.push(
			<div className={styles.group}>
				{children.map((item) => <div className={styles.card} key={item.key}>{item}</div> )}
			</div>
		);
	}

	return <div className={styles.carousel} style={style}>{groups}</div>;
}

export default Carousel;