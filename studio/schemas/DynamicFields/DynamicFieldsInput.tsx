import React, { useEffect, useMemo, useState } from "react"
import { DynamicFieldsSetPicker } from "./DynamicFieldsSetPicker"

import PatchEvent, { set } from 'part:@sanity/form-builder/patch-event'
import DynamicFieldSetRenderer from "./DynamicFieldSetRenderer"
import { SanityInputType, SanityPatchEvent } from "../../types/SanitySchema"

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

	const onPatch = (patchEvent: SanityPatchEvent) => {
		if (value === undefined) {
			// For some reason this has to be here, otherwise the component will not react when the set picker
			// is initially set
			// TODO: Figure out why this has to be set
			onChange(PatchEvent.from(set({})))
		}
		onChange(patchEvent)
	}

	console.log("props", props)
	return <div>
		<DynamicFieldsSetPicker value={value?.setName} onChange={onPatch} type={pickerType} />
		<DynamicFieldSetRenderer value={value} onChange={onPatch} allFieldTypes={type.fields} />
	</div>
}

export default () => React.forwardRef(
	(props: DynamicFieldsInputProps, ref) => DynamicFieldsInput(props, ref)
)