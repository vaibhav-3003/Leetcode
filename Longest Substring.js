let s = "bbbbb";
let maxLen = 0;
let left = 0;
let right = 0;
const charSet = new Set();

while (right < s.length) {
  if (!charSet.has(s[right])) {
    charSet.add(s[right]);
    right++;
    maxLen = Math.max(maxLen, charSet.size);
  } else {
    charSet.delete(s[left]);
    left++;
  }
}
console.log(maxLen);