class Stack {
    constructor() {
        this.items = [];
    }

    push(element) {
        this.items.push(element);
    }

    pop() {
        if (this.items.length === 0) {
            return "Underflow";
        }
        return this.items.pop();
    }

    peek() {
        return this.items[this.items.length - 1];
    }

    isEmpty() {
        return this.items.length === 0;
    }

    printStack() {
        let str = "";
        for (let i = 0; i < this.items.length; i++) {
            str += this.items[i] + " ";
        }
        return str;
    }
}

// Example usage
let stack = new Stack();

console.log(stack.isEmpty()); // true

stack.push(1);
stack.push(2);
stack.push(3);

console.log(stack.printStack()); // "1 2 3"

console.log(stack.peek()); // 3

console.log(stack.pop()); // 3

console.log(stack.printStack()); // "1 2"
