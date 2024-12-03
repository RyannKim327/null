import random

class Node:
    def __init__(self, value=None, level=0):
        self.value = value
        self.forward = [None] * level

class SkipList:
    def __init__(self, max_level=16, p=0.5):
        self.max_level = max_level
        self.p = p
        self.header = Node()
        self.level = 0

    def random_level(self):
        level = 0
        while random.random() < self.p and level < self.max_level:
            level += 1
        return level

    def insert(self, value):
        node = Node(value, self.random_level())
        update = [None] * self.max_level
        current = self.header

        for i in range(self.level - 1, -1, -1):
            while current.forward[i] and current.forward[i].value < value:
                current = current.forward[i]
            update[i] = current

        for i in range(node.level):
            node.forward[i] = update[i].forward[i]
            update[i].forward[i] = node

        if node.level > self.level:
            self.level = node.level

    def delete(self, value):
        update = [None] * self.max_level
        current = self.header

        for i in range(self.level - 1, -1, -1):
            while current.forward[i] and current.forward[i].value < value:
                current = current.forward[i]
            update[i] = current

        current = current.forward[0]

        if current and current.value == value:
            for i in range(self.level):
                if update[i].forward[i] != current:
                    break
                update[i].forward[i] = current.forward[i]

            while self.level > 0 and self.header.forward[self.level - 1] is None:
                self.level -= 1

    def search(self, value):
        current = self.header
        for i in range(self.level - 1, -1, -1):
            while current.forward[i] and current.forward[i].value < value:
                current = current.forward[i]

        current = current.forward[0]
        if current and current.value == value:
            return True
        else:
            return False
