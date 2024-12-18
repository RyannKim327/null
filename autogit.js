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
        if not self.head:
            return None

        first_ptr = self.head
        second_ptr = self.head

        for _ in range(n):
            if second_ptr is None:
                return None
            second_ptr = second_ptr.next

        while second_ptr:
            second_ptr = second_ptr.next
            first_ptr = first_ptr.next

        return first_ptr.data

# Create a linked list
linked_list = LinkedList()
linked_list.append(1)
linked_list.append(2)
linked_list.append(3)
linked_list.append(4)
linked_list.append(5)

# Find the 2nd node from the end
n = 2
result = linked_list.find_nth_from_end(n)
print(f"The {n}nd node from the end is: {result}")
