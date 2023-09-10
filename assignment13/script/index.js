// check palindrome
const text = prompt("Enter the string");
const len = text.length;
let massage = 'it is a palindrome';
for(let i = 0; i < len/2; i++){
    if( text[i] != text[len - 1 - i]){
     massage=  'it is not a palindrome';
    }
}
console.log(`${text}: ${massage}`);