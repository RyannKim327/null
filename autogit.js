class Node:
    def __init__(self, data):
        self.data = data
        self.next = None

def find_middle_element(head):
    if head is None:
        return None

    slow_ptr = head
    fast_ptr = head

    while fast_ptr is not None and fast_ptr.next is not None:
        slow_ptr = slow_ptr.next
        fast_ptr = fast_ptr.next.next

    return slow_ptr.data

# Example of using the find_middle_element function
# Construct a sample linked list
head = Node(1)
head.next = Node(2)
head.next.next = Node(3)
head.next.next.next = Node(4)
head.next.next.next.next = Node(5)

print("Middle element of the linked list is:", find_middle_element(head))
