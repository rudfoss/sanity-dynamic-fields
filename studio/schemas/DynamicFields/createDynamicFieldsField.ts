import { SanityFieldObject } from "../../types/SanitySchema";
import { dynamicFieldSetsByName, getFieldsFromSetNames } from "../fieldsets";
import DynamicFieldsInput from "./DynamicFieldsInput";

interface CreateDynamicFieldsFieldOptions { // yey for descriptive type names ;)
	title: string
	name: string

	pickerTitle: string

	setNames: string[]
}

export const createDynamicFieldsField = ({
	title,
	name,
	pickerTitle,
	setNames,
}: CreateDynamicFieldsFieldOptions): SanityFieldObject => ({
	title,
	name,
	type: "object",
	fields: [
		{
			title: pickerTitle,
			name: "setName", // TODO: Make this dynamic
			type: "string",
			options: {
				list: (setNames.map((setName) => ({
						title: dynamicFieldSetsByName[setName].title,
						value: setName
					})
				))
			}
		},
		...getFieldsFromSetNames(setNames)
	],
	inputComponent: DynamicFieldsInput()
})