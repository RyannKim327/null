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
        if n <= 0:
            return None
        p1 = self.head
        p2 = self.head
        for _ in range(n):
            if p2 is None:
                return None
            p2 = p2.next
        while p2:
            p1 = p1.next
            p2 = p2.next
        return p1.data

# Example usage:
llist = LinkedList()
llist.append(1)
llist.append(2)
llist.append(3)
llist.append(4)
llist.append(5)

n = 2
result = llist.find_nth_from_end(n)
if result:
    print(f"The {n}th node from the end is: {result}")
else:
    print(f"The linked list does not have {n} nodes from the end.")
