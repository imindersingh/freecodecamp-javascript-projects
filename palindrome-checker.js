function palindrome(str) {
	var sanitizedString = str
		.replace(/[/\-.,():_ ]/g, '')
		.trim()
		.toLowerCase()

	console.log('santized: ' + sanitizedString)

	var reverseString = sanitizedString.split('')
	var reverseArray = reverseString.reverse()
	var palindrome = reverseArray.join('')
	console.log('palindrome: ' + palindrome)

	if (sanitizedString == palindrome) {
		return true
	} else return false
}

palindrome('eye')
