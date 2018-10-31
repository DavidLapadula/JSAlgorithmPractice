// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

// Solution 1 

// function palindrome(str) {
//     const reversed = str.split('').reverse().join(''); 

//     return str === reversed; 


// }

// Solution 2
function palindrome(str) {
    const bla = str.split('')
  return  str.split('').every((char, i) => {
        return char === str[str.length - i - 1]; 
    }); 

}

// Solution 3 

// function palindrom (str) {
//     for (i = 0, j = bla.length - 1; i < bla.length/2; i++, j-- ){
//         return bla[i] === bla[j]; 
//     }
// }

module.exports = palindrome;
