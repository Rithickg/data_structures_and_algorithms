// Recursive Fibonacci Sequence 

function recursiveFibonacci(n){
    if(n<2){
        return n
    }
    return recursiveFibonacci(n-1) + recursiveFibonacci(n-2)
}

console.log(recursiveFibonacci(0))
console.log(recursiveFibonacci(1))
console.log(recursiveFibonacci(6))
console.log(recursiveFibonacci(8))

// O(n) - Iterative and Big-O = O(2^n) - Recursive

