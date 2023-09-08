// Linear Search

function linearSearch(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
            return i
        }
    }
    return -1
}

console.log(linearSearch([-5, 2, 10, 4, 7], 10))
console.log(linearSearch([-5, 2, 10, 4, 7], 7))
console.log(linearSearch([-5, 2, 10, 4, 7], 20))
console.log(linearSearch([-5, 2, 10, 4, 7], 2))

// Big-O = O(n) Linear time complexity , because it has one loop
console.log("Big-O = O(n) Linear time complexity , because it has one loop")
