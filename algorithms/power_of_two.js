// Power of Two 

function isPowerOfTwo(n){
    if(n<1){
        return false
    }

    while(n>1){
        if(n % 2 !==0){
            return false
        }
        n =n/2
    }
    return true
}

console.log(isPowerOfTwo(2))
console.log(isPowerOfTwo(4))
console.log(isPowerOfTwo(5))


// Big-O = O(logn) Input size reduced by half -O(logn)
console.log("Big-O = O(logn) Input size reduced by half -O(logn)")

// Power of Two with bitwise - Optimized method 

function isPowerOfTwoBitWise(n){
    if(n<1){
        return false
    }
    return (n & (n-1)) === 0
}

console.log(isPowerOfTwoBitWise(2))
console.log(isPowerOfTwoBitWise(4))
console.log(isPowerOfTwoBitWise(5))
console.log(isPowerOfTwoBitWise(8))

// Big-O = O(1) -constant
console.log("Big-O = O(1) -constant")



