function rot13(str) {
	const ALPHABET_LENGTH = 26
	const A_CODE = 'A'.charCodeAt(0)
	const Z_CODE = 'Z'.charCodeAt(0)
	const KEY = 13
	let decrypted = []
	let letter
	for (let i = 0; i < str.length; i++) {
		letter = str.charCodeAt(i)

		if (letter >= A_CODE && letter <= Z_CODE) {
			letter =
				((letter - A_CODE + (ALPHABET_LENGTH - KEY)) % ALPHABET_LENGTH) + A_CODE
		}
		decrypted[i] = String.fromCharCode(letter)
	}
	return decrypted.join('')
}

rot13('SERR PBQR PNZC')
