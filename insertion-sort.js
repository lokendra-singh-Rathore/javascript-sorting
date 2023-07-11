function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
      let numberToInsert = arr[i]
      let j = i - 1
      while (j >= 0 && arr[j] > numberToInsert) {
        arr[j + 1] = arr[j]
        j = j - 1
      }
      arr[j + 1] = numberToInsert
    }
  }
  
  const arr = [10, 20, -12, 4, -6, 5, 1]
  insertionSort(arr)
  console.log(arr) //[-12, -6, 1, 4, 5, 10, 20]