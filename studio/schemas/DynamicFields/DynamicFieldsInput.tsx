import React, { useEffect, useState } from "react"
import { DynamicFieldSet } from "../fieldsets"
import { DynamicFieldsSetPicker } from "./DynamicFieldsSetPicker"

import PatchEvent, {set, unset} from 'part:@sanity/form-builder/patch-event'

export interface DynamicFieldsInputProps {
	value?: {
		setId?: string
		[k: string]: any
	}
	type: {
		name: string
		fields: any[]
	}

	sets: DynamicFieldSet[]
	onChange: (patchEvent: any) => void
}

export const DynamicFieldsInput = (props: DynamicFieldsInputProps, ref: React.Ref<any>) => {
	const { value, type, onChange } = props
	const [pickerType] = type.fields

	const onPickerChange = (patchEvent: any) => {
		if (value === undefined) {
			// For some reason this has to be here, otherwise the component will not react when the set picker
			// is initially set
			onChange(PatchEvent.from(set({})))
		}
		onChange(patchEvent)
	}

	console.log("props", props)
	return <div>
		<DynamicFieldsSetPicker value={value?.setId} onChange={onPickerChange} type={pickerType} />
	</div>
}

export default React.forwardRef(
	(props: DynamicFieldsInputProps, ref) => DynamicFieldsInput(props, ref)
)