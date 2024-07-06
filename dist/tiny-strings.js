/**
 * tiny-strings
 *
 * @copyright 2024 Jason Mulligan <jason.mulligan@avoidwork.com>
 * @license BSD-3-Clause
 * @version 1.0.0
 */
const STRING_STRING = "string";
const STRING_OBJECT = "object";
const MSG_INVALID_INPUT = "Argument must be an Array or Object";function strings (arg = {}, keys = false, result = []) {
	if (typeof arg !== STRING_OBJECT) {
		throw new TypeError(MSG_INVALID_INPUT);
	}

	if (Array.isArray(arg)) {
		for (const item of arg) {
			if (typeof item === STRING_STRING) {
				result.push(item);
			} else if (typeof item === STRING_OBJECT) {
				strings(item, keys, result);
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
						strings(value, keys, result);
					} else if (typeof value === STRING_STRING) {
						result.push(value);
					}
				}
			} else if (typeof arg[key] === STRING_OBJECT) {
				strings(arg[key], keys, result);
			}
		}
	}

	return result;
}export{strings};