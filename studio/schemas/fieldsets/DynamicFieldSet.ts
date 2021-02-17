import { SanityField } from "../../types/SanitySchema";

export interface DynamicFieldSet {
	title: string,
	id: string
	fields: SanityField[]
}