function decryptMessage(encryptedText) {
    const substitutionMap = {
        '?': 'a',
        '[': 'e',
        '/': 'l',
        '~': 'o',
        '+': 'u',
        '(': ' ',  
        ')': ' ',  
        '\\': 'í',
        '*': 'p',
        '#': 'v',
        '%': 'b',
        '!': 'j',
        '^': 'm',
        '{': 's',
        ']': 'n',
        '¿': 'y',
        '$': 'r',
        '}': 'q',
        '@': 's',
        '-': 'h',
        '¡': 'd',
        '=': 't',
        '__': 'z',
        '`': 'c',
        ';': 'f',
        '¬' : 'ó'
    };

    encryptedText = encryptedText.replace(/__/g, 'z');

    return encryptedText.split('').map(char => {
        return substitutionMap[char] || char;
    }).join('').toLowerCase();
}

function testDecoder() {
    const testMessage = "^[()`~^*/?`[()^+`-~()#[$()/~()%\\[]()}+[()[{=~¿()=$?%?!?]¡~()¿()`¬^~()[{=~()?+^[]=?()^\\{()*~¡[$[{()¡[()?=[]`\\¬]()¿()[{;+[$__~()`~]=\\]+~";
    console.log("Mensaje original:", testMessage);
    console.log("Mensaje decodificado:", decryptMessage(testMessage));
}

document.addEventListener('DOMContentLoaded', () => {
    const decodeBtn = document.getElementById('decodeBtn');
    const inputMessage = document.getElementById('inputMessage');
    const outputMessage = document.getElementById('outputMessage');


    decodeBtn.addEventListener('click', () => {
        const input = inputMessage.value.trim();
        if (!input) {
            alert('Por favor, ingresa un mensaje para decodificar');
            return;
        }

        const decoded = decryptMessage(input);
        outputMessage.textContent = decoded;
    });
});
