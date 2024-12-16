function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let key = arr[i]; // 11
    let j = i - 1; // 0

    while (j >= 0 && arr[j] > key) {
      arr[j + 1] = arr[j]; // index 0 value 12
      j = j - 1; // -1
    }
    arr[j + 1] = key; // 11
  }
  return arr;
}

console.log(insertionSort([12, 11, 13, 5, 6])); // [5, 6, 11, 12, 13]
