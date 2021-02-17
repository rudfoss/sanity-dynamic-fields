import React, { useMemo } from "react"

import { FormBuilderInput } from 'part:@sanity/form-builder'
import { SanityInputType, SanityPatchEvent } from "../../types/SanitySchema"
import Fieldset from 'part:@sanity/components/fieldsets/default'
import { dynamicFieldSetsByName } from "../fieldsets"

interface DynamicFieldSetRendererProps {
	value: {
		setName: string
		[k: string]: any
	}
	fieldTypes: SanityInputType[]
	onChange: (patchEvent: any) => void
}

export const DynamicFieldSetRenderer = (props: DynamicFieldSetRendererProps, ref: React.Ref<any>) => {
	const { value, fieldTypes, onChange } = props
	const fieldSetName = useMemo(() => dynamicFieldSetsByName[value.setName].title, [value.setName])

	const onFieldChange = (field: SanityInputType) => (patchEvent: SanityPatchEvent) => {
		onChange(patchEvent.prefixAll(field.name))
	}

	console.log("fieldTypes", fieldTypes)

	return (
		<Fieldset legend={fieldSetName} isCollapsible>
			{fieldTypes.map((field) => (
				<FormBuilderInput
					key={field.name}
					{...field}
					value={value[field.name]}
					onChange={onFieldChange(field)}
					path={[field.name]}
					/>
			))}
		</Fieldset>
	)
}

export default React.forwardRef(
	(props: DynamicFieldSetRendererProps, ref) => DynamicFieldSetRenderer(props, ref)
)