// Recursive Factorial of a Number

function recursiveFactorial(n){
    if(n === 0){
        return 1
    }
    return n * recursiveFactorial(n-1)
}

console.log(recursiveFactorial(0))
console.log(recursiveFactorial(1))
console.log(recursiveFactorial(5))


// Big-O = O(n) ,Linear time complexity
console.log("Big-O = O(n) ,Linear time complexity")
