# Node class to represent each element in the linked list
class Node:
    def __init__(self, data):
        self.data = data
        self.next = None

# Linked list class to manage the nodes and provide operations
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

    def print_list(self):
        current_node = self.head
        while current_node:
            print(current_node.data, end=' ')
            current_node = current_node.next
        print()

# Usage example
llist = LinkedList()
llist.append(1)
llist.append(2)
llist.append(3)
llist.print_list()
