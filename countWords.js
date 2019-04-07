
function countWords(inputWords) {

	return inputWords.reduce( (total, current) => {
		if( !total[current] ) { total[current] = 1 }
		else { total[current] += 1 }
		return total
	}, {} )

}

module.exports = countWords
