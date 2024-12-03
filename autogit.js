import random

class Node:
    def __init__(self, value=None, level=0):
        self.value = value
        self.forward = [None]*(level+1)

class SkipList:
    def __init__(self, max_level, p):
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
        update = [None]*(self.max_level+1)
        current = self.header
        
        for i in range(self.level, -1, -1):
            while current.forward[i] and current.forward[i].value < value:
                current = current.forward[i]
            update[i] = current
        
        level = self.random_level()
        
        if level > self.level:
            for i in range(self.level+1, level+1):
                update[i] = self.header
            self.level = level
        
        new_node = Node(value, level)
        
        for i in range(level+1):
            new_node.forward[i] = update[i].forward[i]
            update[i].forward[i] = new_node
    
    def search(self, value):
        current = self.header
        
        for i in range(self.level, -1, -1):
            while current.forward[i] and current.forward[i].value < value:
                current = current.forward[i]
        
        current = current.forward[0]
        
        if current and current.value == value:
            print("Found")
        else:
            print("Not Found")
        
    def delete(self, value):
        update = [None]*(self.max_level+1)
        current = self.header
        
        for i in range(self.level, -1, -1):
            while current.forward[i] and current.forward[i].value < value:
                current = current.forward[i]
            update[i] = current
        
        current = current.forward[0]
        
        if current and current.value == value:
            for i in range(self.level+1):
                if update[i].forward[i] != current:
                    break
                update[i].forward[i] = current.forward[i]
            
            while self.level > 0 and self.header.forward[self.level] is None:
                self.level -= 1
            print("Deleted")
        else:
            print("Not Found")
        
    def display(self):
        print("Skip list:")
        for i in range(self.level+1):
            node = self.header.forward[i]
            print("Level {}: ".format(i), end="")
            while node:
                print(node.value, end=" ")
                node = node.forward[i]
            print("")
