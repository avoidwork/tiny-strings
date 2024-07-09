import {MSG_INVALID_INPUT, STRING_OBJECT, STRING_STRING} from "./constants.js";

/**
 * Pushes `item` to `result` if it is a `String` or an `Object`
 * @param result
 * @param item
 * @param keys
 * @param skip
 */
function push (result, item, keys, skip) {
	if (typeof item === STRING_STRING) {
		result.push(item);
	} else if (typeof item === STRING_OBJECT && item !== null) {
		result.push(...strings(item, keys, skip));
	}
}

/**
 * Returns an `Array` of `Strings` extracted from `arg`
 * @param arg
 * @param keys
 * @param skip
 * @returns string[]
 */
export function strings (arg, keys = false, skip = []) {
	if (typeof arg !== STRING_OBJECT || arg instanceof Map || arg instanceof Set || arg instanceof WeakMap || arg instanceof WeakSet) {
		throw new TypeError(MSG_INVALID_INPUT);
	}

	const result = [];

	if (Array.isArray(arg)) {
		for (const item of arg) {
			push(result, item, keys, skip);
		}
	} else {
		const argKeys = skip.length === 0 ? Object.keys(arg) : Object.keys(arg).filter(it => !skip.includes(it));

		if (keys) {
			result.push(...argKeys);
		}

		for (const key of argKeys) {
			push(result, arg[key], keys, skip);
		}
	}

	return result;
}