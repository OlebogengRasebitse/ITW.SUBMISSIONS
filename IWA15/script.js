// scripts.js

const data = {
	lists: [  //PROPERTY
		['first', [15, 11, 13, 7, 5]],   //SUB-ARRAYS.
		['second', [2, 6, 8, 4, 14, 12, 10]],
		['third', [9, 3, 1]],
	]
}

// Only edit below

// The code must compare the last value of each provided array.
// The largest value must be removed from it’s array to the result array.


const first = data.lists[0][1]  //SELECT ARRAY WITH NUMBERS ONLY.
const second  = data.lists[1][1]
const third = data.lists[2][1]


const extractBiggest = () => {
	if ( first[first.length - 1] > second[second.length -1] && first[first.length -1] > third[third.length -1]){ 
		return first.pop()
	}
	if (second[second.length -1] > third[third.length -1]){;
		return second.pop()
	}
		console.log(third.pop());
    return third.pop()
	}
	// .length property returns the number of elements in an array.
	// checks if the last element in the first array is greater than the last element in both the second and third arrays.

	const result = []
// Only edit above

result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())

result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())

result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())

console.log(result)

//.push() is a built-in method that allows you to add one or more elements to the end of an array.
//.pop() is a built-in method that allows you to remove the last element from an array and returns that element.
//.length is a built-in property that allows you to get the number of elements in an array or the number of characters in a string.


// This code defines a function called extractBiggest that does the following:

// It checks if the last element in the first array is greater than the last element in both the second and third arrays. If this is true, it removes and returns the last element from the first array using the pop method.
// If the condition in step 1 is not met, it checks if the last element in the second array is greater than the last element in the third array. If this is true, it removes and returns the last element from the second array using the pop method.
// If neither of the conditions in steps 1 or 2 are met, it removes and returns the last element from the third array using the pop method.