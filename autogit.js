class Stack:
    def __init__(self, size):
        self.size = size
        self.top = -1
        self.stack = [None] * size

    def is_empty(self):
        return self.top == -1

    def is_full(self):
        return self.top == self.size - 1

    def push(self, value):
        if self.is_full():
            print("Stack is full, cannot push element")
        else:
            self.top += 1
            self.stack[self.top] = value

    def pop(self):
        if self.is_empty():
            print("Stack is empty, cannot pop element")
            return None
        else:
            value = self.stack[self.top]
            self.top -= 1
            return value

    def peek(self):
        if self.is_empty():
            print("Stack is empty")
            return None
        else:
            return self.stack[self.top]

# Example usage
s = Stack(5)
s.push(1)
s.push(2)
s.push(3)
print(s.peek())  # Output: 3
print(s.pop())   # Output: 3
print(s.pop())   # Output: 2
print(s.pop())   # Output: 1
print(s.pop())   # Output: Stack is empty, cannot pop element
