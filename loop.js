'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(string => {
        return string.trim();
    });
    
    main();    
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the vowelsAndConsonants function.
 * Print your output using 'console.log()'.
 */
function vowelsAndConsonants(s) {
    const vowels = 'aeiou';
    let vowelChars = [];
    let consonantChars = [];

    for (let i = 0; i < s.length; i++) {
        if (vowels.includes(s[i].toLowerCase())) {
            vowelChars.push(s[i]);
        } else {
            consonantChars.push(s[i]);
        }
    }

    // Print vowels first
    for (let v of vowelChars) {
        console.log(v);
    }

    // Then print consonants
    for (let c of consonantChars) {
        console.log(c);
    }
}



function main() {
    const s = readLine();
    
    vowelsAndConsonants(s);
}