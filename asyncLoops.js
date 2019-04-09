/*
 * Fix this code! The callback should be called with all the users loaded.
 * The order of the users should match the order of supplied user ids. Because this function is asynchronous, we do not care about its return value.
 */

function loadUsers(userIds, load, done) {

	var count = 0
	var users = []

	userIds.forEach( (item, index) => {
		load( item, (user) => {
			users[index] = user
			count++
			if( count === userIds.length ) return done(users)
		})
	})
}

module.exports = loadUsers
