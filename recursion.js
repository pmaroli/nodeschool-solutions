/*
 * Implement a recursive function that returns all of the unique dependencies, and sub-dependencies of a module, sorted alphabetically. Dependencies should be printed as dependency@version e.g. []()'.
 *
 * Multiple versions of the same module are allowed, but duplicates modules of the same version should be removed.
 *
 * ## Arguments:
 *
 *   * tree: A dependency tree. See below for an example of the structure.
 */

function getDependencies(tree) {

	var output = [] // Initialiize the output array

	function recursiveHelper(tree) {
		// Check if dependencies exist, otherwise exit the recursion
		if( tree.hasOwnProperty('dependencies') ) {
			// For each dependency, add it to the output array
			// Check each dependency for sub-dependencies recursively
			Object.keys(tree.dependencies).forEach( (item) => {
				output.push( item + '@' + tree.dependencies[item].version )
				recursiveHelper(tree.dependencies[item])
			})
		} else { return }
	}

	if( tree ) { 
		recursiveHelper(tree) // Call the recursive function we just defined
		output.sort() // Sort the output alphabetically
		// Filter out the duplicates
		return output.filter( (item, index, arr) => {
			return output.indexOf(item) == index
		})
	}
	else { return [] }

}

module.exports = getDependencies
