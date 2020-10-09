let myFullName = "Bill Farmer"; // 10 characters in name...not including space
// 1 Change the content of the div with class "header" to "[Your name]'s Lab 4"
var element = document.querySelector('div.header');
element.textContent = "Momina Khan's Lab 4";

// 2 Insert two paragraphs into the div with the class "content"
//  Label each paragraph with a distinct class name
paragraph1.appendChild(p1);
paragraph2.appendChild(p2);


var paragraphs = document.querySelector(".content");
p1.appendChild(paragraph1);
p2.appendChild(paragraph2);

// 3 Into the first paragraph, insert the phrase "my name has " length of your name " characters"
//      (e.g. my name has 10 characters).
var totalCharacters = "My name has" + myFullName.length + "characters.";
paragraph1.append(totalCharacters);

// 4 & 5 Into the second paragraph tag, return the 3rd character in your first name

// 6 Add a new line to your second paragraph
var thirdCharacter = "The third character of my last name is" + myFullName.charAt(2).toUpperCase();
paragraph2.append(thirdCharacter);

// 7 Return the final three characters of your last name to that new line
paragraph2.append("\n");
var finalthree = "The last three characters in my name are" + myFullName.substring(myFullName.length - 3, myFullName.length);
paragraph2.append(finalthree);
// 8 Substring your first and last name into two separate variables
var fullname = myFullName.substring(0,6);
var lastname = myFullName.substring(7,10);
// 9 Add the total length of your first and last names together
var namelength = Fullname.length + lastname.length; 
// 10 Display that total next to your name in your header
document.querySelector("header").append("the length of my first and last name is:" + namelength);