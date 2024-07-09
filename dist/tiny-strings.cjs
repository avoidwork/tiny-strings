/**
 * tiny-strings
 *
 * @copyright 2024 Jason Mulligan <jason.mulligan@avoidwork.com>
 * @license BSD-3-Clause
 * @version 1.0.7
 */
'use strict';

const STRING_STRING = "string";
const STRING_OBJECT = "object";
const MSG_INVALID_INPUT = "Argument must be an Array or Object";

/**
 * Returns an `Array` of `Strings` extracted from `arg`
 * @param arg
 * @param keys
 * @returns string[]
 */
function strings (arg, keys = false, skip = []) {
	if (typeof arg !== STRING_OBJECT || arg instanceof Map || arg instanceof Set || arg instanceof WeakMap || arg instanceof WeakSet) {
		throw new TypeError(MSG_INVALID_INPUT);
	}

	const result = [];

	if (Array.isArray(arg)) {
		for (const item of arg) {
			if (typeof item === STRING_STRING) {
				result.push(item);
			} else if (typeof item === STRING_OBJECT) {
				result.push(...strings(item, keys, skip));
			}
		}
	} else {
		const argKeys = skip.length === 0 ? Object.keys(arg) : Object.keys(arg).filter(it => !skip.includes(it));

		if (keys) {
			result.push(...argKeys);
		}

		for (const key of argKeys) {
			if (typeof arg[key] === STRING_STRING) {
				result.push(arg[key]);
			} else if (typeof arg[key] === STRING_OBJECT) {
				result.push(...strings(arg[key], keys, skip));
			}
		}
	}

	return result;
}

exports.strings = strings;
