class Stack:
    def __init__(self, capacity):
        self.capacity = capacity
        self.stack = [None] * capacity
        self.top = -1

    def is_empty(self):
        return self.top == -1

    def is_full(self):
        return self.top == self.capacity - 1

    def push(self, value):
        if self.is_full():
            print("Stack is full")
            return
        self.top += 1
        self.stack[self.top] = value

    def pop(self):
        if self.is_empty():
            print("Stack is empty")
            return
        value = self.stack[self.top]
        self.top -= 1
        return value

    def peek(self):
        if self.is_empty():
            print("Stack is empty")
            return
        return self.stack[self.top]

# Example Usage
stack = Stack(5)
stack.push(1)
stack.push(2)
stack.push(3)
print(stack.pop())  # Output: 3
print(stack.peek())  # Output: 2
