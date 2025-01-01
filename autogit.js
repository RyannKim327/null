class Node:
    def __init__(self, key, value, color):
        self.key = key
        self.value = value
        self.color = color
        self.parent = None
        self.left = None
        self.right = None

class RedBlackTree:
    def __init__(self):
        self.nil = Node(None, None, "BLACK")  # Nil sentinel node
        self.root = self.nil

    # Implement insertion, deletion, rotations, and fixing violations methods here

    # Example method to search for a key in the red-black tree
    def search(self, key):
        current = self.root
        while current != self.nil:
            if key == current.key:
                return current
            elif key < current.key:
                current = current.left
            else:
                current = current.right
        return None
