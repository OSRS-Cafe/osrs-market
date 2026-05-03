import styles from "./Dropdown.module.css";
import  {type ReactElement, type ReactNode} from "react";
import * as React from "react";
import {classes} from "../../utils/styles";

type Props = {
	value: string;
	tabIndex?: number;
	onChange: (value: string) => void;
	children: ReactNode[];
}

function Dropdown({ value, tabIndex = -1, onChange, children }: Props) {
	const [isOpen, setIsOpen] = React.useState<boolean>(false);

	const handleClose = () => setIsOpen(false);
	const toggleOpen = () => setIsOpen(!isOpen);

	const items: ReactElement[] = children as ReactElement[];
	const selected = items.find((i) => i.key == value);

	return (
		<div className={styles.dropdown} tabIndex={tabIndex} onBlur={handleClose}>
			<div className={styles.option} onClick={toggleOpen}>{selected}</div>
			<div className={styles.column}>
				{isOpen && items.map((item) => {
					const key = item.key;
					if(!key) throw Error("Dropdown Children must have a key!");
					const handleClick = () => {
						setIsOpen(false);
						onChange(key);
					};
					return <div className={classes(styles.option, styles.top)} key={key} onClick={handleClick}>{item}</div>;
				})}
			</div>
		</div>
	);
}

export default Dropdown;