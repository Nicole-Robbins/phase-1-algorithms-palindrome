function isPalindrome(word) {
  let newWord = word.split('').reverse().join('');
  if (newWord === word){
    return true;
  } else {
    return false;
  }
}

/* 
  Initialize a new variable as a reverse of the word variable 
  If the new variable strictly equals the original word, return true, else return false
*/

/*
  The function creates a copy of the word, which it separates out into an array, reverses the order of the letters, and rejoins again into one word
  It checks to see if the new copy matches the original word, and returns true if it does, and false if it doesn't.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: false");
  console.log("=>", isPalindrome("durango"));

  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
