class Stack {
    constructor() {
        this.stack = [];
    }

    // Push element onto the stack
    push(element) {
        this.stack.push(element);
    }

    // Pop element from the stack
    pop() {
        if (this.isEmpty()) {
            return "Stack Underflow";
        }
        return this.stack.pop();
    }

    // Peek the top element of the stack
    peek() {
        return this.stack[this.stack.length - 1];
    }

    // Check if the stack is empty
    isEmpty() {
        return this.stack.length === 0;
    }

    // Get the size of the stack
    size() {
        return this.stack.length;
    }

    // Print the stack
    print() {
        console.log(this.stack);
    }
}

// Testing the stack implementation
const stack = new Stack();

stack.push(5);
stack.push(10);
stack.push(15);

stack.print(); // Output: [5, 10, 15]

console.log(stack.pop()); // Output: 15
console.log(stack.peek()); // Output: 10
console.log(stack.size()); // Output: 2

stack.print(); // Output: [5, 10]
