import random

class Node:
    def __init__(self, value=None):
        self.value = value
        self.forward = []

class SkipList:
    def __init__(self, max_levels, p):
        self.max_levels = max_levels
        self.p = p
        self.header = Node()
        self.header.forward = [None] * self.max_levels
        self.level = 0

    def random_level(self):
        level = 0
        while random.random() < self.p and level < self.max_levels - 1:
            level += 1
        return level

    def insert(self, value):
        update = [None] * self.max_levels
        current = self.header

        for i in range(self.level, -1, -1):
            while current.forward[i] and current.forward[i].value < value:
                current = current.forward[i]
            update[i] = current

        level = self.random_level()
        if level > self.level:
            for i in range(self.level + 1, level + 1):
                update[i] = self.header
            self.level = level

        new_node = Node(value)
        new_node.forward = [None] * (level + 1)

        for i in range(level + 1):
            new_node.forward[i] = update[i].forward[i]
            update[i].forward[i] = new_node

    def search(self, value):
        current = self.header
        for i in range(self.level, -1, -1):
            while current.forward[i] and current.forward[i].value < value:
                current = current.forward[i]
        current = current.forward[0]

        if current and current.value == value:
            return True
        return False

    def display(self):
        for i in range(self.level, -1, -1):
            current = self.header
            while current.forward[i]:
                print(current.forward[i].value, end=" ")
                current = current.forward[i]
            print()

# Example usage
skip_list = SkipList(max_levels=5, p=0.5)
skip_list.insert(3)
skip_list.insert(6)
skip_list.insert(7)
skip_list.insert(9)
print(skip_list.search(6))  # Output: True
print(skip_list.search(8))  # Output: False
skip_list.display()
