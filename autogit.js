class Node:
    def __init__(self, data):
        self.data = data
        self.next = None

class Queue:
    def __init__(self):
        self.front = None
        self.rear = None

    def enqueue(self, data):
        new_node = Node(data)
        
        if not self.rear:
            self.front = new_node
            self.rear = new_node
        else:
            self.rear.next = new_node
            self.rear = new_node

    def dequeue(self):
        if not self.front:
            print("Queue is empty.")
            return None

        temp = self.front
        self.front = self.front.next
        if not self.front:
            self.rear = None

        return temp.data

    def is_empty(self):
        return self.front is None

    def print_queue(self):
        current = self.front
        while current:
            print(current.data, end=" ")
            current = current.next
        print()

# Usage example
queue = Queue()
queue.enqueue(1)
queue.enqueue(2)
queue.enqueue(3)
queue.print_queue()

print(queue.dequeue())
print(queue.dequeue())

queue.print_queue()
