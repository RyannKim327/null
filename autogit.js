class Node:
    def __init__(self, data):
        self.data = data
        self.next = None

class LinkedList:
    def __init__(self):
        self.head = None

    def reverse_list(self):
        prev = None
        current = self.head
        while current:
            next_node = current.next
            current.next = prev
            prev = current
            current = next_node
        self.head = prev

    def print_list(self):
        temp = self.head
        while temp:
            print(temp.data, end=" ")
            temp = temp.next

# Sample usage
llist = LinkedList()
llist.head = Node(1)
llist.head.next = Node(2)
llist.head.next.next = Node(3)
llist.head.next.next.next = Node(4)

print("Original list:")
llist.print_list()

llist.reverse_list()

print("\nReversed list:")
llist.print_list()
