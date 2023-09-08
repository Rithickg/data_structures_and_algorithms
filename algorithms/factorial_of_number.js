// Factorial of a Number

function factorial(n){
    let result = 1
    for(let i=2;i<=n;i++){
        result = result * i
    }
    return result
}

console.log(factorial(3))
console.log(factorial(5))
console.log(factorial(8))


// Big-O = O(n) Linear time complexity , because it has one loop
console.log("Big-O = O(n) Linear time complexity , because it has one loop")
