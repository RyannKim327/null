class Stack {
    constructor() {
        this.stack = [];
    }

    push(element) {
        this.stack.push(element);
    }

    pop() {
        if (this.isEmpty()) {
            return "Stack is empty";
        }
        return this.stack.pop();
    }

    isEmpty() {
        return this.stack.length === 0;
    }

    peek() {
        return this.stack[this.stack.length - 1];
    }

    size() {
        return this.stack.length;
    }
}

// Example usage
const stack = new Stack();

stack.push(1);
stack.push(2);
stack.push(3);

console.log(stack.pop()); // Output: 3
console.log(stack.peek()); // Output: 2
console.log(stack.size()); // Output: 2
console.log(stack.isEmpty()); // Output: false
console.log(stack.pop()); // Output: 2
console.log(stack.pop()); // Output: 1
console.log(stack.isEmpty()); // Output: true
console.log(stack.pop()); // Output: "Stack is empty"
