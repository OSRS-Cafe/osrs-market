import styles from "./Checkbox.module.css";

type Props = {
	value: boolean;
	onChange: (value: boolean) => void;
}

function CheckBox({value, onChange}: Props) {
	const handleToggle = () => onChange(!value);
	return <div className={styles.checkbox} onClick={handleToggle}>{value && <CheckedIcon/>}</div>;
}

function CheckedIcon() {
	return (
		<svg width={32} height={32}>
			<line x1={8} y1={8} x2={24} y2={24} strokeWidth={4} strokeLinecap="round" className={styles.line}/>
			<line x1={8} y1={24} x2={24} y2={8} strokeWidth={4} strokeLinecap="round" className={styles.line}/>
		</svg>
	);
}

export default CheckBox;