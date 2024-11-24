const latinToMorse = {
    'A': '.-',
    'B': '-...',
    'C': '-.-.',
    'D': '-..',
    'E': '.',
    'F': '..-.',
    'G': '--.',
    'H': '....',
    'I': '..',
    'J': '.---',
    'K': '-.-',
    'L': '.-..',
    'M': '--',
    'N': '-.',
    'O': '---',
    'P': '.--.',
    'Q': '--.-',
    'R': '.-.',
    'S': '...',
    'T': '-',
    'U': '..-',
    'V': '...-',
    'W': '.--',
    'X': '-..-',
    'Y': '-.--',
    'Z': '--..'
};

const morseToLatin = {
    '-': "T",
    '--': "M",
    '---': "O",
    '--.': "G",
    '--.-': "Q",
    '--..': "Z",
    '-.': "N",
    '-.-': "K",
    '-.--': "Y",
    '-.-.': "C",
    '-..': "D",
    '-..-': "X",
    '-...': "B",
    '.': "E",
    '.-': "A",
    '.--': "W",
    '.---': "J",
    '.--.': "P",
    '.-.': "R",
    '.-..': "L",
    '..': "I",
    '..-': "U",
    '..-.': "F",
    '...': "S",
    '...-': "V",
    '....': "H"
};

// Interaction avec le dom;
let p = document.createElement('p');
p.id = 'translate';
let input = document.getElementById('input');
const submit = document.getElementById('button');

// créer la fonction encode
const encode = words => {
    return words
    .split('')
    .map(char => char === ' ' ? '/' : latinToMorse[char.toUpperCase()] + ' ')
    .join('');
};

// créer la fonction décode
const decode = morse => {
    return morse
    .split(' ')
    .map(morseChar => morseChar === '/' ? ' ' : morseToLatin[morseChar])
    .join('')
};

const handleClick = () => {
    let entry = input.value;
    let result;
    const detectMorse = /^[\.-\s\/]+$/;
    if (detectMorse.test(entry)){
        result = decode(entry)
    } else {
        result = encode(entry)
    };
    p.textContent = `La traduction est : ${result}`;
    document.querySelector('.translate-container').appendChild(p);
};

submit.addEventListener('click', handleClick);


/*
// Retouner un tableau contenant chaque caractère
const getLatinCharacterList = text => {
    return text.split('');
};

// Retourner la correspondance d'un caractère en morse
const translateLatinCharacter = character => {
    // convertir chaque élèment du tableau en majuscule
    const split = getLatinCharacterList(character.toUpperCase());
  
    for(const letter of split){// Boucler sur chaque élèment du tableau 
        for(const property in latinToMorse){ // boucler pour traduire chaque élèments du tableau
            if(letter === property){
                console.log(`${property}: ${latinToMorse[property]}`);
            };
        };
    }; 
};
*/
/*
// Créer la fonction qui va traduire du morse au latin
const getMorseCharacterList = letterMorse => {
    return letterMorse.split(' ')
}

const translateMorseCharacter = character => {
    const split = getMorseCharacterList(character)

    for(const element of split){
        for(const property in latinToMorse){
            if(element === latinToMorse[property]){
                console.log(`${latinToMorse[property]}: ${property}`)
            }
        }
    }
}

translateMorseCharacter('... .. .- .--.')



const decode = morse => {
    const split = getLatinCharacterList(morse)
    

};

decode('...');
*/