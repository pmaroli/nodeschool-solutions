
var slice = Array.prototype.slice

function logger(namespace) {

	return function() {

		let arr = slice.apply( arguments, [0] ) // Create an array from the arguments using slice
		arr.unshift(namespace) // Add the namespace to the beginning of the array

		console.log.apply(null, arr) // Use apply to send an array of inputs to console.log

	}

}

module.exports = logger
