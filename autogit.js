class Node:
    def __init__(self, data):
        self.data = data
        self.next = None

def hasCycle(head):
    if not head or not head.next:
        return False

    slow = head
    fast = head.next

    while fast and fast.next:
        if slow == fast:
            return True
        slow = slow.next
        fast = fast.next.next

    return False

# Example usage
# Constructing a linked list with a cycle
head = Node(1)
head.next = Node(2)
head.next.next = Node(3)
head.next.next.next = Node(4)
head.next.next.next.next = head.next  # introducing a cycle at the end

print(hasCycle(head))  # Output: True
