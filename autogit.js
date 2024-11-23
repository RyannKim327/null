class Node:
    def __init__(self, data):
        self.data = data
        self.next = None

def find_linked_list_length(head):
    length = 0
    current = head
    while current is not None:
        length += 1
        current = current.next
    return length

# Example usage
# Create a linked list with 3 nodes: 1 -> 2 -> 3 -> None
head = Node(1)
head.next = Node(2)
head.next.next = Node(3)

print("Length of the linked list is:", find_linked_list_length(head))
