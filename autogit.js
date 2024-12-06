class BTreeNode:
    def __init__(self, leaf=True):
        self.keys = []
        self.children = []
        self.leaf = leaf

class BTree:
    def __init__(self, t):
        self.root = BTreeNode(True)
        self.t = t

    def search(self, key, node=None):
        if not node:
            node = self.root
        # Implement search logic here

    def insert(self, key):
        # Implement insert logic here

    def delete(self, key):
        # Implement delete logic here

# Test B-tree implementation
btree = BTree(3)
btree.insert(2)
btree.insert(4)
btree.insert(6)
btree.insert(8)
print(btree.search(6))
