class Node:
    def __init__(self, data=None):
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

    def length(self):
        current = self.head
        count = 0
        while current:
            count += 1
            current = current.next
        return count

# Example of how to use the code
llist = LinkedList()
llist.append(1)
llist.append(2)
llist.append(3)
print("Length of the linked list is:", llist.length())
