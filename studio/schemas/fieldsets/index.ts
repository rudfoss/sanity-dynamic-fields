import { SanityField, SanityFieldObject } from "../../types/SanitySchema";
import { setA } from "./setA";
import { setB } from "./setB";

export const dynamicFieldSets = [setA, setB]
export const dynamicFieldSetsByName = dynamicFieldSets.reduce<Record<string, SanityFieldObject>>((acc, set) => {
	acc[set.name] = set
	return acc
}, {})

export const getFieldsFromSetNames = (setNames: string[]) => {
	const fieldsByName = new Map<string, SanityField>()

	for (const setName of setNames) {
		const set = dynamicFieldSetsByName[setName]
		for (const field of set.fields) {
			const currentField = fieldsByName.get(field.name)
			if (currentField && currentField.type !== field.type) {
				throw new Error(`Two fields from the set ["${setNames.join('", "')}"] have the same name "${field.name}", but different types "${currentField.type}" vs "${field.type}". Overlapping names MUST be of the same type. Use prefixed names to distinguish them.`)
			}
			fieldsByName.set(field.name, field)
		}
	}

	return Array.from(fieldsByName.values())
}

export default dynamicFieldSets