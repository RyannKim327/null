import random

class SkipListNode:
    def __init__(self, key, level):
        self.key = key
        self.forward = [None] * (level + 1)

class SkipList:
    def __init__(self, max_level, p):
        self.max_level = max_level
        self.p = p
        self.header = self.create_node(max_level, float('-inf'))

    def create_node(self, level, key):
        return SkipListNode(key, level)

    def random_level(self):
        level = 0
        while random.random() < self.p and level < self.max_level:
            level += 1
        return level

    def search(self, key):
        current = self.header
        for i in range(self.max_level, -1, -1):
            while current.forward[i] and current.forward[i].key < key:
                current = current.forward[i]
        current = current.forward[0]
        if current and current.key == key:
            return current
        return None

    def insert(self, key):
        update = [None] * (self.max_level + 1)
        current = self.header
        for i in range(self.max_level, -1, -1):
            while current.forward[i] and current.forward[i].key < key:
                current = current.forward[i]
            update[i] = current
        current = current.forward[0]
        if not current or current.key != key:
            new_level = self.random_level()
            if new_level > self.max_level:
                for i in range(self.max_level + 1, new_level + 1):
                    update.append(self.header)
                self.max_level = new_level
            new_node = self.create_node(new_level, key)
            for i in range(0, new_level + 1):
                new_node.forward[i] = update[i].forward[i]
                update[i].forward[i] = new_node

    def delete(self, key):
        update = [None] * (self.max_level + 1)
        current = self.header
        for i in range(self.max_level, -1, -1):
            while current.forward[i] and current.forward[i].key < key:
                current = current.forward[i]
            update[i] = current
        current = current.forward[0]
        if current and current.key == key:
            for i in range(0, len(current.forward)):
                update[i].forward[i] = current.forward[i]
