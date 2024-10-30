class Node:
    def __init__(self, data):
        self.data = data
        self.next = None

def find_nth_from_end(head, n):
    first = head
    second = head

    # Move the first pointer to the nth node from the beginning
    for _ in range(n):
        if first is None:
            return None
        first = first.next

    # Move both pointers until the first pointer reaches the end of the list
    while first is not None:
        first = first.next
        second = second.next

    return second.data if second is not None else None

# Example usage
# Create a linked list: 1 -> 2 -> 3 -> 4 -> 5
head = Node(1)
head.next = Node(2)
head.next.next = Node(3)
head.next.next.next = Node(4)
head.next.next.next.next = Node(5)

n = 2
result = find_nth_from_end(head, n)
if result is not None:
    print(f"The {n}th node from the end is: {result}")
else:
    print("Node not found")
