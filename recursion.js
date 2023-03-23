// Assignment 1 - Fibonacci numbers
function fibs(n) {
  if (n <= 0) return 'Invalid number of elements';
  if (n === 1) return [0];
  let arr = [0, 1];
  for (let i = 2; i < n; i++) {
    arr.push(arr[arr.length - 2] + arr[arr.length - 1])
  }
  return arr;
}

function fibsRec(n, arr = [0, 1]) {
  if (n <= 0) return 'Invalid number of elements';
  if (n === 1) return [0];
  if (arr.length === n) return arr;
  arr.push(arr[arr.length - 2] + arr[arr.length - 1]);
  return fibsRec(n, arr);
}

console.log(fibs(8));
console.log(fibsRec(8));

// Assignment 2 - Merge sort
function mergeSort(arr) {
  if (arr.length === 0) return 'This array has 0 elements'
  if (arr.length === 1) return arr;
  let left = mergeSort(arr.slice(0, Math.ceil(arr.length / 2)));
  let right = mergeSort(arr.slice(Math.ceil(arr.length / 2)));
  let merged = [];
  let leftIndex = 0, rightIndex = 0
  while (true) {
    if (leftIndex === left.length) return merged.concat(right.slice(rightIndex));
    if (rightIndex === right.length) return merged.concat(left.slice(leftIndex));
    if (left[leftIndex] <= right[rightIndex]) merged.push(left[leftIndex++]);
    else merged.push(right[rightIndex++]);
  }
}

const original = [3, 4, 2, 9, 11, 3, 5, 90, 2];
const sorted = mergeSort(original);
console.log(original);
console.log(sorted);