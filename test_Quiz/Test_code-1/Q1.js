

let nums = [0, 1, 0, 3, 12];
let n = nums.length;
let j = 0;
for (let i = 0; i < n; i++) {
  if (nums[i] != 0) {
    //   Swap - A[j] , A[i]
    swap(nums, j, i); // Partitioning the array
    j++;
  }
}
for (let i = 0; i < n; i++) {
  console.log(nums[i] + " "); // Print the array
}

// function to swap two elements of an array
function swap(nums, a, b) {
  let temp = nums[a];
  nums[a] = nums[b];
  nums[b] = temp;
}
