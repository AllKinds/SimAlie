///<reference path="../../typings/index.d.ts"/>

import * as mongoose from 'mongoose';

export interface IContact extends mongoose.Document {
	id: string;
	name: string;
	totalDebt: number;
};

export const ContactSchema = new mongoose.Schema({
	id: {
		type: String
		// required: true
	},

	name: {
		type: String,
		required: true
	},

	totalDebt: {
		type: Number,
		default: 0
	}
});

export let Contact = mongoose.model<IContact>('Contact', ContactSchema);