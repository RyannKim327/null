class Node:
    def __init__(self, value):
        self.value = value
        self.next = None

def find_intersection(head1, head2):
    node_set = set()
    
    # Traverse the first linked list and store all nodes in a set
    current = head1
    while current:
        node_set.add(current)
        current = current.next
    
    # Traverse the second linked list and check for intersection with the nodes in the set
    current = head2
    while current:
        if current in node_set:
            return current
        current = current.next
    
    return None
