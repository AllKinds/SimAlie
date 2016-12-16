export class Debt {
	constructor(
		private _id: string,
		public date: Date,
		public amount: number
		){}

	getId(): string {
		return this._id;
	}
}