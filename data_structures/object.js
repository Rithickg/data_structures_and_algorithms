// Object 

const obj ={
    name:'rithick',
    age:21,
    'key-three':true,
    sayMyName:function(){
        console.log(this.name)
    }
}

obj.hobby ='footbal'
delete obj.hobby

console.log(obj.name)
console.log(obj['age'])
console.log(obj['key-three'])
console.log(obj)
obj.sayMyName()

const keys = Object.keys(obj)
console.log("keys",keys)
const values = Object.values(obj)
console.log("values",values)
const entries = Object.entries(obj)
console.log("entries",entries)

// Big-O -time complexity
// insert - O(1)
// remove - O(1)
// access - O(1)
// search - O(n)
// Object.keys(),Object.values(),Object.entries -O(n)

console.log("Big-O -time complexity")
console.log("insert - O(1)")
console.log("remove - O(1)")
console.log("access - O(1)")
console.log("search - O(n)")
console.log("Object.keys(),Object.values(),Object.entries -O(n)")




