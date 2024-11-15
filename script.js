const latinToMorse = {
	'A':'.-',
	'B':'-...',
	'C':'-.-.',
	'D':'-..',
	'E':'.',
	'F':'..-.',
	'G':'--.',
	'H':'....',
	'I':'..',
	'J':'.---',
	'K':'-.-',
	'L':'.-..',
	'M':'--',
	'N':'-.',
	'O':'---',
	'P':'.--.',
	'Q':'--.-',
	'R':'.-.',
	'S':'...',
	'T':'-',
	'U':'..-',
	'V':'...-',
	'W':'.--',
	'X':'-..-',
	'Y':'-.--',
	'Z':'--..'
}

// Retouner un tableau contenant chaque caractère
const getLatinCharacterList = (text) => {
    return text.split('')
};

// Retourner la correspondance d'un caractère en morse
const translateLatinCharacter = (character) => {

    for (const [key, value] of Object.entries(latinToMorse)){
        if (character === key){
            return value
        }
    }

}

//console.log(translateLatinCharacter("R"));

// Créer la fonction qui va utiliser les deux fonction précédente
const encode = (word) => {
    const split = getLatinCharacterList(word.toUpperCase());

}
console.log(encode('Raissa'))


