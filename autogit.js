class Node:
    def __init__(self, key):
        self.key = key
        self.left = None
        self.right = None
        self.height = 1

class AVLTree:
    def __init__(self):
        self.root = None

    def insert(self, root, key):
        if not root:
            return Node(key)
        elif key < root.key:
            root.left = self.insert(root.left, key)
        else:
            root.right = self.insert(root.right, key)

        root.height = 1 + max(self.getHeight(root.left), self.getHeight(root.right))

        balance = self.getBalance(root)

        # Left Rotation
        if balance > 1 and key < root.left.key:
            return self.rightRotate(root)

        # Right Rotation
        if balance < -1 and key > root.right.key:
            return self.leftRotate(root)

        # Left Right Rotation
        if balance > 1 and key > root.left.key:
            root.left = self.leftRotate(root.left)
            return self.rightRotate(root)

        # Right Left Rotation
        if balance < -1 and key < root.right.key:
            root.right = self.rightRotate(root.right)
            return self.leftRotate(root)

        return root

    def getHeight(self, root):
        if not root:
            return 0
        return root.height

    def getBalance(self, root):
        if not root:
            return 0
        return self.getHeight(root.left) - self.getHeight(root.right)

    def leftRotate(self, z):
        y = z.right
        T2 = y.left

        y.left = z
        z.right = T2

        z.height = 1 + max(self.getHeight(z.left), self.getHeight(z.right))
        y.height = 1 + max(self.getHeight(y.left), self.getHeight(y.right))

        return y

    def rightRotate(self, z):
        y = z.left
        T3 = y.right

        y.right = z
        z.left = T3

        z.height = 1 + max(self.getHeight(z.left), self.getHeight(z.right))
        y.height = 1 + max(self.getHeight(y.left), self.getHeight(y.right))

        return y

    def printTree(self, root):
        if root:
            self.printTree(root.left)
            print(root.key)
            self.printTree(root.right)

    def insertKey(self, key):
        self.root = self.insert(self.root, key)

avl_tree = AVLTree()
avl_tree.insertKey(10)
avl_tree.insertKey(20)
avl_tree.insertKey(30)
avl_tree.insertKey(40)
avl_tree.insertKey(50)
avl_tree.insertKey(25)

avl_tree.printTree(avl_tree.root)
