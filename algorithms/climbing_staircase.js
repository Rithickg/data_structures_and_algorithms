// Climbing Staircase 

function climbingStaircase(n) {
    let noOfWays = [1, 2]
    for (let i = 2; i <= n; i++) {
        noOfWays[i] = noOfWays[i - 1] + noOfWays[i - 2]
    }

    return noOfWays[n - 1]
}

console.log(climbingStaircase(1))
console.log(climbingStaircase(3))
console.log(climbingStaircase(5))
console.log(climbingStaircase(8))

// Big-O = O(n) ,linear time complexity
console.log("Big-O = O(n) ,linear time complexity")