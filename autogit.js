1. Initialize an array to hold the stack elements (e.g., stackArray)
2. Initialize a variable to keep track of the top element of the stack (e.g., top = -1)
3. Define a function push(element) to add an element to the top of the stack:
    - Increment top
    - stackArray[top] = element
4. Define a function pop() to remove and return the element at the top of the stack:
    - element = stackArray[top]
    - Decrement top
    - return element
5. Define a function isEmpty() to check if the stack is empty:
    - return top == -1
6. Define a function isFull() to check if the stack is full:
    - return top == size - 1 (assuming size is the maximum size of the stack)

// Example usage
push(5)
push(10)
pop() // Returns 10
