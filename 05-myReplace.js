/* Search and Replace - Intermediate Algorithm Scripting - freeCodeCamp

Instructions
----
Perform a search and replace on the sentence using the arguments provided and return the new sentence.
First argument is the sentence to perform the search and replace on.
Second argument is the word that you will be replacing (before).
Third argument is what you will be replacing the second argument with (after).
NOTE: Preserve the case of the original word when you are replacing it. For example if you mean to replace the word "Book" with the word "dog", it should be replaced as "Dog"

Here are some helpful links:

Array.prototype.splice()
String.prototype.replace()
Array.prototype.join()
*/

function myReplace(str, before, after) {
	var index = str.indexOf(before); //find index of before in the string
	if(str[index] === str[index].toUpperCase()) { //check if its uppercase
		after = after.charAt(0).toUpperCase() + after.slice(1) // change replacement word to be uppercase
	}
	str = str.replace(before, after); // replace with after word
  return str;
}

myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");

/* Test Cases
myReplace("Let us go to the store", "store", "mall") should return "Let us go to the mall".
myReplace("He is Sleeping on the couch", "Sleeping", "sitting") should return "He is Sitting on the couch".
myReplace("This has a spellngi error", "spellngi", "spelling") should return "This has a spelling error".
myReplace("His name is Tom", "Tom", "john") should return "His name is John".
myReplace("Let us get back to more Coding", "Coding", "algorithms") should return "Let us get back to more Algorithms".
*/