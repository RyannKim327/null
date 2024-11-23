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
        else:
            current = self.head
            while current.next:
                current = current.next
            current.next = new_node

    def find_nth_from_end(self, n):
        fast_ptr = self.head
        slow_ptr = self.head
        count = 0

        while count < n:
            if fast_ptr is None:
                print("Error: The linked list is shorter than the specified value of n.")
                return None
            fast_ptr = fast_ptr.next
            count += 1

        while fast_ptr:
            fast_ptr = fast_ptr.next
            slow_ptr = slow_ptr.next

        return slow_ptr.data

# Example
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
