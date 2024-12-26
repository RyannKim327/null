class Node:
    def __init__(self, data):
        self.data = data
        self.next = None

def has_cycle(head):
    if not head or not head.next:
        return False

    tortoise = head
    hare = head.next

    while tortoise != hare:
        if not hare or not hare.next:
            return False
        tortoise = tortoise.next
        hare = hare.next.next

    return True
