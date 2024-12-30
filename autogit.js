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

        if n > length:
            return None

        target = length - n
        current = self.head
        for i in range(target):
            current = current.next

        return current.data

# Create a linked list
llist = LinkedList()
llist.append(1)
llist.append(2)
llist.append(3)
llist.append(4)
llist.append(5)

# Find the 2nd node from the end
n = 2
result = llist.find_nth_from_end(n)
print(f'The {n}th node from the end is {result}')
