
function duckCount() {

	function filterDucks(item) {
		return Object.prototype.hasOwnProperty.call(item, 'quack')
	}

	let filtered = Array.prototype.filter.call( arguments, filterDucks )

	return filtered.length
}

module.exports = duckCount
