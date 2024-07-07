import {MSG_INVALID_INPUT, STRING_OBJECT, STRING_STRING} from "./constants.js";

/**
 * Returns an `Array` of `Strings` extracted from `arg`
 * @param arg
 * @param keys
 * @returns string[]
 */
export function strings (arg, keys = false) {
	if (typeof arg !== STRING_OBJECT || arg instanceof Map || arg instanceof Set || arg instanceof WeakMap || arg instanceof WeakSet) {
		throw new TypeError(MSG_INVALID_INPUT);
	}

	const result = [];

	if (Array.isArray(arg)) {
		for (const item of arg) {
			if (typeof item === STRING_STRING) {
				result.push(item);
			} else if (typeof item === STRING_OBJECT) {
				result.push(...strings(item, keys));
			}
		}
	} else {
		const argKeys = Object.keys(arg);

		if (keys) {
			result.push(...argKeys);
		}

		for (const key of argKeys) {
			if (typeof arg[key] === STRING_STRING) {
				result.push(arg[key]);
			} else if (typeof arg[key] === STRING_OBJECT) {
				result.push(...strings(arg[key], keys));
			}
		}
	}

	return result;
}