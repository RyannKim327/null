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
        last = self.head
        while last.next:
            last = last.next
        last.next = new_node

    def get_length(self):
        current = self.head
        count = 0
        while current:
            count += 1
            current = current.next
        return count

# Example
llist = LinkedList()
llist.append(1)
llist.append(2)
llist.append(3)

print("Length of linked list:", llist.get_length())
