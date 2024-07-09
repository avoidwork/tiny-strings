/**
 * tiny-strings
 *
 * @copyright 2024 Jason Mulligan <jason.mulligan@avoidwork.com>
 * @license BSD-3-Clause
 * @version 1.0.12
 */
(function(g,f){typeof exports==='object'&&typeof module!=='undefined'?f(exports):typeof define==='function'&&define.amd?define(['exports'],f):(g=typeof globalThis!=='undefined'?globalThis:g||self,f(g.strings={}));})(this,(function(exports){'use strict';const STRING_STRING = "string";
const STRING_OBJECT = "object";
const MSG_INVALID_INPUT = "Argument must be an Array or Object";/**
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
function strings (arg, keys = false, skip = []) {
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
}exports.strings=strings;}));