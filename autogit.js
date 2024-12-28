class Node:
    def __init__(self, data):
        self.data = data
        self.next = None

def has_cycle(head):
    if not head:
        return False

    slow = head
    fast = head

    while fast.next and fast.next.next:
        slow = slow.next
        fast = fast.next.next
        if slow == fast:
            return True

    return False

# Usage example
node1 = Node(1)
node2 = Node(2)
node3 = Node(3)
node4 = Node(4)

node1.next = node2
node2.next = node3
node3.next = node4
node4.next = node2  # Creating a cycle

if has_cycle(node1):
    print("Linked list contains a cycle")
else:
    print("Linked list does not contain a cycle")
