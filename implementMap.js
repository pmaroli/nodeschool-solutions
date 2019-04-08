// Use Array.reduce to implement a simple versino of Array.map

module.exports = function arrayMap(arr, fn) {

	mappedArr = []

	arr.reduce( (accumulator, current, index, arr) => {
		// Apply the function to the element in the array
		next = fn(current)
		
		mappedArr.push(next)	
	
	}, [] ) // Initialize the accumulator with an empty array

	return mappedArr
}
