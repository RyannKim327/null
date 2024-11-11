class Node:
    def __init__(self, value):
        self.value = value
        self.next = None

def is_palindrome_linked_list(head):
    stack = []
    current = head

    while current:
        stack.append(current.value)
        current = current.next

    current = head
    while current:
        if current.value != stack.pop():
            return False
        current = current.next

    return True

# Example of creating a linked list and checking if it is a palindrome
head = Node(1)
head.next = Node(2)
head.next.next = Node(3)
head.next.next.next = Node(2)
head.next.next.next.next = Node(1)

print(is_palindrome_linked_list(head))  # Output: True
