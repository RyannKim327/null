class Node:
    def __init__(self, is_leaf=True):
        self.is_leaf = is_leaf
        self.keys = []
        self.children = []
class BTree:
    def __init__(self, t):
        self.root = Node(is_leaf=True)
        self.t = t

    def insert(self, value):
        # Implement insertion logic here

    def search(self, value):
        # Implement search logic here
