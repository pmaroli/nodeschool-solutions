/*
 * Modify the boilerplate below such that it uses a trampoline to continuously call itself synchronously.
 *
 * You can assume that the operation passed to repeat does not take arguments (or they are already bound to the function) and the return value is not important.
 */

function repeat(operation, num) {

	if( num <= 0 ) return
	operation()
	return repeat(operation, --num)
}

function trampoline(fn) {
	//implement
}

module.exports = function(operation, num) {
	// Probably want to call the trampoline here
	return repeat(operation, num)
}


// SOLUTION MUST BE IMPLEMENTED
