function binarySearchPosition(numbers, target) {
  if (numbers.length === 0) return "No number in the array!";

  return recurr(0, numbers.length - 1, target, numbers);
}

function recurr(start, end, target, numbers) {
  let middle = Math.floor((start + end) / 2);
  if (numbers[middle] === target) return middle;

  if (start === end) return "not found";

  if (numbers[middle] > target && start < end)
    return recurr(start, middle - 1, target, numbers);

  if (numbers[middle] < target && start < end)
    return recurr(middle + 1, end, target, numbers);
}
console.log(binarySearchPosition([1, 2, 5, 6, 7], 1)); // should print 0
console.log(binarySearchPosition([1, 2, 5, 6, 7], 6)); // should print 3
console.log(binarySearchPosition([1, 2, 5, 6, 7, 10, 23, 89], 89)); // should print 7
console.log(binarySearchPosition([1, 2, 5, 6, 7, 8, 9, 90], 8)); // should print 5
console.log(binarySearchPosition([5], 8)); // should print not found
console.log(binarySearchPosition([1, 2, 5, 6, 7, 9, 10, 20, 30], 8)); // should print not found
