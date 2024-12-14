import random

class Node:
    def __init__(self, data=None, next=None, down=None):
        self.data = data
        self.next = next
        self.down = down

class SkipList:
    def __init__(self):
        self.head = Node()
    
    def search(self, target):
        node = self.head
        while node:
            while node.next and node.next.data < target:
                node = node.next
            if node.next and node.next.data == target:
                return True
            node = node.down
        return False
    
    def insert(self, target):
        path = []
        node = self.head
        while node:
            while node.next and node.next.data < target:
                node = node.next
            path.append(node)
            node = node.down
        
        insert_above = True
        down_node = None
        while insert_above and path:
            insert_node = path.pop()
            insert_node.next = Node(data=target, next=insert_node.next, down=down_node)
            down_node = insert_node.next
            insert_above = (random.random() < 0.5)
        
        if insert_above:
            self.head = Node(down=self.head, next=Node(data=target, next=None, down=down_node))
    
    def delete(self, target):
        node = self.head
        while node:
            while node.next and node.next.data < target:
                node = node.next
            if node.next and node.next.data == target:
                node.next = node.next.next
            node = node.down

# Example usage
skip_list = SkipList()
skip_list.insert(3)
skip_list.insert(6)
skip_list.insert(7)
print(skip_list.search(3))  # Output: True
print(skip_list.search(5))  # Output: False
skip_list.delete(6)
print(skip_list.search(6))  # Output: False
