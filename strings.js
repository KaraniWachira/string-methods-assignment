
//QUESTION 1
//  A string is a palindrome if it is read the same from forward or backward. 
// For example, dad reads the same either from forward or backward. So the word dad is a palindrome. Similarly, madam is also a palindrome.
//  Write a JavaScript function to determine whether a given string is a palindrome.

(isPalidrome = (str) => {
    let newString = str.toLowerCase().replace(/[^a-z0-9]/g, '');

    let reverseString = newString.split('').reverse().join('');

    if (newString === reverseString) {
        console.log('true');
    } else {
        console.log('false');
    }
});

console.log(isPalidrome('madam'));
console.log(isPalidrome('toi'));
//output: true


//QUESTION 2
//Write a function to check whether two given strings are anagram of each other or not.
//  An anagram of a string is another string that contains the same characters, only the order of characters can be different.
//  For example, “abcd” and “dabc” are an anagram of each other.

(isAnagram = (stl1, stl2) => {
    let newStr1 = stl1.toLowerCase().split('').sort().join('');
    let newStr2 = stl2.toLowerCase().split('').sort().join('');

    if (newStr1 === newStr2) {
        console.log('true');
    } else {
        console.log('false');
    }
});
console.log(isAnagram('tuvwxyz', 'zyxwvut'));
//output: true


//QUESTION 3
//Write a JavaScript function to check whether a string is blank or not.

(isBlank = (string) => {
    if (string.length === 0) {
        console.log('true');
    } else {
        console.log('false');
    }
});

console.log(isBlank(''));
//output: true


//QUESTION 4
// Write a JavaScript function that hides email addresses to prevent unauthorized access.
// Test Data :
// console.log(protect_email("robin_singh@example.com"));
// "robin...@example.com"

(hide_email_address = (email_address) => {

    //split the email address into two parts username & domain
    const [userName, domain] = email_address.split('@');

    //Get the first letter of the username
    const firstLetter = userName.charAt(0);

    //Replace the username with ...dots except the first letter
    const hiddenUserName = firstLetter + '...';

    //Return the hidden email address
    return hiddenUserName + '@' + domain;
});

console.log(hide_email_address("karani.wachira@thejitu.com"));
//output: k...@thejitu.com


//QUESTION 5
// Write a JavaScript function to reverse words in a given string.
// Test Data :
// ("abc") -> "cba"
// ("JavaScript Exercises") -> "tpircSavaJ sesicrexE"
// (1234) -> "It must be a string."

(reverseWords = (string) => {
    let testString = string.split('').reverse().join('');
    return testString;
});

console.log(reverseWords('I am a fullstack developer'));
// output : repoleved kcatslluf a ma I
























