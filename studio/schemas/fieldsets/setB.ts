import { SanityFieldObject } from "../../types/SanitySchema";

export const setB: SanityFieldObject = {
	title: "Set b",
	name: "dynamicFieldSet_b",
	type: "object",
	fields: [
		{
			title: "Set b title",
			name: "title",
			type: "string"
		},
		{
			title: "Set b value",
			name: "dynamicFieldSet_b_value",
			type: "number"
		}
	]
}