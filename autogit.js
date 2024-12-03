class Node:
    def __init__(self, data):
        self.data = data
        self.next = None

def find_nth_from_end(head, n):
    if head is None:
        return None

    p1 = head
    p2 = head

    for _ in range(n):
        if p2 is None:
            return None
        p2 = p2.next

    while p2.next is not None:
        p1 = p1.next
        p2 = p2.next

    return p1

# Example usage:
# Construct a sample linked list
head = Node(1)
head.next = Node(2)
head.next.next = Node(3)
head.next.next.next = Node(4)
head.next.next.next.next = Node(5)

n = 2
result = find_nth_from_end(head, n)
if result:
    print(f"The {n}th node from the end is: {result.data}")
else:
    print("Linked list is too short.")
