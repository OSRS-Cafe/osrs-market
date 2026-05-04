export class Logger {
	private readonly name: string;

	constructor(name: string) {
		this.name = name;
	}

	log(...data: any[]): void {
		console.log(`${this.name}:`, ...data);
	};

	warn(...data: any[]): void {
		console.warn(`${this.name}:`, ...data);
	}

	error(...data: any[]): void {
		console.error(`${this.name}:`, ...data);
	}
}