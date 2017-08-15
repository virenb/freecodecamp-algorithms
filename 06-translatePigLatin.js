/* Pig Latin - Intermediate Algorithm Scripting - freeCodeCamp

Instructions
-----
Translate the provided string to pig latin.
Pig Latin takes the first consonant (or consonant cluster) of an English word, moves it to the end of the word and suffixes an "ay".
If a word begins with a vowel you just add "way" to the end.
Input strings are guaranteed to be English words in all lowercase.

Here are some helpful links:
Array.prototype.indexOf()
Array.prototype.push()
Array.prototype.join()
String.prototype.substr()
String.prototype.split()
*/

function translatePigLatin(str) {
  let vowels = ['a', 'e', 'i', 'o', 'u'];
  let strArr = str.split('');
  if (vowels.includes(str.charAt(0))) {
    return str += 'way';
  } else {
    for (let i = 0; i < str.length; i++) {
      if (!vowels.includes(str[i])) {
        strArr.push(strArr.shift())
      } else {
        strArr.push('ay');
        return strArr.join('');
      }
    }
  }
}

translatePigLatin("consonant");

/* Test Cases
translatePigLatin("california") should return "aliforniacay".
translatePigLatin("paragraphs") should return "aragraphspay".
translatePigLatin("glove") should return "oveglay".
translatePigLatin("algorithm") should return "algorithmway".
translatePigLatin("eight") should return "eightway".
*/