function quickSort(arr) {
    if (arr.length < 2) return arr
    let pivot = arr[arr.length - 1]
    let left = []
    let right = []
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] < pivot) {
        left.push(arr[i])
      } else {
        right.push(arr[i])
      }
    }
    return [...quickSort(left), pivot, ...quickSort(right)]
  }
  
  const arr = [10, 20, -12, 4, -6, 5, 1]
  console.log(quickSort(arr)) //[-12, -6, 1, 4, 5, 10, 20]