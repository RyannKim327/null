class Stack {
    constructor() {
        this.stackArray = [];
    }

    // Push an element onto the stack
    push(element) {
        this.stackArray.push(element);
    }

    // Remove and return the top element of the stack
    pop() {
        if (this.isEmpty()) {
            return "Stack is empty";
        }
        return this.stackArray.pop();
    }

    // Return the top element of the stack without removing it
    peek() {
        return this.stackArray[this.stackArray.length - 1];
    }

    // Check if the stack is empty
    isEmpty() {
        return this.stackArray.length === 0;
    }

    // Return the size of the stack
    size() {
        return this.stackArray.length;
    }
}

// Example Usage
const myStack = new Stack();
myStack.push(5);
myStack.push(10);
myStack.push(15);

console.log(myStack.pop()); // 15
console.log(myStack.peek()); // 10
console.log(myStack.size()); // 2
