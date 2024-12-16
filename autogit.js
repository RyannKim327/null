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

print(is_palindrome(head))  # Output: True
