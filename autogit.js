import random

class Node:
    def __init__(self, key, value, level):
        self.key = key
        self.value = value
        self.forward = [None] * level

class SkipList:
    def __init__(self, max_level, p):
        self.max_level = max_level
        self.p = p
        self.header = self.create_node(None, None, max_level)

    def create_node(self, key, value, level):
        return Node(key, value, level)

    def random_level(self):
        level = 1
        while random.random() < self.p and level < self.max_level:
            level += 1
        return level

    def insert(self, key, value):
        update = [None] * self.max_level
        current = self.header

        for i in range(self.max_level - 1, -1, -1):
            while current.forward[i] and current.forward[i].key < key:
                current = current.forward[i]
            update[i] = current

        level = self.random_level()
        new_node = self.create_node(key, value, level)

        for i in range(level):
            new_node.forward[i] = update[i].forward[i]
            update[i].forward[i] = new_node

    def search(self, key):
        current = self.header
        for i in range(self.max_level - 1, -1, -1):
            while current.forward[i] and current.forward[i].key < key:
                current = current.forward[i]
        current = current.forward[0]
        if current and current.key == key:
            return current.value
        return None

    def delete(self, key):
        update = [None] * self.max_level
        current = self.header

        for i in range(self.max_level - 1, -1, -1):
            while current.forward[i] and current.forward[i].key < key:
                current = current.forward[i]
            update[i] = current

        current = current.forward[0]

        if current and current.key == key:
            for i in range(len(current.forward)):
                update[i].forward[i] = current.forward[i]
