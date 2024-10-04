class Node:
    def __init__(self, data):
        self.data = data
        self.next = None

class LinkedList:
    def __init__(self):
        self.head = None

    def append(self, data):
        new_node = Node(data)
        if not self.head:
            self.head = new_node
            return
        current = self.head
        while current.next:
            current = current.next
        current.next = new_node

    def display(self):
        current = self.head
        while current:
            print(current.data, end=' ')
            current = current.next
        print()

# Example usage:
llist = LinkedList()
llist.append(1)
llist.append(2)
llist.append(3)
llist.append(4)

llist.display()
