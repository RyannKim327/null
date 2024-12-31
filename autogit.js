class Node:
    def __init__(self, data):
        self.data = data
        self.next = None

def get_nth_from_end(head, n):
    length = 0
    current = head

    # Calculate the length of the linked list
    while current:
        length += 1
        current = current.next

    # Position of the nth node from the end
    position = length - n

    # Reset the current pointer to the head
    current = head

    # Traverse to the nth node from the end
    for i in range(position):
        current = current.next

    return current.data

# Example of how to use the function
# Create a sample linked list
head = Node(1)
head.next = Node(2)
head.next.next = Node(3)
head.next.next.next = Node(4)
head.next.next.next.next = Node(5)

n = 2
result = get_nth_from_end(head, n)
print(f"The {n}th node from the end is: {result}")
