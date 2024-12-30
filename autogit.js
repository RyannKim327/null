class Node:
    def __init__(self, data):
        self.data = data
        self.next = None

def find_nth_from_end(head, n):
    ptr1 = head
    ptr2 = head

    # Move ptr2 to the nth node from beginning
    for _ in range(n):
        if ptr2 is None:
            return None
        ptr2 = ptr2.next

    # Move ptr1 and ptr2 simultaneously until ptr2 reaches the end
    while ptr2 is not None:
        ptr1 = ptr1.next
        ptr2 = ptr2.next

    return ptr1
