import { SanityDocument } from "../types/SanitySchema";

export const simpleDoc: SanityDocument = {
	title: "Simple doc",
	name: "simpleDoc",
	type: "document",
	fields: [
		{
			title: "Title",
			name: "title",
			type: "string"
		}
	]
}