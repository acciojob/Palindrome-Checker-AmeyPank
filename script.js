// complete the given function

function palindrome(str){
 // Remove non-alphanumeric characters and convert to lowercase
 str = str.replace(/[\W_]/g, "").toLowerCase();
 // Reverse the string and compare it to the original
 return str === str.split("").reverse().join("");
}
module.exports = palindrome
