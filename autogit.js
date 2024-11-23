class Node:
    def __init__(self, key, value, color='red'):
        self.key = key
        self.value = value
        self.color = color
        self.left = None
        self.right = None
        self.parent = None

class RedBlackTree:
    def __init__(self):
        self.root = None

    def rotate_left(self, x):
        # Left rotation logic here

    def rotate_right(self, x):
        # Right rotation logic here

    def insert(self, key, value):
        # Insertion logic here

    def delete(self, key):
        # Deletion logic here

    def fix_insertion(self, x):
        # Fix insertion logic here

    def fix_deletion(self, x):
        # Fix deletion logic here

    def search(self, key):
        # Search logic here

    def get_min_node(self, node):
        # Get min node logic here

# Usage example
rb_tree = RedBlackTree()
rb_tree.insert(10, 'Value 10')
rb_tree.insert(20, 'Value 20')
rb_tree.insert(5, 'Value 5')

