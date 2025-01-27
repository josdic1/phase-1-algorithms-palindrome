function isPalindrome(word) {
  // Destructure a word, breaking it into the individual letter that comprise it. Then see if the word is spelled the same way backwards and forwards
  const wordLength = word.length
  const destructure = word.split('');

  for (let i = 0; i < Math.floor(wordLength / 2); i++) {
    if (destructure[i] !== destructure[wordLength - i - 1]) {
      return false;
    }
  }

  return true;
}


/* s
  1. Access the word
  2. Destructure the word into letters
  3. Rebuild the word from the letters in reverse order
*/

/*
 1. Access the word using the functions parameter
 2. split to create an array of letters that comprise the word (destructure)
 3. capture length of word using (wordLength)
 4. 'for (let i = 0): let i start at zero (beginning of word
 5.  Cycle thru the word: wordLength - i - 1 ...ex. 5 - 0 - 1 = 4 ([4] is the 5th character -- last letter)
 6. Since the 1st and last letters must match, the string is split in half (rounded using math floor) 
7. Since the word is required to be spelled the same on both sides of the halfway mark of the word (ex. KAYAK... Y = halfway mark.. KA <- left side  [halfway mark "Y" ] KA <- right side)
8. first iteration (i = 0): Compare 'k' (index 0) with 'k' (index 4) => 5 - 0 - 1
9. second iteration (i = 1): Compare 'a' (index 1) with 'a' (index 3) => 4 - 0 - 1





*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
