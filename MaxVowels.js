const vowels = new Set(["a", "e", "i", "o", "u"]);

const maxVowels = (s, k) => {
  let maxCount = 0;
  let count = 0;

  // count vowels in first k-length substring
  for (let i = 0; i < k; i++) {
    if (vowels.has(s[i])) {
      count++;
    }
  }
  maxCount = count;

  // slide window to the right and update vowel count
  for (let i = k; i < s.length; i++) {
    // subtract leftmost character's vowel count
    if (vowels.has(s[i - k])) {
      count--;
    }
    // add rightmost character's vowel count
    if (vowels.has(s[i])) {
      count++;
    }
    // update max vowel count
    if (count > maxCount) {
      maxCount = count;
    }
  }

  return maxCount;
};
