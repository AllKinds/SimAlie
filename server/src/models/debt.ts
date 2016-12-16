///<reference path="../../typings/index.d.ts"/>

import * as mongoose from 'mongoose';

export interface IDebt extends mongoose.Document {
	id: string,
	date: Date,
	amount: number
};

export const DebtSchema = new mongoose.Schema({
	id: {
		type: String
		// required: true
	},

	date: {
		type: Date,
		required: true
	},

	amount: {
		type: Number,
		required: true
	}
});

export let Debt = mongoose.model<IDebt>('Debt', DebtSchema);