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
    const split = getLatinCharacterList(character.toUpperCase());
    for (const element of split){
        for (const [key, value] of Object.entries(latinToMorse)){
            if (element === key){
                console.log(`${element} : ${value}`)
            }
        }
    }    
}

// Créer la fonction qui va utiliser les deux fonction précédente

const encode = (word) => {
    if ( typeof word === 'string'){
        translateLatinCharacter(word)
    }
}
encode('Raissa')



