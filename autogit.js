import random

class Node:
    def __init__(self, value=None):
        self.value = value
        self.next = []

class SkipList:
    def __init__(self, max_level, probability):
        self.max_level = max_level
        self.probability = probability
        self.header = Node()
        self.level = 0

    def random_level(self):
        level = 0
        while random.random() < self.probability and level < self.max_level:
            level += 1
        return level

    def insert(self, value):
        update = [None] * (self.max_level + 1)
        current = self.header
        
        for i in range(self.level, -1, -1):
            while current.next[i] and current.next[i].value < value:
                current = current.next[i]
            update[i] = current

        level = self.random_level()

        if level > self.level:
            for i in range(self.level + 1, level + 1):
                update[i] = self.header
            self.level = level

        new_node = Node(value)
        new_node.next = [None] * (level + 1)

        for i in range(level + 1):
            new_node.next[i] = update[i].next[i]
            update[i].next[i] = new_node

    def search(self, value):
        current = self.header
        for i in range(self.level, -1, -1):
            while current.next[i] and current.next[i].value < value:
                current = current.next[i]
        
        if current.next[0] and current.next[0].value == value:
            return True
        else:
            return False

    def delete(self, value):
        update = [None] * (self.max_level + 1)
        current = self.header
        
        for i in range(self.level, -1, -1):
            while current.next[i] and current.next[i].value < value:
                current = current.next[i]
            update[i] = current
        
        if current.next[0] and current.next[0].value == value:
            deleted_node = current.next[0]
            for i in range(self.level + 1):
                if update[i].next[i] != deleted_node:
                    break
                update[i].next[i] = deleted_node.next[i]
            while self.level > 0 and self.header.next[self.level] is None:
                self.level -= 1
            return True
        else:
            return False

    def display(self):
        for i in range(self.level + 1):
            current = self.header
            while current.next[i]:
                print(current.next[i].value, end=" ")
                current = current.next[i]
            print()

# Usage
skip_list = SkipList(max_level=5, probability=0.5)
skip_list.insert(3)
skip_list.insert(6)
skip_list.insert(7)
skip_list.insert(9)
skip_list.insert(12)
skip_list.insert(19)

skip_list.display()

print(skip_list.search(7))  # Output: True
print(skip_list.search(11))  # Output: False

skip_list.delete(6)
skip_list.display()
