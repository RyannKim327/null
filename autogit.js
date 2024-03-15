class Stack {
    constructor() {
        this.items = [];
    }

    push(element) {
        this.items.push(element);
    }

    pop() {
        if (this.isEmpty()) {
            return "Underflow";
        }
        return this.items.pop();
    }

    peek() {
        return !this.isEmpty() ? this.items[this.items.length - 1] : undefined;
    }

    isEmpty() {
        return this.items.length === 0;
    }

    printStack() {
        let stackStr = "";
        for (let i = 0; i < this.items.length; i++) {
            stackStr += this.items[i] + " ";
        }
        return stackStr;
    }
}

// Example usage
const stack = new Stack();

stack.push(1);
stack.push(2);
stack.push(3);

console.log(stack.printStack());  // Output: 1 2 3

console.log(stack.pop());  // Output: 3

console.log(stack.peek());  // Output: 2
