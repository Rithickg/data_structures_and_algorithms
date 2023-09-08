// Bubble Sort 
// Bubble sort is a poor solution for sorting algorithm in real world 

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

const arr = [-6, 20, 8, -2, 4]
bubbleSort(arr)
console.log(arr)

// Big-O = O(n^2) ,It is Quadratic time complexity
console.log("Big-O = O(n^2) ,It is Quadratic time complexity")
