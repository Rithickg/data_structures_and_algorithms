// Prime Number

function isPrime(n){
    if(n<2){
        return false
    }
    for(let i=2;i<n;i++){
        if(n%i === 0){
            return false
        }
    }
    return true
}

console.log(isPrime(2))
console.log(isPrime(5))
console.log(isPrime(12))


// Big-O = O(n) Linear time complexity , because it has one loop
console.log("Big-O = O(n) Linear time complexity , because it has one loop")


// Prime Number with optimized method

function isPrime_(n){
    if(n<2){
        return false
    }
    for(let i=2;i<Math.sqrt(n);i++){
        if(n%i === 0){
            return false
        }
    }
    return true
}

// console.log(Math.sqrt(100))
console.log(isPrime_(2))
console.log(isPrime_(5))
console.log(isPrime_(12))


// Big-O = O(sqrt(n))  time complexity , because it has one loop
console.log("Big-O = O(sqrt(n))  time complexity , because it has one loop")