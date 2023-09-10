// Set 

const set = new Set([1,2,3,4])

set.add(5)
set.add(3)
console.log(set.has(4))
set.delete(2)
console.log("size",set.size)
set.clear()
for(const item of set){
    console.log(item)
}