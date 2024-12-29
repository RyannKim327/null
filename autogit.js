class TreeNode:
    def __init__(self, value):
        self.value = value
        self.left = None
        self.right = None

class BinarySearchTree:
    def __init__(self):
        self.root = None

    def insert(self, value):
        if self.root is None:
            self.root = TreeNode(value)
        else:
            self._insert_recursively(self.root, value)

    def _insert_recursively(self, node, value):
        if value < node.value:
            if node.left is None:
                node.left = TreeNode(value)
            else:
                self._insert_recursively(node.left, value)
        else:
            if node.right is None:
                node.right = TreeNode(value)
            else:
                self._insert_recursively(node.right, value)

    def search(self, value):
        return self._search_recursively(self.root, value)

    def _search_recursively(self, node, value):
        if node is None:
            return False
        if node.value == value:
            return True
        elif value < node.value:
            return self._search_recursively(node.left, value)
        else:
            return self._search_recursively(node.right, value)

# Usage
bst = BinarySearchTree()
bst.insert(5)
bst.insert(3)
bst.insert(7)

print(bst.search(3))  # Output: True
print(bst.search(10))  # Output: False
