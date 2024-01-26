class Stack {
  constructor() {
    this.data = [];
  }
  
  push(element) {
    this.data.push(element);
  }
  
  pop() {
    if (this.isEmpty()) {
      return "Stack is empty";
    }
    return this.data.pop();
  }
  
  peek() {
    if (this.isEmpty()) {
      return "Stack is empty";
    }
    return this.data[this.data.length - 1];
  }
  
  isEmpty() {
    return this.data.length === 0;
  }
  
  size() {
    return this.data.length;
  }
}
const stack = new Stack();

stack.push(10);
stack.push(20);
stack.push(30);

console.log(stack.pop());   // Output: 30
console.log(stack.pop());   // Output: 20
console.log(stack.peek());  // Output: 10
console.log(stack.size());  // Output: 1
console.log(stack.isEmpty());// Output: false
