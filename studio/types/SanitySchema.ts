import React from "react"
import { SanityDocument as SanityQueryDocument } from "@sanity/client"

/**
 * A Sanity name string. Can only a-z A-Z 0-9 and underscore.
 */
export type SanityName = string

export interface SanitySelectorSet {
	[key: string]: string
}
export type SanityPreviewPreparerFunc = (selection: {
	[key: string]: any
}) => {
	title: any
	subtitle?: any
	media?: React.ReactNode
}

export type BaseTypes =
	| "array"
	| "block"
	| "boolean"
	| "date"
	| "datetime"
	| "file"
	| "geopoint"
	| "image"
	| "number"
	| "object"
	| "reference"
	| "slug"
	| "string"
	| "span"
	| "text"
	| "url"
	| "document"

export interface SanityFieldSet {
	title: string
	name: SanityName
	options?: {
		collapsible?: boolean
		collapsed?: boolean
	}
}

export interface SanityPreview {
	select?: { [key: string]: string }
	prepare?: SanityPreviewPreparerFunc
}

export interface SanityFieldBase {
	title: string
	name: SanityName
	type: BaseTypes
	description?: string | React.ReactNode
	/**
	 * A list of fieldsets for this schema.
	 */
	fieldsets?: SanityFieldSet[]
	/**
	 * The name of the fieldset to associate with this field.
	 */
	fieldset?: string
	preview?: SanityPreview
	inputComponent?: React.ReactNode
	validation?: (rule: any) => true | string | Promise<true | string>
}

export interface SanityFieldArray extends SanityFieldBase {
	type: "array"
	of: SanityField[]
	options?: {
		sortable?: boolean
		layout?: "tag" | "grid"
		list?: any[]
		editModal?: "dialog" | "fullScreen" | "popover"
	}
}

export interface SanityFieldReference extends SanityFieldBase {
	type: "reference"
	to: any[]
	weak?: boolean
	options?: {
		filter?: string
		filterParams?: any
	}
}

export interface SanityFieldSlug extends SanityFieldBase {
	type: "slug"
	options?: {
		source?: ((doc: Record<string, any>, options: any) => string) | string
		slugify?: (input: string, type: SanityFieldSlug) => string
	}
}
export interface SanitySlugValue {
	current?: string
}
export const isSlugValue = (value: any): value is SanitySlugValue =>
	!!value.current

export interface SanityFieldTextOptionsListItem {
	title: string | React.ReactNode
	value: string
}
export interface SanityFieldText extends SanityFieldBase {
	type: "string"
	options?: {
		list?: string[] | SanityFieldTextOptionsListItem[]
		layout?: "radio" | "dropdown"
		direction?: "horizontal" | "vertical"
	}
}

export interface SanityFieldBlock extends SanityFieldBase {
	type: "block"
	styles?: any[]
	lists?: any[]
	marks?: {
		decorators?: any[]
		annotations?: any[]
	}
}

export interface SanityFieldBoolean extends SanityFieldBase {
	type: "boolean"
	options?: {
		layout?: "switch" | "checkbox"
	}
}

export interface SanityFieldCustom extends Omit<SanityFieldBase, "type"> {
	type: string
}

export type SanityField =
	| SanityFieldArray
	| SanityFieldReference
	| SanityFieldObject
	| SanityFieldSlug
	| SanityFieldBoolean
	| SanityFieldText
	| SanityFieldBlock
	| SanityFieldCustom

export interface SanityDocument extends SanityFieldBase {
	type: "document"
	fields: SanityField[]
	initialValue?: Record<string, any>
}

export interface SanityFieldObject extends SanityFieldBase {
	type: "object"
	fields: SanityField[]
}

export interface SanityValidatorContext<
	TDocument = SanityQueryDocument,
	TParentFieldType = any
> {
	document: TDocument
	parent: TParentFieldType
	path: any
	type: {
		name: string
	}
}
export type SanityValidatorFunctionResult =
	| boolean
	| string
	| {
			message: string
			paths: Array<{ _key: string } | number | string> // https://www.sanity.io/docs/validation#validating-children-9e69d5db6f72
	  }
export type SanityValidatorFunction<
	TValueType = any,
	TDocument = SanityQueryDocument,
	TParentFieldType = any
> = (
	value: TValueType | undefined,
	context: SanityValidatorContext<TDocument, TParentFieldType>
) => SanityValidatorFunctionResult | Promise<SanityValidatorFunctionResult>

export interface SanityPatch<TValueType = any> {
	type: "set" | "unset" | "setIfMissing"
	path?: string[]
	value?: TValueType
}

export interface SanityMarker {
	level: string
	path: string[]
	type: string
}
