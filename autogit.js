import random

class Node:
    def __init__(self, value, levels):
        self.value = value
        self.next = [None] * levels

class SkipList:
    def __init__(self, max_levels, p):
        self.max_levels = max_levels
        self.p = p
        self.head = Node(-1, max_levels)
        self.levels = 1

    def random_level(self):
        level = 1
        while random.random() < self.p and level < self.max_levels:
            level += 1
        return level

    def insert(self, value):
        update = [None] * self.max_levels
        current = self.head
        for i in range(self.levels - 1, -1, -1):
            while current.next[i] and current.next[i].value < value:
                current = current.next[i]
            update[i] = current

        new_level = self.random_level()
        if new_level > self.levels:
            for i in range(self.levels, new_level):
                update[i] = self.head
            self.levels = new_level

        new_node = Node(value, new_level)
        for i in range(new_level):
            new_node.next[i] = update[i].next[i]
            update[i].next[i] = new_node

    def search(self, value):
        current = self.head
        for i in range(self.levels - 1, -1, -1):
            while current.next[i] and current.next[i].value < value:
                current = current.next[i]

        if current.next[0] and current.next[0].value == value:
            return True
        return False

    def remove(self, value):
        update = [None] * self.max_levels
        current = self.head
        for i in range(self.levels - 1, -1, -1):
            while current.next[i] and current.next[i].value < value:
                current = current.next[i]
            update[i] = current

        if current.next[0] and current.next[0].value == value:
            for i in range(self.levels):
                if update[i].next[i] != current.next[i]:
                    break
                update[i].next[i] = current.next[i].next[i]
            while self.levels > 1 and self.head.next[self.levels - 1] is None:
                self.levels -= 1
            return True
        return False
