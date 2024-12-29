class Node:
    def __init__(self, value):
        self.value = value
        self.next = None

def find_intersection(head1, head2):
    seen = set()
    
    # Traverse the first linked list and store nodes in a set
    current = head1
    while current:
        seen.add(current)
        current = current.next
    
    # Traverse the second linked list and check for intersection
    current = head2
    while current:
        if current in seen:
            return current
        current = current.next
    
    return None

# Example usage
# Create two linked lists
# list1: 3 -> 7 -> 8 -> 10
node1 = Node(3)
node2 = Node(7)
node3 = Node(8)
node4 = Node(10)
node1.next = node2
node2.next = node3
node3.next = node4
head1 = node1

# list2: 99 -> 1 -> 8 -> 10
node5 = Node(99)
node6 = Node(1)
node5.next = node6
node6.next = node3
head2 = node5

intersection_node = find_intersection(head1, head2)
if intersection_node:
    print("Intersection found at node with value:", intersection_node.value)
else:
    print("No intersection found")
