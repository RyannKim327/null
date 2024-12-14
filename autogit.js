class Node:
    def __init__(self, data):
        self.data = data
        self.next = None

def nth_node_from_end(head, n):
    main_ptr = head
    ref_ptr = head

    # Move ref_ptr n steps ahead
    for i in range(n):
        if ref_ptr is None:
            return None  # n is greater than the length of the linked list
        ref_ptr = ref_ptr.next

    # Move both pointers until ref_ptr reaches the end
    while ref_ptr is not None:
        main_ptr = main_ptr.next
        ref_ptr = ref_ptr.next

    return main_ptr

# Helper function to print the linked list
def print_list(node):
    while node:
        print(node.data, end=' ')
        node = node.next
    print()

# Example usage
head = Node(1)
head.next = Node(2)
head.next.next = Node(3)
head.next.next.next = Node(4)
head.next.next.next.next = Node(5)

n = 2
result = nth_node_from_end(head, n)
if result:
    print(f"The {n}th node from the end of the linked list is: {result.data}")
else:
    print("The value of 'n' is greater than the length of the linked list.")
