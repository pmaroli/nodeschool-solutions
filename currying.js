/*
 * In this challenge, we're going to implement a 'curry' function for an arbitrary number of arguments.
 *
 * curryN will take two parameters:
 *
 *   * fn: The function we want to curry.
 *     * n: Optional number of arguments to curry. If not supplied, `curryN` should use the fn's arity as the value for `n`.
 */

function curryN(fn, n) {

	if( typeof n !== 'number' ) { 
		var n = fn.length
	}

	console.log(n)
	
	function curry(previousArgs) {

		return function(arg) {
			var args = previousArgs.concat(arg)

			if( args.length >= n ) {
				return fn.apply(this, args)
			} else {
				return curry( args )
			}
		}
		
	}

	return curry([])

}

module.exports = curryN
