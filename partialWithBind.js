
module.exports = function(namespace) {

	return function() {
		
		prependedLog = console.log.bind(null, namespace)

		prependedLog.apply(null, Array.prototype.slice.call(arguments) )

	}
}
