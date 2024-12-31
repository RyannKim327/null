class Stack:
    def __init__(self):
        self.stack = []

    def isEmpty(self):
        return len(self.stack) == 0

    def push(self, item):
        self.stack.append(item)

    def pop(self):
        if not self.isEmpty():
            return self.stack.pop()
        else:
            return "Stack is empty"

    def peek(self):
        if not self.isEmpty():
            return self.stack[-1]
        else:
            return "Stack is empty"

    def size(self):
        return len(self.stack)

# Example usage:
stack = Stack()
stack.push(1)
stack.push(2)
stack.push(3)

print(stack.pop())  # Output: 3
print(stack.peek())  # Output: 2
print(stack.size())  # Output: 2
