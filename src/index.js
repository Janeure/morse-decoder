const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};


function decode(expr) {
    // let result = []
//   for(let i = 0; i < (expr.length/10); i++) {
//   result[i] = expr.slice(i * 10, (i * 10 + 10));
// } 
let result = expr.match(/.{1,10}/g);
 return result.map (item => {
   const index = item.indexOf('1'); 
   return item.slice(index > 0 ? index : 0)
  }).map(element => {
   if (element === '**********') {
     return ' '
   } 
   return MORSE_TABLE[element.replace(/10/g, '.').replace(/11/g, '-')];
 }).join('');
}

module.exports = {
    decode
}