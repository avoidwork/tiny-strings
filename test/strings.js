import {strictEqual, throws} from "node:assert";
import {strings} from "../dist/tiny-strings.cjs";

describe("Testing functionality", function () {
	it("It should extract all strings from an Object", function () {
		const results = strings({
			"id": "test-123",
			"email": "test@example.com",
			"field1:field2": "d,e",
			"description": "this field has \"embed quotes\"",
			"object": {
				"abc": true,
				"def": false
			},
			"array": [
				"ghi",
				1234,
				"other string",
				{
					"nested": true
				}
			]
		});
		const expectedResult = [
			"test-123",
			"test@example.com",
			"d,e",
			"this field has \"embed quotes\"",
			"ghi",
			"other string"
		];
		strictEqual(JSON.stringify(results), JSON.stringify(expectedResult), "Arrays of strings should match");
	});

	it("It should extract all strings (including keys) from an Object", function () {
		const results = strings({
			"id": "test-123",
			"email": "test@example.com",
			"field1:field2": "d,e",
			"description": "this field has \"embed quotes\"",
			"object": {
				"abc": true,
				"def": false
			},
			"array": [
				"ghi",
				1234,
				"other string",
				{
					"nested": true
				}
			]
		}, true);
		const expectedResult = [
			"id",
			"email",
			"field1:field2",
			"description",
			"object",
			"array",
			"test-123",
			"test@example.com",
			"d,e",
			"this field has \"embed quotes\"",
			"abc",
			"def",
			"ghi",
			"other string",
			"nested"
		];
		strictEqual(JSON.stringify(results), JSON.stringify(expectedResult), "Arrays of strings should match");
	});

	it("It should extract all strings from an Array of Objects", function () {
		const results = strings([{
			"id": "test-123",
			"email": "test@example.com",
			"field1:field2": "d,e",
			"description": "this field has \"embed quotes\"",
			"object": {
				"abc": true,
				"def": false
			},
			"array": [
				"ghi",
				1234,
				"other string",
				{
					"nested": true
				},
				[
					"nested array"
				]
			]
		}]);
		const expectedResult = [
			"test-123",
			"test@example.com",
			"d,e",
			"this field has \"embed quotes\"",
			"ghi",
			"other string",
			"nested array"
		];
		strictEqual(JSON.stringify(results), JSON.stringify(expectedResult), "Arrays of strings should match");
	});

	it("It should throw a TypeError if receiving a String", function () {
		throws(() => strings("invalid"), TypeError);
	})
});
