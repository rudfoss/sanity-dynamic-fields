import { SanityFieldObject, SanityFieldText, SanityFieldTextOptionsListItem } from "../../types/SanitySchema";
import { DynamicFieldSet } from "../fieldsets";
import { DynamicFieldsInput } from "./DynamicFieldsInput";

interface CreateDynamicFieldsFieldOptions { // yey for descriptive type names ;)
	title: string
	name: string

	pickerTitle: string

	sets: DynamicFieldSet[]
}

export const createDynamicFieldsField = ({
	title,
	name,

	pickerTitle,

	sets
}: CreateDynamicFieldsFieldOptions): SanityFieldObject => ({
	title,
	name,
	type: "object",
	fields: [
		{
			title: pickerTitle,
			name: "setId",
			type: "string",
			options: {
				list: sets.map((set) => ({
					title: set.title,
					value: set.id
				}))
			}
		}
	],
	inputComponent: DynamicFieldsInput
})