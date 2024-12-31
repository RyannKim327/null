class Node:
    def __init__(self, value):
        self.value = value
        self.next = None

class Queue:
    def __init__(self):
        self.front = None
        self.rear = None

    def enqueue(self, value):
        new_node = Node(value)
        if self.rear is None:
            self.front = new_node
            self.rear = new_node
        else:
            self.rear.next = new_node
            self.rear = new_node

    def dequeue(self):
        if self.front is None:
            print("Queue is empty")
            return None
        else:
            front_value = self.front.value
            self.front = self.front.next
            if self.front is None:
                self.rear = None
            return front_value

    def isEmpty(self):
        return self.front is None

    def peek(self):
        if self.front is None:
            print("Queue is empty")
            return None
        else:
            return self.front.value

# Example usage
q = Queue()
q.enqueue(1)
q.enqueue(2)
q.enqueue(3)

print(q.dequeue())  # Output: 1
print(q.dequeue())  # Output: 2

q.enqueue(4)
print(q.peek())  # Output: 3
