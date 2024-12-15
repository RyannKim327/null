import random
import math

class Node:
    def __init__(self, value, level):
        self.value = value
        self.forward = [None] * (level + 1)

class SkipList:
    def __init__(self, max_levels, probability):
        self.max_levels = max_levels
        self.probability = probability
        self.header = Node(-1, max_levels)
        self.level = 0

    def random_level(self):
        level = 0
        while random.random() < self.probability and level < self.max_levels:
            level += 1
        return level

    def insert(self, value):
        update = [None] * (self.max_levels + 1)
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

        new_node = Node(value, level)

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
        else:
            return False

    def delete(self, value):
        update = [None] * (self.max_levels + 1)
        current = self.header

        for i in range(self.level, -1, -1):
            while current.forward[i] and current.forward[i].value < value:
                current = current.forward[i]
            update[i] = current

        current = current.forward[0]

        if current and current.value == value:
            for i in range(self.level + 1):
                if update[i].forward[i] != current:
                    break
                update[i].forward[i] = current.forward[i]

            while self.level > 0 and self.header.forward[self.level] is None:
                self.level -= 1
        else:
            print("Element not found")

    def print_list(self):
        print("Skip List:")
        for i in range(self.level + 1):
            node = self.header.forward[i]
            print("Level {}: ".format(i), end="")
            while node:
                print(node.value, end=" ")
                node = node.forward[i]
            print("")


# Test the SkipList implementation
skip_list = SkipList(3, 0.5)
skip_list.insert(3)
skip_list.insert(6)
skip_list.insert(7)
skip_list.insert(9)
skip_list.insert(12)
skip_list.insert(19)
skip_list.insert(17)
skip_list.insert(26)
skip_list.insert(21)
skip_list.insert(25)
skip_list.print_list()

print("Is 19 in the list? ", skip_list.search(19))
skip_list.delete(19)
skip_list.print_list()

print("Is 19 in the list? ", skip_list.search(19))
