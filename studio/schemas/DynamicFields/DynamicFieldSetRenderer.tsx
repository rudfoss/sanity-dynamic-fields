import React, { useMemo } from "react"

import { FormBuilderInput } from 'part:@sanity/form-builder'
import { SanityInputType, SanityPatchEvent } from "../../types/SanitySchema"
import { dynamicFieldSetsByName } from "../fieldsets"

interface DynamicFieldSetRendererProps {
	value?: {
		setName?: string
		[k: string]: any
	}
	allFieldTypes: SanityInputType[]
	onChange: (patchEvent: any) => void
}

export const DynamicFieldSetRenderer = (props: DynamicFieldSetRendererProps, ref: React.Ref<any>) => {
	const { value, allFieldTypes, onChange } = props
	if (!value || !value.setName) {
		return <p>No dynamic field set selected</p>
	}

	const fieldTypes = useMemo(() => {
		const activeFieldNames = dynamicFieldSetsByName[value.setName].fields.map((field) => field.name)
		return allFieldTypes.filter((fieldType) => activeFieldNames.indexOf(fieldType.name) >= 0)
	}, [value?.setName, allFieldTypes])

	const onFieldChange = (field: SanityInputType) => (patchEvent: SanityPatchEvent) => {
		onChange(patchEvent.prefixAll(field.name))
	}

	console.log("fieldTypes", fieldTypes, allFieldTypes)

	return (
		<div>
			{fieldTypes.map((field) => (
				<FormBuilderInput
					key={field.name}
					{...field}
					value={value[field.name]}
					onChange={onFieldChange(field)}
					path={[field.name]}
					/>
			))}
		</div>
	)
}

export default React.forwardRef(
	(props: DynamicFieldSetRendererProps, ref) => DynamicFieldSetRenderer(props, ref)
)