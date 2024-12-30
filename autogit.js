class Node:
    def __init__(self, data):
        self.data = data
        self.next = None

class LinkedList:
    def __init__(self):
        self.head = None

    def reverse(self):
        prev = None
        current = self.head

        while current is not None:
            next_node = current.next
            current.next = prev
            prev = current
            current = next_node

        self.head = prev

    def append(self, data):
        new_node = Node(data)
        if self.head is None:
            self.head = new_node
            return
        last = self.head
        while last.next:
            last = last.next
        last.next = new_node

    def print_list(self):
        temp = self.head
        while temp:
            print(temp.data, end=" ")
            temp = temp.next
        print()

# Create a sample linked list
llist = LinkedList()
llist.append(1)
llist.append(2)
llist.append(3)
llist.append(4)

print("Original Linked List:")
llist.print_list()

# Reverse the linked list
llist.reverse()

print("Reversed Linked List:")
llist.print_list()
