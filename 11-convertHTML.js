/* Convert HTML Entities - Intermediate Algorithm Scripting - freeCodeCamp

Instructions
------
Convert the characters &, <, >, " (double quote), and ' (apostrophe), in
a string to their corresponding HTML entities.

Here are some helpful links:
RegExp
HTML Entities
String.prototype.replace()

*/

function convertHTML(str) {
  str = str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&apos;');
  return str;
}

// Note: few methods to do this but felt chaining replace was best. Switch RegEx with their html entity

convertHTML("Dolce & Gabbana");

/* Test Cases

convertHTML("Dolce & Gabbana") should return Dolce &​amp; Gabbana.
convertHTML("Hamburgers < Pizza < Tacos") should return Hamburgers &​lt; Pizza &​lt; Tacos.
convertHTML("Sixty > twelve") should return Sixty &​gt; twelve.
convertHTML('Stuff in "quotation marks"') should return Stuff in &​quot;quotation marks&​quot;.
convertHTML("Shindler's List") should return Shindler&​apos;s List.
convertHTML("<>") should return &​lt;&​gt;.
convertHTML("abc") should return abc.

*/