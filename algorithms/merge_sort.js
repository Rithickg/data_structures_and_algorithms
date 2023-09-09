// Merge Sort 

function mergeSort(arr) {
    if (arr.length < 2) {
        return arr
    }
    let mid = Math.floor(arr.length / 2)
    let leftArr = arr.slice(0, mid)
    let rightArr = arr.slice(mid)
    return merge(mergeSort(leftArr), mergeSort(rightArr))
}

function merge(leftArr, rightArr) {
    let sortedArr = []
    while (leftArr.length && rightArr.length) {
        if (leftArr[0] <= rightArr[0]) {
            sortedArr.push(leftArr.shift())
        } else {
            sortedArr.push(rightArr.shift())
        }
    }
    return [...sortedArr, ...leftArr, ...rightArr]
}
arr = [-6, 20, 8, -2, 4]
console.log(mergeSort(arr))

// Big-O = O(nlogn) ,It is one of the best time complexity while sorting
console.log("Big-O = O(nlogn) ,It is one of the best time complexity while sorting")