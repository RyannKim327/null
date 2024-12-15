class SkipNode:
    def __init__(self, value, level):
        self.value = value
        self.next = [None] * level
import random

class SkipList:
    def __init__(self, max_levels, probability):
        self.max_levels = max_levels
        self.probability = probability
        self.head = SkipNode(float('-inf'), max_levels)

    def random_level(self):
        level = 1
        while random.random() < self.probability and level < self.max_levels:
            level += 1
        return level

    def insert(self, value):
        level = self.random_level()
        new_node = SkipNode(value, level)
        current = self.head

        for i in range(level - 1, -1, -1):
            while current.next[i] and current.next[i].value < value:
                current = current.next[i]
            new_node.next[i] = current.next[i]
            current.next[i] = new_node

    def search(self, value):
        current = self.head
        for i in range(self.max_levels - 1, -1, -1):
            while current.next[i] and current.next[i].value < value:
                current = current.next[i]
        if current.next[0] and current.next[0].value == value:
            return True
        return False

    def delete(self, value):
        current = self.head
        for i in range(self.max_levels - 1, -1, -1):
            while current.next[i] and current.next[i].value < value:
                current = current.next[i]
            if current.next[i] and current.next[i].value == value:
                current.next[i] = current.next[i].next[i]

    def print_list(self):
        current = self.head
        while current.next[0]:
            print(current.next[0].value, end=' ')
            current = current.next[0]
        print()
skip_list = SkipList(4, 0.5)
skip_list.insert(3)
skip_list.insert(6)
skip_list.insert(2)
skip_list.insert(4)
skip_list.insert(5)

print(skip_list.search(3))  # Output: True
print(skip_list.search(7))  # Output: False

skip_list.delete(3)
print(skip_list.search(3))  # Output: False

skip_list.print_list()  # Output: 2 4 5 6
