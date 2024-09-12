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
            data = self.front.data
            self.front = self.front.next
            if self.front is None:
                self.rear = None
            return data

    def display(self):
        current = self.front
        if current is None:
            print("Queue is empty")
            return
        while current is not None:
            print(current.data, end=" ")
            current = current.next
        print()

# Test the Queue implementation
q = Queue()
q.enqueue(1)
q.enqueue(2)
q.enqueue(3)
q.display()

q.dequeue()
q.display()

q.dequeue()
q.display()
