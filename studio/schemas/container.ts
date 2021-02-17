import { SanityDocument } from "../types/SanitySchema";
import { createDynamicFieldsField } from "./DynamicFields";
import dynamicFieldSets from "./fieldsets";

export const container: SanityDocument = {
	title: "Container",
	name: "container",
	type: "document",
	fields: [
		{
			title: "Title",
			name: "title",
			type: "string"
		},
		createDynamicFieldsField({
			title: "Pick fields to include",
			name: "fields",
			pickerTitle: "Pick set",
			sets: dynamicFieldSets
		})
	]
}