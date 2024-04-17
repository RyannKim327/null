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

    peek() {
        if (this.isEmpty()) {
            return "Stack is empty";
        }
        return this.stack[this.stack.length - 1];
    }

    isEmpty() {
        return this.stack.length === 0;
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

console.log("Current top of the stack:", stack.peek()); // Outputs: 3
console.log("Pop element from the stack:", stack.pop()); // Outputs: 3
console.log("Stack size:", stack.size()); // Outputs: 2
console.log("Is stack empty?", stack.isEmpty()); // Outputs: false
