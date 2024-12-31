class SkipNode:
    def __init__(self, key, value, level):
        self.key = key
        self.value = value
        self.forward = [None] * (level + 1)
import random

class SkipList:
    def __init__(self, max_level, p):
        self.max_level = max_level
        self.p = p
        self.header = SkipNode(None, None, max_level)
        self.level = 0

    def random_level(self):
        level = 0
        while random.random() < self.p and level < self.max_level:
            level += 1
        return level

    def insert(self, key, value):
        update = [None] * (self.max_level + 1)
        current = self.header

        for i in range(self.level, -1, -1):
            while current.forward[i] and current.forward[i].key < key:
                current = current.forward[i]
            update[i] = current

        current = current.forward[0]

        if current is None or current.key != key:
            new_level = self.random_level()
            if new_level > self.level:
                for i in range(self.level + 1, new_level + 1):
                    update[i] = self.header
                self.level = new_level

            new_node = SkipNode(key, value, new_level)
            for i in range(new_level + 1):
                new_node.forward[i] = update[i].forward[i]
                update[i].forward[i] = new_node

    def search(self, key):
        current = self.header
        for i in range(self.level, -1, -1):
            while current.forward[i] and current.forward[i].key < key:
                current = current.forward[i]

        current = current.forward[0]

        if current and current.key == key:
            return current.value
        else:
            return None

    def delete(self, key):
        update = [None] * (self.max_level + 1)
        current = self.header

        for i in range(self.level, -1, -1):
            while current.forward[i] and current.forward[i].key < key:
                current = current.forward[i]
            update[i] = current

        current = current.forward[0]

        if current and current.key == key:
            for i in range(self.level + 1):
                if update[i].forward[i] != current:
                    break
                update[i].forward[i] = current.forward[i]

            while self.level > 0 and self.header.forward[self.level] is None:
                self.level -= 1

    def print_list(self):
        for i in range(self.level + 1):
            current = self.header.forward[i]
            print("Level {}: ".format(i), end="")
            while current:
                print("({}, {}) ".format(current.key, current.value), end="")
                current = current.forward[i]
            print("")
