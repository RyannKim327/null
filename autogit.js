class Node:
    def __init__(self, data):
        self.data = data
        self.next = None

class LinkedList:
    def __init__(self):
        self.head = None
    
    def append(self, data):
        new_node = Node(data)
        if self.head is None:
            self.head = new_node
            return
        last = self.head
        while last.next:
            last = last.next
        last.next = new_node
    
    def find_nth_from_end(self, n):
        first = self.head
        second = self.head
        for _ in range(n):
            if first is None:
                return None
            first = first.next
        
        while first:
            first = first.next
            second = second.next
        
        if second:
            return second.data
        else:
            return None

# Example usage
llist = LinkedList()
llist.append(1)
llist.append(2)
llist.append(3)
llist.append(4)
llist.append(5)

n = 2
result = llist.find_nth_from_end(n)
if result:
    print(f"The {n}th node from the end of the linked list is: {result}")
else:
    print("The linked list is too short.")
