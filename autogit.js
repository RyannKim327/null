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
        last_node = self.head
        while last_node.next:
            last_node = last_node.next
        last_node.next = new_node

    def find_nth_node_from_end(self, n):
        slow_ptr = self.head
        fast_ptr = self.head

        # Move fast pointer n steps ahead
        for i in range(n):
            if fast_ptr is None:
                print("Invalid value of n")
                return
            fast_ptr = fast_ptr.next

        # Move both pointers till fast_ptr reaches the end
        while fast_ptr is not None:
            slow_ptr = slow_ptr.next
            fast_ptr = fast_ptr.next

        return slow_ptr.data if slow_ptr else None

# Example usage
my_list = LinkedList()
my_list.append(1)
my_list.append(2)
my_list.append(3)
my_list.append(4)
my_list.append(5)

n = 2
result = my_list.find_nth_node_from_end(n)
if result:
    print(f"The {n}th node from the end is: {result}")
else:
    print("Invalid value of n")
