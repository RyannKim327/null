class BTreeNode:
    def __init__(self, keys=[], children=[]):
        self.keys = keys
        self.children = children

class BTree:
    def __init__(self, order):
        self.root = BTreeNode()
        self.order = order

    def insert(self, key):
        # Implement insertion logic here

    def search(self, key):
        # Implement search logic here

    def delete(self, key):
        # Implement deletion logic here

    def traverse_inorder(self):
        # Implement in-order traversal logic here
