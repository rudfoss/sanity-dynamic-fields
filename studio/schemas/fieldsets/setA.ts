import { SanityFieldObject } from "../../types/SanitySchema";

export const setA: SanityFieldObject = {
	title: "Set a",
	name: "dynamicFieldSet_a",
	type: "object",
	fields: [
		{
			title: "Set a title",
			name: "title",
			type: "string"
		},
		{
			title: "Set a value",
			name: "dynamicFieldSet_a_value",
			type: "boolean"
		}
	]
}