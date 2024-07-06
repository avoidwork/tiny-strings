import {MSG_INVALID_INPUT, STRING_OBJECT, STRING_STRING} from "./constants.js";

export function strings (arg = {}, keys = false) {
	if (typeof arg !== STRING_OBJECT) {
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
			} else if (Array.isArray(arg[key])) {
				for (const value of arg[key]) {
					if (typeof value === STRING_OBJECT) {
						result.push(...strings(value, keys));
					} else if (typeof value === STRING_STRING) {
						result.push(value);
					}
				}
			} else if (typeof arg[key] === STRING_OBJECT) {
				result.push(...strings(arg[key], keys));
			}
		}
	}

	return result;
}