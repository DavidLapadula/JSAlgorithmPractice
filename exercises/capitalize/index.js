// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'



// function capitalize(str) {
//     const words = []; 


//     for (let word of str.split(' ') ) {
//         // upper case the first letter and join it with the rest of the word by using slice to get everything from the 2nd element and on
//        words.push(word[0].toUpperCase() + word.slice(1)); 
//     }

//     // join on a space to make a capitalized sentence
//   return  words.join(' '); 
// }

function capitalize(str) {
    let results = str[0].toUpperCase(); 

    for (let i = 1; i < str.length; i++) {
        if (str[i - 1] === ' ') {
           results += str[i].toUpperCase();
        } else {
            results += str[i]; 
        }
    }

    return results; 
}

module.exports = capitalize;
