// Binary Search
// Binary search only works on sorted array so if not sort the array 

function binarySearch(arr, target) {

    // if array is not sorted,we sort 
    // let arrs = arr.sort(function (a, b) { return a - b })
    // console.log("arrs", arrs)

    let leftIndex = 0
    let rightIndex = arr.length - 1

    while (leftIndex <= rightIndex) {
        let middleIndex = Math.floor((leftIndex + rightIndex) / 2)
        if (target === arr[middleIndex]) {
            return middleIndex
        }
        if (target < arr[middleIndex]) {
            rightIndex = middleIndex - 1
        } else {
            leftIndex = middleIndex + 1
        }
    }
    return -1

}


console.log(binarySearch([-5, 2, 4, 7, 10], 10))
console.log(binarySearch([-5, 2, 4, 7, 10], 7))
console.log(binarySearch([-5, 2, 4, 7, 10], 20))
console.log(binarySearch([-5, 2, 4, 7, 10], 2))

// Big-O = O(logn) - As input size is reduced by half on every iteration
console.log("Big-O = O(logn) - As input size is reduced by half on every iteration")