
function checkUsersValid(goodUsers) {
	
	return function allUsersValid(submittedUsers) {
	
		return submittedUsers.every( submitted => {
			return goodUsers.some( good => good.id === submitted.id )
		})
	}
}

module.exports = checkUsersValid
