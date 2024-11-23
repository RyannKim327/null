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

    def find_nth_from_end(self, n):
        length = 0
        current = self.head
        while current:
            length += 1
            current = current.next

        if n > length or n < 1:
            print("Invalid value of n")
            return

        target_index = length - n
        current = self.head
        for i in range(target_index):
            current = current.next

        print(f"The {n}th node from the end is: {current.data}")

# Create a linked list
llist = LinkedList()
llist.append(1)
llist.append(2)
llist.append(3)
llist.append(4)
llist.append(5)

# Find the nth node from the end
llist.find_nth_from_end(2)
