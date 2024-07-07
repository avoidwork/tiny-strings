# Tiny Strings

Scrape Strings from Arrays and Objects.

## API

### strings(*arg = {}, keys = false*)

Returns an `Array` of `Strings` extracted from `arg`

    param  {Array} or {Object} to scrape
    param  {Boolean} to include Object keys
	return {Array} Array of Strings scraped from 'arg'

**Example**

Without keys

```javascript
strings({...});
```

With keys
```javascript
strings({...}, true);
```

## Testing

Tiny Strings has 100% code coverage with its tests.

```console
------------------|---------|----------|---------|---------|-------------------
File              | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s
------------------|---------|----------|---------|---------|-------------------
All files         |     100 |    93.75 |     100 |     100 |                  
 tiny-strings.cjs |     100 |    93.75 |     100 |     100 | 20               
------------------|---------|----------|---------|---------|-------------------
```

## Example

### Input

```javascript
import {strings} from "tiny-strings";
const extracted = strings([
	{
		"_id": "66897c0b5bb3f3bda598a7be",
		"index": 0,
		"guid": "57cc37b7-ea7b-4cf5-b07e-238a15cc1cdd",
		"isActive": true,
		"balance": "$1,290.80",
		"picture": "http://placehold.it/32x32",
		"age": 21,
		"eyeColor": "blue",
		"name": "Valeria Jenkins",
		"gender": "female",
		"company": "GEOLOGIX",
		"email": "valeriajenkins@geologix.com",
		"phone": "+1 (976) 597-3338",
		"address": "681 Jackson Place, Collins, Nevada, 8477",
		"about": "Officia sunt fugiat aute eiusmod cillum excepteur enim consectetur in pariatur consequat cupidatat. Id minim anim sint cupidatat nostrud labore esse proident eiusmod eu. Dolor sit aute adipisicing est proident eiusmod voluptate reprehenderit sunt aliquip non quis. Lorem voluptate laboris aliquip cupidatat.\r\n",
		"registered": "2016-04-05T01:14:10 +04:00",
		"latitude": 8.514373,
		"longitude": -22.578972,
		"tags": [
			"voluptate",
			"esse",
			"amet",
			"mollit",
			"in",
			"consectetur",
			"sunt"
		],
		"friends": [
			{
				"id": 0,
				"name": "Moore Howell"
			},
			{
				"id": 1,
				"name": "Summer Cline"
			},
			{
				"id": 2,
				"name": "Francis Simon"
			}
		],
		"greeting": "Hello, Valeria Jenkins! You have 1 unread messages.",
		"favoriteFruit": "banana"
	},
	{
		"_id": "66897c0b0eea9250887803d6",
		"index": 1,
		"guid": "6eac3134-b442-4289-a498-ef9b5624f196",
		"isActive": false,
		"balance": "$1,302.96",
		"picture": "http://placehold.it/32x32",
		"age": 28,
		"eyeColor": "brown",
		"name": "Amanda Rodgers",
		"gender": "female",
		"company": "GRAINSPOT",
		"email": "amandarodgers@grainspot.com",
		"phone": "+1 (987) 457-3247",
		"address": "650 Osborn Street, Edenburg, New Jersey, 1377",
		"about": "Eu minim enim aliquip nulla aliquip elit sit nostrud dolore reprehenderit aliquip sit qui Lorem. Enim et excepteur dolor velit minim nulla ullamco nisi. Qui adipisicing id occaecat nisi duis quis sint minim laborum minim id. Do id aliqua deserunt incididunt nulla officia nostrud reprehenderit laborum aliquip qui. Veniam pariatur eu quis reprehenderit velit nostrud deserunt deserunt. Commodo duis esse deserunt laborum tempor dolore anim laborum deserunt ipsum sit tempor consectetur.\r\n",
		"registered": "2023-05-27T09:39:08 +04:00",
		"latitude": 45.890773,
		"longitude": -29.059383,
		"tags": [
			"Lorem",
			"sunt",
			"cillum",
			"ea",
			"in",
			"aute",
			"culpa"
		],
		"friends": [
			{
				"id": 0,
				"name": "Jo Nunez"
			},
			{
				"id": 1,
				"name": "Mcdonald Burns"
			},
			{
				"id": 2,
				"name": "Pacheco Vang"
			}
		],
		"greeting": "Hello, Amanda Rodgers! You have 7 unread messages.",
		"favoriteFruit": "strawberry"
	}
]);
```

### Output

```javascript
[
	"66897c0b5bb3f3bda598a7be",
	"57cc37b7-ea7b-4cf5-b07e-238a15cc1cdd",
	"$1,290.80",
	"http://placehold.it/32x32",
	"blue",
	"Valeria Jenkins",
	"female",
	"GEOLOGIX",
	"valeriajenkins@geologix.com",
	"+1 (976) 597-3338",
	"681 Jackson Place, Collins, Nevada, 8477",
	"Officia sunt fugiat aute eiusmod cillum excepteur enim consectetur in pariatur consequat cupidatat. Id minim anim sint cupidatat nostrud labore esse proident eiusmod eu. Dolor sit aute adipisicing est proident eiusmod voluptate reprehenderit sunt aliquip non quis. Lorem voluptate laboris aliquip cupidatat.\r\n",
	"2016-04-05T01:14:10 +04:00",
	"voluptate",
	"esse",
	"amet",
	"mollit",
	"in",
	"consectetur",
	"sunt",
	"Moore Howell",
	"Summer Cline",
	"Francis Simon",
	"Hello, Valeria Jenkins! You have 1 unread messages.",
	"banana",
	"66897c0b0eea9250887803d6",
	"6eac3134-b442-4289-a498-ef9b5624f196",
	"$1,302.96",
	"http://placehold.it/32x32",
	"brown",
	"Amanda Rodgers",
	"female",
	"GRAINSPOT",
	"amandarodgers@grainspot.com",
	"+1 (987) 457-3247",
	"650 Osborn Street, Edenburg, New Jersey, 1377",
	"Eu minim enim aliquip nulla aliquip elit sit nostrud dolore reprehenderit aliquip sit qui Lorem. Enim et excepteur dolor velit minim nulla ullamco nisi. Qui adipisicing id occaecat nisi duis quis sint minim laborum minim id. Do id aliqua deserunt incididunt nulla officia nostrud reprehenderit laborum aliquip qui. Veniam pariatur eu quis reprehenderit velit nostrud deserunt deserunt. Commodo duis esse deserunt laborum tempor dolore anim laborum deserunt ipsum sit tempor consectetur.\r\n",
	"2023-05-27T09:39:08 +04:00",
	"Lorem",
	"sunt",
	"cillum",
	"ea",
	"in",
	"aute",
	"culpa",
	"Jo Nunez",
	"Mcdonald Burns",
	"Pacheco Vang",
	"Hello, Amanda Rodgers! You have 7 unread messages.",
	"strawberry"
]
```

## License
Copyright (c) 2024 Jason Mulligan
Licensed under the BSD-3 license.
