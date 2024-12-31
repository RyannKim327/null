class Node:
    def __init__(self, data):
        self.data = data
        self.next = None


def is_palindrome(head):
    # Helper function to reverse a linked list
    def reverse_linked_list(node):
        prev = None
        current = node

        while current is not None:
            next_node = current.next
            current.next = prev
            prev = current
            current = next_node

        return prev

    # Helper function to find the middle of a linked list
    def find_middle(node):
        slow = node
        fast = node

        while fast is not None and fast.next is not None:
            slow = slow.next
            fast = fast.next.next

        return slow

    if head is None:
        return True

    # Find the middle of the linked list
    middle = find_middle(head)

    # Reverse the second half of the linked list
    second_half = reverse_linked_list(middle)

    # Compare the first half and the reversed second half
    first_half = head
    while first_half is not None and second_half is not None:
        if first_half.data != second_half.data:
            return False
        first_half = first_half.next
        second_half = second_half.next

    return True


# Test the code
node1 = Node('a')
node2 = Node('b')
node3 = Node('c')
node4 = Node('b')
node5 = Node('a')

node1.next = node2
node2.next = node3
node3.next = node4
node4.next = node5

print(is_palindrome(node1))  # Output should be True for this test case
