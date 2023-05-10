const numSubseq = (nums, target) => {
  const MOD = 1e9 + 7;
  const sortedNums = nums.sort((a, b) => a - b);
  let left = 0,
    right = sortedNums.length - 1;
  let result = 0;

  const pow2 = Array(nums.length).fill(1);
  for (let i = 1; i < nums.length; i++) {
    pow2[i] = (pow2[i - 1] * 2) % MOD;
  }

  while (left <= right) {
    if (sortedNums[left] + sortedNums[right] <= target) {
      result += pow2[right - left];
      left++;
    } else {
      right--;
    }
  }

  return result % MOD;
};
