class Node:
    def __init__(self, key, value):
        self.key = key
        self.value = value
        self.color = 'red' # By default, new nodes are inserted as red nodes
        self.parent = None
        self.left = None
        self.right = None

class RedBlackTree:
    def __init__(self):
        self.root = None

    def insert(self, key, value):
        # Implement insertion logic here

    def delete(self, key):
        # Implement deletion logic here

    def search(self, key):
        # Implement search logic here

    # Other helper functions for rotations, color flips, etc.

# Testing the Red-Black Tree implementation
rb_tree = RedBlackTree()
rb_tree.insert(10, "A")
rb_tree.insert(5, "B")
rb_tree.insert(15, "C")
rb_tree.insert(3, "D")
print(rb_tree.search(5)) # Should return "B"
rb_tree.delete(5)
print(rb_tree.search(5)) # Should return None
