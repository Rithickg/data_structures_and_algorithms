// Stack -Last In First Out (LIFO)

class Stack {
    constructor(){
        this.items =[]
    }

    push(element){
        this.items.push(element)
    }

    pop(){
        return this.items.pop()
    }

    peek(){
        return this.items[this.items.length - 1]
    }

    isEmpty(){
        return this.items.length === 0
    }

    size(){
        return this.items.length
    }

    print(){
        return console.log(this.items.toString())
    }
}

const stack = new Stack()
console.log(stack.isEmpty())
stack.push(20)
stack.push(10)
stack.push(50)
console.log('size',stack.size())
stack.print()
console.log('pop',stack.pop())
console.log('peek',stack.peek())

// Big-O -  time complexity of O(1), except for the search operation, which has a time complexity of O(n)
console.log("Big-O -  time complexity of O(1), except for the search operation, which has a time complexity of O(n)")