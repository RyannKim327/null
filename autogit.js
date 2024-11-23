class Node:
    def __init__(self, data=None):
        self.data = data
        self.next = None

class LinkedList:
    def __init__(self):
        self.head = None

    def length(self, node):
        if node is None:
            return 0
        return 1 + self.length(node.next)

# Create a sample linked list
llist = LinkedList()
llist.head = Node(1)
second = Node(2)
third = Node(3)

llist.head.next = second
second.next = third

print("Length of the linked list is:", llist.length(llist.head))
