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
        if n <= 0 or self.head is None:
            return None
        slow_ptr = fast_ptr = self.head
        for _ in range(n):
            if fast_ptr is None:
                return None
            fast_ptr = fast_ptr.next
        while fast_ptr:
            slow_ptr = slow_ptr.next
            fast_ptr = fast_ptr.next
        return slow_ptr.data

# Usage:
llist = LinkedList()
llist.append(1)
llist.append(2)
llist.append(3)
llist.append(4)
llist.append(5)

n = 2
result = llist.find_nth_from_end(n)
if result:
    print(f"The {n}th node from the end is {result}")
else:
    print("Invalid input")
