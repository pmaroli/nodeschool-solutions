
function repeat(operation, num) {

	if( num === 0 ) {
		// Do nothing
	} else {
		operation()
		repeat(operation, num-1)
	}

}

module.exports = repeat
