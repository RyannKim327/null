class Node:
    def __init__(self, data):
        self.data = data
        self.next = None

def is_palindrome(head):
    stack = []
    current = head

    while current:
        stack.append(current.data)
        current = current.next

    current = head
    while current:
        data = stack.pop()
        if current.data != data:
            return False
        current = current.next

    return True

# Testing the code
node1 = Node(1)
node2 = Node(2)
node3 = Node(3)
node4 = Node(2)
node5 = Node(1)

node1.next = node2
node2.next = node3
node3.next = node4
node4.next = node5

head = node1

if is_palindrome(head):
    print("Linked list is a palindrome")
else:
    print("Linked list is not a palindrome")
