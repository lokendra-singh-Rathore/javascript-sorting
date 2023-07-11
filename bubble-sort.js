function bubbleSort(arr) {
    let swapped
    do {
      swapped = false
      for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] > arr[i + 1]) {
          let temp = arr[i]
          arr[i] = arr[i + 1]
          arr[i + 1] = temp
          swapped = true
        }
      }
    } while (swapped)
  }
  
  const arr = [10, 20, -12, 4, -6, 5, 1]
  bubbleSort(arr)
  console.log(arr) //[-12, -6, 1, 4, 5, 10, 20]