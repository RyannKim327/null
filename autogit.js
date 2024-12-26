class Node:
    def __init__(self, key):
        self.key = key
        self.left = None
        self.right = None

class BinaryTree:
    def __init__(self):
        self.root = None

    def insert(self, key):
        if not self.root:
            self.root = Node(key)
        else:
            self._insert_recursive(self.root, key)

    def _insert_recursive(self, current, key):
        if key < current.key:
            if current.left is None:
                current.left = Node(key)
            else:
                self._insert_recursive(current.left, key)
        else:
            if current.right is None:
                current.right = Node(key)
            else:
                self._insert_recursive(current.right, key)

    def search(self, key):
        return self._search_recursive(self.root, key)

    def _search_recursive(self, current, key):
        if not current:
            return False
        if current.key == key:
            return True
        if key < current.key:
            return self._search_recursive(current.left, key)
        else:
            return self._search_recursive(current.right, key)

    def inorder_traversal(self):
        nodes = []
        self._inorder_recursive(self.root, nodes)
        return nodes

    def _inorder_recursive(self, current, nodes):
        if current:
            self._inorder_recursive(current.left, nodes)
            nodes.append(current.key)
            self._inorder_recursive(current.right, nodes)

# Example usage:
bt = BinaryTree()
bt.insert(5)
bt.insert(3)
bt.insert(7)
bt.insert(2)
bt.insert(4)

print(bt.search(2))  # Output: True
print(bt.search(6))  # Output: False

print(bt.inorder_traversal())  # Output: [2, 3, 4, 5, 7]
