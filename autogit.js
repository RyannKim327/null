class Stack {
    constructor() {
        this.items = [];
    }

    // Add element to the top of the stack
    push(element) {
        this.items.push(element);
    }

    // Remove and return the top element from the stack
    pop() {
        if (this.items.length === 0) {
            return "Underflow";
        }
        return this.items.pop();
    }

    // Return the top element without removing it
    peek() {
        return this.items[this.items.length - 1];
    }

    // Check if the stack is empty
    isEmpty() {
        return this.items.length === 0;
    }

    // Return the size of the stack
    size() {
        return this.items.length;
    }

    // Print the stack elements
    printStack() {
        let str = "";
        for (let i = 0; i < this.items.length; i++) {
            str += this.items[i] + " ";
        }
        return str;
    }
}

// Example usage of the Stack class
const stack = new Stack();

console.log(stack.isEmpty()); // true

stack.push(10);
stack.push(20);
stack.push(30);

console.log(stack.printStack()); // 10 20 30

console.log(stack.peek()); // 30

console.log(stack.pop()); // 30
console.log(stack.printStack()); // 10 20
