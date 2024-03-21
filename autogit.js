class Stack {
    constructor() {
        this.items = [];
    }

    push(item) {
        this.items.push(item);
    }

    pop() {
        if (this.isEmpty()) {
            return "Stack is empty";
        }
        return this.items.pop();
    }

    peek() {
        return this.items[this.items.length - 1];
    }

    isEmpty() {
        return this.items.length === 0;
    }

    print() {
        console.log(this.items);
    }
}

// Example usage
const myStack = new Stack();

myStack.push(1);
myStack.push(2);
myStack.push(3);

myStack.print(); // Output: [1, 2, 3]

console.log(myStack.pop()); // Output: 3
console.log(myStack.peek()); // Output: 2
console.log(myStack.isEmpty()); // Output: false

myStack.print(); // Output: [1, 2]
