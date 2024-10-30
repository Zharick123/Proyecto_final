function decryptMessage(encryptedText) {
    const substitutionMap = {
        '?': 'a',
        '[': 'e',
        '/': 'i',
        '~': 'o',
        '+': 'u',
        '(': ' ',  
        ')': ' ',  
        '\\': 'í',
        '*': 'p',
        '#': 'f',
        '%': 'b',
        '!': 'j',
        '^': 'm',
        '{': 'l',
        ']': 'n',
        '¿': 'p',
        '$': 'r',
        '}': 'q',
        '@': 's',
        '-': 'h',
        '¡': 'v',
        '=': 't',
        '__': 'z',
        '`': 'c',
        '¬' : 'ó'
    };

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
