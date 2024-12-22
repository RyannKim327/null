class Node:
    def __init__(self, data=None):
        self.data = data
        self.next = None

class LinkedList:
    def __init__(self):
        self.head = None

    def push(self, new_data):
        new_node = Node(new_data)
        new_node.next = self.head
        self.head = new_node

    def get_length(self):
        current = self.head
        count = 0

        while current:
            count += 1
            current = current.next

        return count

# Example usage
linked_list = LinkedList()
linked_list.push(3)
linked_list.push(7)
linked_list.push(12)
linked_list.push(16)

print("Length of the linked list is:", linked_list.get_length())
