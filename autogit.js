class Stack:
    def __init__(self):
        self.stack = []
    
    def is_empty(self):
        return len(self.stack) == 0
    
    def push(self, item):
        self.stack.append(item)
    
    def pop(self):
        if not self.is_empty():
            return self.stack.pop()
        else:
            return None
    
    def peek(self):
        if not self.is_empty():
            return self.stack[-1]
        else:
            return None

# Example usage
stack = Stack()
stack.push(1)
stack.push(2)
stack.push(3)

print(stack.pop())  # Output: 3
print(stack.peek())  # Output: 2
print(stack.pop())  # Output: 2
print(stack.pop())  # Output: 1
print(stack.pop())  # Output: None
