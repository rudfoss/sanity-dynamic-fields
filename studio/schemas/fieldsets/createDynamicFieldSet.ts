import { SanityFieldObject } from "../../types/SanitySchema";

/**
 * Creates a new dynamic field set as a regular Sanity Object. Ensures all fields are prefixed with the
 * field set name to avoid collisions.
 * @param setObject 
 */
export const createDynamicFieldSet = (setObject: SanityFieldObject): SanityFieldObject => ({
	...setObject,
	fields: setObject.fields.map((field) => ({
		...field,
		name: `${setObject.name}_${field.name}`
	}))
})