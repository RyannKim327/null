class Stack {
    constructor() {
        this.stack = [];
    }

    push(item) {
        this.stack.push(item);
    }

    pop() {
        if (this.isEmpty()) {
            return "Stack is empty";
        }
        return this.stack.pop();
    }

    peek() {
        return this.stack[this.stack.length - 1];
    }

    isEmpty() {
        return this.stack.length === 0;
    }

    printStack() {
        console.log(this.stack);
    }
}

// Example usage
const stack = new Stack();

stack.push(1);
stack.push(2);
stack.push(3);

stack.printStack(); // Output: [1, 2, 3]

console.log(stack.pop()); // Output: 3

console.log(stack.peek()); // Output: 2

console.log(stack.isEmpty()); // Output: false
