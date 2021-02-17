import React, { useEffect, useMemo, useState } from "react"
import { DynamicFieldsSetPicker } from "./DynamicFieldsSetPicker"

import PatchEvent, { set, setIfMissing } from 'part:@sanity/form-builder/patch-event'
import DynamicFieldSetRenderer from "./DynamicFieldSetRenderer"
import { SanityInputType, SanityPatchEvent } from "../../types/SanitySchema"
import { dynamicFieldSetsByName } from "../fieldsets"

export interface DynamicFieldsInputProps {
	value?: {
		setName?: string
		[k: string]: any
	}
	type: {
		name: string
		fields: SanityInputType[]
	}

	onChange: (patchEvent: any) => void
}

export const DynamicFieldsInput = (props: DynamicFieldsInputProps, ref: React.Ref<any>) => {
	const { value, type, onChange } = props
	const [pickerType] = type.fields

	const fieldTypes = useMemo(() => {
		if (!value?.setName) return undefined
		const activeFieldNames = dynamicFieldSetsByName[value.setName].fields.map((field) => field.name)
		return type.fields.filter((fieldType) => activeFieldNames.indexOf(fieldType.name) >= 0)
	}, [value?.setName, type.fields])

	const onPatch = (patchEvent: SanityPatchEvent) => {
		onChange(patchEvent.prepend(setIfMissing({type: type.name})))
	}

	console.log("props", props)
	return <div>
		<DynamicFieldsSetPicker value={value?.setName} onChange={onPatch} type={pickerType} />
		{fieldTypes && (
			<DynamicFieldSetRenderer value={value as any} onChange={onPatch} fieldTypes={fieldTypes} />
		)}
	</div>
}

export default () => React.forwardRef(
	(props: DynamicFieldsInputProps, ref) => DynamicFieldsInput(props, ref)
)