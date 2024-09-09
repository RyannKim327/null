class Node:
    def __init__(self, key):
        self.key = key
        self.left = None
        self.right = None
        self.height = 1

class AVLTree:
    def getHeight(self, node):
        if not node:
            return 0
        return node.height

    def getBalance(self, node):
        if not node:
            return 0
        return self.getHeight(node.left) - self.getHeight(node.right)

    def updateHeight(self, node):
        if not node:
            return
        node.height = max(self.getHeight(node.left), self.getHeight(node.right)) + 1

    def rightRotate(self, y):
        x = y.left
        T = x.right

        x.right = y
        y.left = T

        self.updateHeight(y)
        self.updateHeight(x)

        return x

    def leftRotate(self, x):
        y = x.right
        T = y.left

        y.left = x
        x.right = T

        self.updateHeight(x)
        self.updateHeight(y)

        return y

    def insert(self, root, key):
        if not root:
            return Node(key)
        if key < root.key:
            root.left = self.insert(root.left, key)
        else:
            root.right = self.insert(root.right, key)

        self.updateHeight(root)

        balance = self.getBalance(root)

        # Left Left Case
        if balance > 1 and key < root.left.key:
            return self.rightRotate(root)
        # Right Right Case
        if balance < -1 and key > root.right.key:
            return self.leftRotate(root)
        # Left Right Case
        if balance > 1 and key > root.left.key:
            root.left = self.leftRotate(root.left)
            return self.rightRotate(root)
        # Right Left Case
        if balance < -1 and key < root.right.key:
            root.right = self.rightRotate(root.right)
            return self.leftRotate(root)

        return root

    def delete(self, root, key):
        # To be implemented
        return root

    def inorder(self, root):
        if root:
            self.inorder(root.left)
            print(root.key)
            self.inorder(root.right)
