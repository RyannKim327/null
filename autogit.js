class Stack {
    constructor() {
        this.stackArray = [];
    }

    // Adds element to the top of the stack
    push(element) {
        this.stackArray.push(element);
    }

    // Removes and returns the element at the top of the stack
    pop() {
        if (this.isEmpty()) {
            return "Stack is empty";
        }
        return this.stackArray.pop();
    }

    // Returns the element at the top of the stack without removing it
    peek() {
        return this.stackArray[this.stackArray.length - 1];
    }

    // Returns true if the stack is empty, false otherwise
    isEmpty() {
        return this.stackArray.length === 0;
    }

    // Returns the size of the stack
    size() {
        return this.stackArray.length;
    }
}

// Example Usage
const stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);
console.log("Top of the stack: ", stack.peek());  // Output: 3
console.log("Popped element: ", stack.pop());     // Output: 3
console.log("Size of the stack: ", stack.size()); // Output: 2
console.log("Is the stack empty: ", stack.isEmpty()); // Output: false
