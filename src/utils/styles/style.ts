import * as React from "react";

export function style<T>(style: T): React.CSSProperties {
	return style as React.CSSProperties;
}