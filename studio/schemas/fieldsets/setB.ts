import { SanityFieldObject } from "../../types/SanitySchema";
import { createDynamicFieldSet } from "./createDynamicFieldSet";

export const setB = createDynamicFieldSet({
	title: "Set b",
	name: "dynamicFieldSet_b",
	type: "object",
	fields: [
		{
			title: "Set b title",
			name: "title",
			type: "string",
			description: "This is a different title"
		},
		{
			title: "Set b value",
			name: "dynamicFieldSet_b_value",
			type: "number"
		}
	]
})