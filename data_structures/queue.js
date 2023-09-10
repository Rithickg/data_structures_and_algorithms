// Queue -First In First Out (FIFO)

class Queue{
    constructor(){
        this.items = []
    }

    enqueue(element){
        this.items.push(element)
    }

    dequeue(){
       return this.items.shift()
    }

    isEmpty(){
        return this.items.length === 0
    }

    peek(){
        if(!this.isEmpty()){
            return this.items[0]
        }
        return null
    }

    size(){
        return this.items.length
    }

    print(){
        return this.items.toString()
    }
}


const queue = new Queue()

console.log(queue.isEmpty())

queue.enqueue(20)
queue.enqueue(30)
queue.enqueue('rock')
queue.enqueue(40)
console.log('size',queue.size())
console.log(queue.print())
console.log(queue.dequeue())
console.log('peek',queue.peek())

// Big-O = O(1) for all except dequeue which uses shift() as it is linear time complexity O(n)
console.log("Big-O = O(1) for all except dequeue which uses shift() as it is linear time complexity O(n)")

// Qptimized Queue
class OptimizedQueue{
    constructor(){
        this.items = {}
        this.rear = 0
        this.front = 0
    }

    enqueue(element){
        this.items[this.rear] =element
        this.rear++
    }

    dequeue(){
        const item =this.items[this.front]
        delete this.items[this.front]
        this.front++
        return item
    }

    isEmpty(){
        return this.rear -this.front === 0
    }

    peek(){
        return this.items[this.front]
    }

    size(){
        return this.rear - this.front
    }

    print(){
        return this.items
    }
}

const optimizedQueue = new OptimizedQueue()

console.log(optimizedQueue.isEmpty())
optimizedQueue.enqueue(20)
optimizedQueue.enqueue(40)
optimizedQueue.enqueue('rithick')
optimizedQueue.enqueue(70)
console.log('size',optimizedQueue.size())
console.log(optimizedQueue.print())
console.log(optimizedQueue.dequeue())
console.log(optimizedQueue.print())
console.log('peek',optimizedQueue.peek())

// big-O - optimizedQueue have O(1) time complexity
console.log("big-O - optimizedQueue have O(1) time complexity")


