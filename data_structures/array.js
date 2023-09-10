// Array 

const arr = [3,5,8,6,'rithick',2]
arr.push(7)
arr.unshift(0)
arr.pop()
arr.shift()
console.log(arr[4])

for(let item of arr){
    console.log(item)
}

// Big-O -time complexity
// insert / remove from end - O(1)
// insert / remove from beginning - O(n)
// access - O(1)
// search - O(n)
// push /pop - O(1)
// shift /unshift /concat/slice/splice - O(n)
// forEach / map/filter ?reduce -O(n)

console.log("Big-O -time complexity for array,")
console.log("insert / remove from end - O(1)")
console.log("insert / remove from beginning - O(n)")
console.log("access - O(1)")
console.log("search - O(n)")
console.log("push /pop - O(1)")
console.log("shift /unshift /concat/slice/splice - O(n)")
console.log("forEach / map/filter ?reduce -O(n)")

