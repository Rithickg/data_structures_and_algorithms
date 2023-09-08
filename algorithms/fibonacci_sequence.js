// Fibonacci Sequence

function fibonacci(n){
    const fib =[0,1]
    for (i=2;i<n;i++){
        fib[i]= fib[i-1] + fib[i-2]
    }
    return fib
}
console.log(fibonacci(7))
console.log(fibonacci(8))
console.log(fibonacci(12))

// Big-O = O(n) Linear time complexity , because it has one loop
console.log("Big-O = O(n) Linear time complexity , because it has one loop")
