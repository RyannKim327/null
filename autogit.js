class Node:
    def __init__(self, data):
        self.data = data
        self.next = None

def find_nth_from_end(head, n):
    ptr1 = head
    ptr2 = head

    # Move ptr2 forward by n nodes
    for _ in range(n):
        if ptr2 is None:
            return None
        ptr2 = ptr2.next

    # Move both pointers forward until ptr2 reaches the end
    while ptr2 is not None:
        ptr1 = ptr1.next
        ptr2 = ptr2.next

    return ptr1

# Create a sample linked list
head = Node(1)
head.next = Node(2)
head.next.next = Node(3)
head.next.next.next = Node(4)
head.next.next.next.next = Node(5)

# Find the nth node from the end of the linked list
n = 2
result = find_nth_from_end(head, n)

if result is not None:
    print(f"The {n}th node from the end is: {result.data}")
else:
    print(f"Linked list doesn't have {n} nodes.")
