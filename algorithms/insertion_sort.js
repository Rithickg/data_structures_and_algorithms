// Insertion Sort 

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

const arr = [8, 20, -3, 5, -7]
insertionSort(arr)
console.log(arr)

// Big-O = O(n^2) ,nested loops so Quadratic time complexity
console.log("Big-O = O(n^2) ,nested loops so Quadratic time complexity")