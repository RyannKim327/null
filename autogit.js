class Node:
    def __init__(self, key):
        self.key = key
        self.left = None
        self.right = None
        self.height = 1

class AVLTree:
    def __init__(self):
        self.root = None

    def getHeight(self, node):
        if node is None:
            return 0
        return node.height

    def getBalanceFactor(self, node):
        if node is None:
            return 0
        return self.getHeight(node.left) - self.getHeight(node.right)

    def rotateRight(self, y):
        x = y.left
        T = x.right

        x.right = y
        y.left = T

        y.height = max(self.getHeight(y.left), self.getHeight(y.right)) + 1
        x.height = max(self.getHeight(x.left), self.getHeight(x.right)) + 1

        return x

    def rotateLeft(self, x):
        y = x.right
        T = y.left

        y.left = x
        x.right = T

        x.height = max(self.getHeight(x.left), self.getHeight(x.right)) + 1
        y.height = max(self.getHeight(y.left), self.getHeight(y.right)) + 1

        return y

    def insert(self, node, key):
        if node is None:
            return Node(key)
        if key < node.key:
            node.left = self.insert(node.left, key)
        else:
            node.right = self.insert(node.right, key)

        node.height = 1 + max(self.getHeight(node.left), self.getHeight(node.right))

        balance = self.getBalanceFactor(node)

        if balance > 1 and key < node.left.key:
            return self.rotateRight(node)

        if balance < -1 and key > node.right.key:
            return self.rotateLeft(node)

        if balance > 1 and key > node.left.key:
            node.left = self.rotateLeft(node.left)
            return self.rotateRight(node)

        if balance < -1 and key < node.right.key:
            node.right = self.rotateRight(node.right)
            return self.rotateLeft(node)

        return node

    def insertKey(self, key):
        self.root = self.insert(self.root, key)
