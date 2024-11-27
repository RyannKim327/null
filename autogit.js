# Node structure for the linked list
class Node:
    def __init__(self, data):
        self.data = data
        self.next = None

# Function to calculate the length of the linked list
def get_linked_list_length(head):
    current = head
    length = 0

    while current is not None:
        length += 1
        current = current.next

    return length

# Sample linked list
head = Node(1)
head.next = Node(2)
head.next.next = Node(3)
head.next.next.next = Node(4)

# Get the length of the linked list
print(get_linked_list_length(head))  # Output: 4
