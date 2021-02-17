import { SanityFieldObject } from "../../types/SanitySchema";

interface CreateDynamicFieldsFieldOptions { // yey for descriptive type names ;)
	
}

export const createDynamicFieldsField = (): SanityFieldObject => ({
	title: "Fields",
	name: "dynamicFields",
	type: "object",
	fields: [
		{
			title: "Dummy",
			name: "dummy_field",
			type: "string"
		}
	]
})