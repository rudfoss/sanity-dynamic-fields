import { SanityDocument } from "../types/SanitySchema";
import { createDynamicFieldsField } from "./DynamicFields";

export const container: SanityDocument = {
	title: "Container",
	name: "container",
	type: "document",
	fields: [
		{
			title: "Pick fields",
			name: "pickFields",
			type: "string",
			options: {
				list: [
					{
						title: "Set a",
						value: "a"
					},
					{
						title: "Set b",
						value: "b"
					}
				]
			}
		},
		createDynamicFieldsField()
	]
}