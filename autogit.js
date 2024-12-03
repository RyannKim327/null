# Node definition for the linked list
class Node:
    def __init__(self, data):
        self.data = data
        self.next = None

# Function to find the length of a linked list
def length_of_linked_list(head):
    current = head
    length = 0

    while current is not None:
        length += 1
        current = current.next

    return length

# Example usage
# Create a linked list
head = Node(1)
head.next = Node(2)
head.next.next = Node(3)
head.next.next.next = Node(4)

# Find the length of the linked list
print(length_of_linked_list(head))  # Output: 4
