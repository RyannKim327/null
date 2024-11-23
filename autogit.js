class Node:
    def __init__(self, value):
        self.value = value
        self.next = None

def has_cycle(head):
    if head is None:
        return False

    slow = head
    fast = head.next

    while fast is not None and fast.next is not None:
        if slow == fast:
            return True
        slow = slow.next
        fast = fast.next.next

    return False

# Example usage
node1 = Node(1)
node2 = Node(2)
node3 = Node(3)
node4 = Node(4)

node1.next = node2
node2.next = node3
node3.next = node4
node4.next = node2  # creating a cycle

print(has_cycle(node1))  # Output: True
