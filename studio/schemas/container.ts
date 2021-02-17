import { SanityDocument } from "../types/SanitySchema";
import { createDynamicFieldsField } from "./DynamicFields";
import { setA } from "./fieldsets/setA";
import { setB } from "./fieldsets/setB";

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
			name: "fieldset",
			pickerTitle: "Pick a field set",
			setNames: [setA.name, setB.name]
		})
	]
}