import React from "react"

import { FormBuilderInput } from 'part:@sanity/form-builder'

export interface DynamicFieldsSetPickerProps {
	type: any

	value: string
	onChange: (patchEvent: any) => void
}

export const DynamicFieldsSetPicker = (props: DynamicFieldsSetPickerProps, ref: React.Ref<any>) => {
	console.log("pickerProps", props)

	const { type, value, onChange } = props
	const { inputComponent, ...safeTypes } = type

	const onPickerChange = (patchEvent: any) => {
		onChange(patchEvent.prefixAll(type.name))
	}

	return <FormBuilderInput
		{...safeTypes}
		value={value}
		onChange={onPickerChange}
		/>
}

export default React.forwardRef(
	(props: DynamicFieldsSetPickerProps, ref) => DynamicFieldsSetPicker(props, ref)
)