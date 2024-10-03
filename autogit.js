class Node:
    def __init__(self, data=None):
        self.data = data
        self.next = None

def has_cycle(head):
    if not head:
        return False

    slow = head
    fast = head.next

    while fast and fast.next:
        if slow == fast:
            return True
        slow = slow.next
        fast = fast.next.next

    return False
