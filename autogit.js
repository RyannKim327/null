class Node:
    def __init__(self, value):
        self.value = value
        self.left = None
        self.right = None

class BinaryTree:
    def __init__(self, root_value):
        self.root = Node(root_value)

    def insert(self, value):
        new_node = Node(value)
        current_node = self.root
        while True:
            if value < current_node.value:
                if current_node.left is None:
                    current_node.left = new_node
                    break
                else:
                    current_node = current_node.left
            else:
                if current_node.right is None:
                    current_node.right = new_node
                    break
                else:
                    current_node = current_node.right

    def search(self, value):
        current_node = self.root
        while current_node is not None:
            if value == current_node.value:
                return current_node
            elif value < current_node.value:
                current_node = current_node.left
            else:
                current_node = current_node.right
        return None
struct Node {
    int value;
    Node* left;
    Node* right;
    Node(int value) : value(value), left(nullptr), right(nullptr) {}
};

class BinaryTree {
public:
    BinaryTree(int root_value) { root = new Node(root_value); }

    void insert(int value) {
        Node* new_node = new Node(value);
        Node* current_node = root;
        while (true) {
            if (value < current_node->value) {
                if (current_node->left == nullptr) {
                    current_node->left = new_node;
                    break;
                } else {
                    current_node = current_node->left;
                }
            } else {
                if (current_node->right == nullptr) {
                    current_node->right = new_node;
                    break;
                } else {
                    current_node = current_node->right;
                }
            }
        }
    }

    Node* search(int value) {
        Node* current_node = root;
        while (current_node != nullptr) {
            if (value == current_node->value) {
                return current_node;
            } else if (value < current_node->value) {
                current_node = current_node->left;
            } else {
                current_node = current_node->right;
            }
        }
        return nullptr;
    }

private:
    Node* root;
};
class Node {
    int value;
    Node left;
    Node right;
    Node(int value) { this.value = value; }
}

class BinaryTree {
    Node root;

    BinaryTree(int root_value) { root = new Node(root_value); }

    void insert(int value) {
        Node new_node = new Node(value);
        Node current_node = root;
        while (true) {
            if (value < current_node.value) {
                if (current_node.left == null) {
                    current_node.left = new_node;
                    break;
                } else {
                    current_node = current_node.left;
                }
            } else {
                if (current_node.right == null) {
                    current_node.right = new_node;
                    break;
                } else {
                    current_node = current_node.right;
                }
            }
        }
    }

    Node search(int value) {
        Node current_node = root;
        while (current_node != null) {
            if (value == current_node.value) {
                return current_node;
            } else if (value < current_node.value) {
                current_node = current_node.left;
            } else {
                current_node = current_node.right;
            }
        }
        return null;
    }
}
