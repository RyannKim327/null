class Node:
    def __init__(self, key):
        self.key = key
        self.left = None
        self.right = None
        self.height = 1

class AVLTree:
    def getHeight(self, node):
        if node is None:
            return 0
        return node.height

    def getBalance(self, node):
        if node is None:
            return 0
        return self.getHeight(node.left) - self.getHeight(node.right)

    def rightRotate(self, y):
        x = y.left
        T = x.right

        x.right = y
        y.left = T

        y.height = 1 + max(self.getHeight(y.left), self.getHeight(y.right))
        x.height = 1 + max(self.getHeight(x.left), self.getHeight(x.right))

        return x

    def leftRotate(self, x):
        y = x.right
        T = y.left

        y.left = x
        x.right = T

        x.height = 1 + max(self.getHeight(x.left), self.getHeight(x.right))
        y.height = 1 + max(self.getHeight(y.left), self.getHeight(y.right))

        return y

    def insert(self, root, key):
        if root is None:
            return Node(key)
        
        if key < root.key:
            root.left = self.insert(root.left, key)
        else:
            root.right = self.insert(root.right, key)

        root.height = 1 + max(self.getHeight(root.left), self.getHeight(root.right))

        balance = self.getBalance(root)

        if balance > 1 and key < root.left.key:
            return self.rightRotate(root)
        
        if balance < -1 and key > root.right.key:
            return self.leftRotate(root)
        
        if balance > 1 and key > root.left.key:
            root.left = self.leftRotate(root.left)
            return self.rightRotate(root)
        
        if balance < -1 and key < root.right.key:
            root.right = self.rightRotate(root.right)
            return self.leftRotate(root)

        return root

    def search(self, root, key):
        if root is None or root.key == key:
            return root
        
        if root.key < key:
            return self.search(root.right, key)
        
        return self.search(root.left, key)

    def inOrderTraversal(self, root):
        if root:
            self.inOrderTraversal(root.left)
            print(root.key)
            self.inOrderTraversal(root.right)


tree = AVLTree()
root = None
keys = [10, 3, 6, 14, 9, 7, 13]

for key in keys:
    root = tree.insert(root, key)

tree.inOrderTraversal(root)
