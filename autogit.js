class AVLNode:
    def __init__(self, key):
        self.key = key
        self.left = None
        self.right = None
        self.height = 1

class AVLTree:
    def __init__(self):
        self.root = None

    def height(self, node):
        if not node:
            return 0
        return node.height

    def update_height(self, node):
        node.height = 1 + max(self.height(node.left), self.height(node.right))

    def balance_factor(self, node):
        if not node:
            return 0
        return self.height(node.left) - self.height(node.right)

    def rotate_right(self, y):
        x = y.left
        T = x.right

        x.right = y
        y.left = T

        self.update_height(y)
        self.update_height(x)

        return x

    def rotate_left(self, x):
        y = x.right
        T = y.left

        y.left = x
        x.right = T

        self.update_height(x)
        self.update_height(y)

        return y

    def insert(self, node, key):
        if not node:
            return AVLNode(key)
        
        if key < node.key:
            node.left = self.insert(node.left, key)
        else:
            node.right = self.insert(node.right, key)
        
        self.update_height(node)

        balance = self.balance_factor(node)
        
        if balance > 1:
            if key < node.left.key:
                return self.rotate_right(node)
            else:
                node.left = self.rotate_left(node.left)
                return self.rotate_right(node)
        
        if balance < -1:
            if key > node.right.key:
                return self.rotate_left(node)
            else:
                node.right = self.rotate_right(node.right)
                return self.rotate_left(node)
        
        return node

    def insert_key(self, key):
        self.root = self.insert(self.root, key)

    def pre_order_traversal(self, node):
        if node:
            print(node.key, end=' ')
            self.pre_order_traversal(node.left)
            self.pre_order_traversal(node.right)

    def inorder_traversal(self, node):
        if node:
            self.inorder_traversal(node.left)
            print(node.key, end=' ')
            self.inorder_traversal(node.right)

avl_tree = AVLTree()
avl_tree.insert_key(10)
avl_tree.insert_key(20)
avl_tree.insert_key(15)

print("Pre-order traversal of the AVL tree:")
avl_tree.pre_order_traversal(avl_tree.root)
print()

print("Inorder traversal of the AVL tree:")
avl_tree.inorder_traversal(avl_tree.root)
