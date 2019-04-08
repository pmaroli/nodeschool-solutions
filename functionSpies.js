/*
 * Override a specified method of an object with new functionality while still maintaining all of the old behaviour.
 *
 * Create a spy that keeps track of how many times a function is called.
 */

function Spy(target, method) {

	var originalFunction = target[method]

	// Must access value with spy.count, so the result must be an object
	var result = { count: 0 }

	// Define a new function that will keep track of the # of times the function is called
	target[method] = function() {
		result.count += 1
		return originalFunction(arguments) // Return the original function result
	}

	// Return the result so the user can call spy.count
	return result
}

module.exports = Spy
