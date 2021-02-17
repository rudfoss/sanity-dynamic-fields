import { SanityFieldObject } from "../../types/SanitySchema";
import { createDynamicFieldSet } from "./createDynamicFieldSet";

export const setA = createDynamicFieldSet({
	title: "Set a",
	name: "dynamicFieldSet_a",
	type: "object",
	fields: [
		{
			title: "Set a title",
			name: "title",
			type: "string",
			description: "Give this field a friendly title",
			validation: (rule) => rule.required()
		},
		{
			title: "Set a value",
			name: "dynamicFieldSet_a_value",
			type: "boolean"
		}
	]
})