
function reduce( arr, fn, initial ) {

	if( arr[0] ) {
		initial = fn(initial, arr[0], arr.indexOf(arr[0]), arr)
		return reduce(arr.slice(1), fn, initial)
	} else {
		return initial
	}

}

module.exports = reduce
