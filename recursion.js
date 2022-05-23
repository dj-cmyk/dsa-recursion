/** product: calculate the product of an array of numbers. */
// product([2, 3, 4])   // 24

function product(nums) {
  // base case
  if (nums.length === 0) return 1;
  // normal case
  return nums[0] * product(nums.slice(1));

}




/** longest: return the length of the longest word in an array of words. */
// longest(["hello", "hi", "hola"])  // 5

function longest(words, idx = 0, maxWordLength = 0) {
  // base case
  if (idx === words.length) return maxWordLength;
  // normal case
    maxWordLength = Math.max(words[idx].length, maxWordLength);
    return longest(words, idx + 1, maxWordLength);
}






/** everyOther: return a string with every other letter. */
// everyOther("hello")  // "hlo"

function everyOther(str, idx = 0, finalString = "") {
  // base case
  if (idx > str.length-1) return finalString;
  // normal case
    finalString += str[idx]
    return everyOther(str, idx + 2, finalString)
  
}





/** isPalindrome: checks whether a string is a palindrome or not. */
// isPalindrome("tacocat")  // true
// isPalindrome("tacodog")  // false

function isPalindrome(str) {
  // not recursive version
  // let checkString = str.split('').reverse().join('');
  // return checkString === str ? true : false;

  // base case
  if (str.length <= 1) return true;
  // normal case
  let firstLetter = str[0]
  let lastLetter = str[str.length-1]
  if (firstLetter === lastLetter) {
    let smallerString = str.substr(1, str.length-2)
    return isPalindrome(smallerString)
  } else {
    return false;
  }
}




/** findIndex: return the index of val in arr (or -1 if val is not present). */
// let animals = ["duck", "cat", "pony"];
// findIndex(animals, "cat");  // 1
// findIndex(animals, "porcupine");   // -1

function findIndex(arr, val, idx = 0) {
  // non-recursive way
  // for (let i = 0; i < arr.length; i++) {
  //   if (arr[i] === val) {
  //     return i;
  //   }
  // }
  // return -1;

  // base case 
  if (idx > arr.length-1) return -1;
  // normal case
  if (arr[idx] === val) {
    return idx;
  } else {
    return findIndex(arr, val, idx + 1)
  } 
}






/** revString: return a copy of a string, but in reverse. */

function revString(str) {
  return (str === '') ? '' : revString(str.substr(1)) + str.charAt(0);
}






/** gatherStrings: given an object, return an array of all of the string values. */


function gatherStrings(obj, finalArray = []) {
  
  for (let item in obj) {
    if (typeof(obj[item]) === 'object') {
      gatherStrings(obj[item], finalArray)
    } else if (typeof(obj[item]) === 'string') {
        finalArray.push(obj[item])
    }
  }
  return finalArray;
}






/** binarySearch: given a sorted array of numbers, and a value,
 * return the index of that value (or -1 if val is not present). */

function binarySearch(arr, val) {

}

module.exports = {
  product,
  longest,
  everyOther,
  isPalindrome,
  findIndex,
  revString,
  gatherStrings,
  binarySearch
};
