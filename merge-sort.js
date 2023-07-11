function mergesort(arr) {
    if (arr.length < 2) {
      return arr
    }
    const mid = Math.floor(arr.length / 2)
    const leftArr = arr.slice(0, mid)
    const rightArr = arr.slice(mid)
    return merge(mergesort(leftArr), mergesort(rightArr))
  }
  
  function merge(leftArr, rightArr) {
    const sortedArr = []
    while (leftArr.length && rightArr.length) {
      if (leftArr[0] <= rightArr[0]) {
        sortedArr.push(leftArr.shift())
      } else {
        sortedArr.push(rightArr.shift())
      }
    }
    const resultArr = [...sortedArr, ...leftArr, ...rightArr]
    return resultArr
  }
  
  const arr = [10, 20, -12, 4, -6, 5, 1]
  console.log(mergesort(arr)) //[-12, -6, 1, 4, 5, 10, 20]