class Node:
    def __init__(self, data):
        self.data = data
        self.next = None

class LinkedList:
    def __init__(self):
        self.head = None

    def append(self, data):
        new_node = Node(data)
        if self.head is None:
            self.head = new_node
            return
        last_node = self.head
        while last_node.next:
            last_node = last_node.next
        last_node.next = new_node

    def get_length(self):
        current = self.head
        length = 0
        while current:
            length += 1
            current = current.next
        return length

# Example Usage
llist = LinkedList()
llist.append(1)
llist.append(2)
llist.append(3)
print("Length of the linked list:", llist.get_length())
