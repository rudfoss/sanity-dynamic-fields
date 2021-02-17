export * from "./DynamicFieldSet"
import { DynamicFieldSet } from "./DynamicFieldSet";
import { setA } from "./setA";
import { setB } from "./setB";

export const dynamicFieldSets = [setA, setB]
export const dynamicFieldSetsById = dynamicFieldSets.reduce<Record<string, DynamicFieldSet>>((acc, set) => {
	acc[set.id] = set
	return acc
}, {})

export default dynamicFieldSets