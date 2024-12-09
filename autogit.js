import random

class SkipNode:
    def __init__(self, value, level):
        self.value = value
        self.forward = [None] * (level + 1)

class SkipList:
    def __init__(self, max_level, probability):
        self.max_level = max_level
        self.probability = probability
        self.level = 0
        self.head = self.createNode(self.max_level, None)

    def createNode(self, level, value):
        node = SkipNode(value, level)
        return node

    def randomLevel(self):
        level = 0
        while random.random() < self.probability and level < self.max_level:
            level += 1
        return level

    def insert(self, value):
        update = [None] * (self.max_level + 1)
        current = self.head

        for i in range(self.level, -1, -1):
            while current.forward[i] and current.forward[i].value < value:
                current = current.forward[i]
            update[i] = current

        current = current.forward[0]

        if current is None or current.value != value:
            new_level = self.randomLevel()
            if new_level > self.level:
                for i in range(self.level + 1, new_level + 1):
                    update[i] = self.head
                self.level = new_level

            newNode = self.createNode(new_level, value)

            for i in range(new_level + 1):
                newNode.forward[i] = update[i].forward[i]
                update[i].forward[i] = newNode

    def search(self, value):
        current = self.head

        for i in range(self.level, -1, -1):
            while current.forward[i] and current.forward[i].value < value:
                current = current.forward[i]

        current = current.forward[0]

        if current is not None and current.value == value:
            return True

        return False

    def delete(self, value):
        update = [None] * (self.max_level + 1)
        current = self.head

        for i in range(self.level, -1, -1):
            while current.forward[i] and current.forward[i].value < value:
                current = current.forward[i]
            update[i] = current

        current = current.forward[0]

        if current is not None and current.value == value:
            for i in range(self.level + 1):
                if update[i].forward[i] != current:
                    break
                update[i].forward[i] = current.forward[i]

            while self.level > 0 and self.head.forward[self.level] is None:
                self.level -= 1

    def display(self):
        for i in range(self.level + 1):
            current = self.head.forward[i]
            print("Level {}: ".format(i), end="")
            while current:
                print("{} ".format(current.value), end="")
                current = current.forward[i]
            print("")

# Example usage
skip_list = SkipList(3, 0.5)  # Max level = 3, Probability = 0.5
skip_list.insert(3)
skip_list.insert(6)
skip_list.insert(7)
skip_list.insert(9)
skip_list.insert(12)

skip_list.display()
