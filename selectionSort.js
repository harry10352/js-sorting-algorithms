function selectionSort(arr) {
  console.log("Before sorting:", arr);

  for (let i = 0; i < arr.length; i++) {
    let lowest = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[lowest]) {
        lowest = j;
      }

      if (lowest !== i) {
        [arr[i], arr[lowest]] = [arr[lowest], arr[i]];
      }
    }
  }
  return arr;
}
console.log("After sorting:", selectionSort([5, 3, 8, 4, 2])); // [2, 3, 4, 5, 8];
