class Node:
    def __init__(self, value):
        self.value = value
        self.left = None
        self.right = None

class BinaryTree:
    def __init__(self, root):
        self.root = Node(root)

    def print_tree(self, traversal_type):
        if traversal_type == "preorder":
            return self.preorder(self.root, "")
        elif traversal_type == "inorder":
            return self.inorder(self.root, "")
        elif traversal_type == "postorder":
            return self.postorder(self.root, "")

    def preorder(self, start, traversal):
        if start:
            traversal += (str(start.value) + " ")
            traversal = self.preorder(start.left, traversal)
            traversal = self.preorder(start.right, traversal)
        return traversal

    def inorder(self, start, traversal):
        if start:
            traversal = self.inorder(start.left, traversal)
            traversal += (str(start.value) + " ")
            traversal = self.inorder(start.right, traversal)
        return traversal

    def postorder(self, start, traversal):
        if start:
            traversal = self.postorder(start.left, traversal)
            traversal = self.postorder(start.right, traversal)
            traversal += (str(start.value) + " ")
        return traversal
public class Node {
    int value;
    Node left;
    Node right;

    public Node(int value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

public class BinaryTree {
    Node root;

    public BinaryTree(int root) {
        this.root = new Node(root);
    }

    public void printTree(Node node, String traversalType) {
        if (traversalType.equals("preorder")) {
            preorder(node);
        } else if (traversalType.equals("inorder")) {
            inorder(node);
        } else if (traversalType.equals("postorder")) {
            postorder(node);
        }
    }

    private void preorder(Node node) {
        if (node != null) {
            System.out.print(node.value + " ");
            preorder(node.left);
            preorder(node.right);
        }
    }

    private void inorder(Node node) {
        if (node != null) {
            inorder(node.left);
            System.out.print(node.value + " ");
            inorder(node.right);
        }
    }

    private void postorder(Node node) {
        if (node != null) {
            postorder(node.left);
            postorder(node.right);
            System.out.print(node.value + " ");
        }
    }
}
class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinaryTree {
    constructor(root) {
        this.root = new Node(root);
    }

    printTree(traversalType) {
        if (traversalType === "preorder") {
            return this.preorder(this.root, "");
        } else if (traversalType === "inorder") {
            return this.inorder(this.root, "");
        } else if (traversalType === "postorder") {
            return this.postorder(this.root, "");
        }
    }

    preorder(node, traversal) {
        if (node) {
            traversal += node.value + " ";
            traversal = this.preorder(node.left, traversal);
            traversal = this.preorder(node.right, traversal);
        }
        return traversal;
    }

    inorder(node, traversal) {
        if (node) {
            traversal = this.inorder(node.left, traversal);
            traversal += node.value + " ";
            traversal = this.inorder(node.right, traversal);
        }
        return traversal;
    }

    postorder(node, traversal) {
        if (node) {
            traversal = this.postorder(node.left, traversal);
            traversal = this.postorder(node.right, traversal);
            traversal += node.value + " ";
        }
        return traversal;
    }
}
struct Node {
    int value;
    Node* left;
    Node* right;

    Node(int value) : value(value), left(nullptr), right(nullptr) {}
};

class BinaryTree {
public:
    BinaryTree(int root) : root(new Node(root)) {}

    void printTree(Node* node, string traversalType) {
        if (traversalType == "preorder") {
            preorder(node);
        } else if (traversalType == "inorder") {
            inorder(node);
        } else if (traversalType == "postorder") {
            postorder(node);
        }
    }

private:
    Node* root;

    void preorder(Node* node) {
        if (node) {
            cout << node->value << " ";
            preorder(node->left);
            preorder(node->right);
        }
    }

    void inorder
