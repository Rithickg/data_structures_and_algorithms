// Recursive Binary Search
// Binary search only works on sorted array so if not sort the array 

// if array is not sorted,we sort 
// let arrs = arr.sort(function (a, b) { return a - b })
// console.log("arrs", arrs)

function recursiveBinarySearch(arr, target) {
    return search(arr, target, 0, arr.length - 1)
}

function search(arr, target, leftIndex, rightIndex) {
    if (leftIndex > rightIndex) {
        return -1
    }
    let middleIndex = Math.floor((leftIndex + rightIndex) / 2)
    if (target === arr[middleIndex]) {
        return middleIndex
    }

    if (target < arr[middleIndex]) {
        return search(arr, target, leftIndex, middleIndex - 1)
    } else {
        return search(arr, target, middleIndex + 1, rightIndex)
    }
}


console.log(recursiveBinarySearch([-5, 2, 4, 7, 10], 10))
console.log(recursiveBinarySearch([-5, 2, 4, 7, 10], 7))
console.log(recursiveBinarySearch([-5, 2, 4, 7, 10], 20))
console.log(recursiveBinarySearch([-5, 2, 4, 7, 10], 2))

// Big-O = O(logn) - As input size is reduced by half on every iteration
console.log("Big-O = O(logn) - As input size is reduced by half on every iteration")