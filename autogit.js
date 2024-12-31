class Node:
    def __init__(self, data):
        self.data = data
        self.next = None

def is_palindrome(head):
    stack = []
    current = head

    while current is not None:
        stack.append(current.data)
        current = current.next

    current = head
    while current is not None:
        if current.data != stack.pop():
            return False
        current = current.next

    return True

# Example linked list
head = Node(1)
head.next = Node(2)
head.next.next = Node(3)
head.next.next.next = Node(2)
head.next.next.next.next = Node(1)

if is_palindrome(head):
    print("The linked list is a palindrome.")
else:
    print("The linked list is not a palindrome.")
