const contentString="Hello ,JavaScript"
console.log(contentString.small()); //This is a legacy HTML wrapper method that creates a string
//  by embedding the original string within an HTML <small> element.
console.log(contentString.big()); 
//This method is part of the String object and was used to create a string that embeds the original string within an HTML <big> element.
//Purpose: It was intended to display text in a larger font size.
console.log(contentString.strike()); //use of strike method in js all output comes in html formmat 
console.log(contentString.bold());
console.log(contentString.italics());
console.log(contentString.fontsize(5));
console.log(contentString.fontcolor('red'));
console.log(contentString.fixed());
console.log(contentString.link('https://www.google.com'));
console.log(contentString.anchor('MyAnchor'));
console.log(contentString.sup());
console.log(contentString.sub());
console.log(contentString.toString());
console.log(contentString.valueOf());
//The valueOf() method returns the primitive value of a String object. 
//In most cases, JavaScript automatically converts String objects to primitive string values when needed,
//  so you rarely need to call this method explicitly.
console.log(contentString.concat(' Nandani',' Rajput'));
//The concat() method is used to concatenate (join) two or more strings together and returns a new string.
// It does not modify the original strings.
console.log(contentString.trimStart()); //The trimStart() method removes whitespace from the beginning of a string and returns a new string without modifying the original string.
console.log(contentString.trimEnd());//The trimEnd() method removes whitespace from the end of a string and returns a new string without modifying the original string.
console.log(contentString.padStart(30,'*'));//The padStart() method pads the current string with another string (multiple times, if needed) until the resulting string reaches the given length.

console.log(contentString.padEnd(30,'*'));//The padEnd() method pads the current string with another string (multiple times, if needed) until the resulting string reaches the given length.
console.log(contentString.repeat(3));//The repeat() method constructs and returns a new string which contains the specified number of copies of the string on which it was called, concatenated together.
console.log(contentString.search('Java'));//The search() method executes a search for a match between a regular expression and this String object.
console.log(contentString.match('Java'));//The match() method retrieves the matches when matching a string against a regular expression.
console.log(contentString.matchAll('a'));//The matchAll() method returns an iterator of all results matching a string against a regular expression, including capturing groups.
console.log([...contentString.matchAll('a')]);//The matchAll() method returns an iterator of all results matching a string against a regular expression, including capturing groups.
console.log(contentString.startsWith('Hello'));//The startsWith() method determines whether a string begins with the characters of a specified string, returning true or false as appropriate.
console.log(contentString.endsWith('JavaScript'));//The endsWith() method determines whether a string ends with the characters of a specified string, returning true or false as appropriate.
console.log(contentString.indexOf('a'));//The indexOf() method returns the index within the calling String object of the first occurrence of the specified value,
// starting the search at fromIndex. Returns -1 if the value is not found.
console.log(contentString.lastIndexOf('a'));//The lastIndexOf() method returns the index within the calling String object of the last occurrence of the specified value,
// searching backwards from fromIndex. Returns -1 if the value is not found.
console.log(contentString.slice(0,5));//The slice() method extracts a section of a string and returns it as a new string, without modifying the original string.
console.log(contentString.substring(0,5));//The substring() method returns the part of the string between the start and end indexes, or to the end of the string.
console.log(contentString.substr(0,5));//The substr() method returns a portion of the string, starting at the specified index and extending for a given number of characters afterwards.
console.log(contentString.split(' '));//The split() method divides a String into an ordered list of substrings, puts these substrings into an array, and returns the array.
console.log(contentString.includes('Java'));//The includes() method determines whether one string may be found within another string, returning true or false as appropriate.
console.log(contentString.replace('JavaScript','Nandani'));//The replace() method returns a new string with some or all matches of a pattern replaced by a replacement.
// The pattern can be a string or a RegExp, and the replacement can be a string or a function to be called for each match.
console.log(contentString.charAt(5));//The charAt() method returns the character at the specified index in a string.
console.log(contentString.charCodeAt(5));//The charCodeAt() method returns an integer between 0 and 65535 representing the UTF-16 code unit at the given index.
console.log(contentString.codePointAt(5));//The codePointAt() method returns a non-negative integer that is the Unicode code point value at the given position.
console.log(contentString.length);//The length property of a String object represents the length of the string, in UTF-16 code units.
console.log(contentString.toLowerCase());//The toLowerCase() method returns the calling string value converted to lower case.
console.log(contentString.toUpperCase());//The toUpperCase() method returns the calling string value converted to upper case.
console.log(contentString.slice(0));//The slice() method extracts a section of a string and returns it as a new string, without modifying the original string.
console.log(contentString.substring(0));//The substring() method returns the part of the string between the start and end indexes, or to the end of the string.
console.log(contentString.isWellFormed());//The isWellFormed() method checks if a string is well-formed according to Unicode standards, returning true if it is and false otherwise.


console.log(contentString[0]);//This syntax allows you to access individual characters in a string using their index positions, similar to how you would access elements in an array.
console.log(contentString.normalize());//The normalize() method returns the Unicode Normalization Form of a given string.
console.log(contentString.substr(0));//The substr() method returns a portion of the string, starting at the specified index and extending for a given number of characters afterwards.
console.log(contentString.localeCompare('Hello ,JavaScript'));//The localeCompare() method returns a number indicating whether a reference string comes before or after or is the same as the given string in sort order.