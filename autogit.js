// Node structure
struct Node {
    int data;
    Node* left;
    Node* right;
};

// Function to calculate the height of a tree
int height(Node* node) {
    if (node == nullptr) return 0;
    return 1 + max(height(node->left), height(node->right));
}

// Function to calculate the diameter of a tree
int diameter(Node* node) {
    if (node == nullptr) return 0;
    int leftHeight = height(node->left);
    int rightHeight = height(node->right);
    int leftDiameter = diameter(node->left);
    int rightDiameter = diameter(node->right);
    return max(leftHeight + rightHeight, max(leftDiameter, rightDiameter));
}
// Node class
class Node {
    int data;
    Node left;
    Node right;
}

// Function to calculate the height of a tree
int height(Node node) {
    if (node == null) return 0;
    return 1 + Math.max(height(node.left), height(node.right));
}

// Function to calculate the diameter of a tree
int diameter(Node node) {
    if (node == null) return 0;
    int leftHeight = height(node.left);
    int rightHeight = height(node.right);
    int leftDiameter = diameter(node.left);
    int rightDiameter = diameter(node.right);
    return Math.max(leftHeight + rightHeight, Math.max(leftDiameter, rightDiameter));
}
class Node:
    def __init__(self, data):
        self.data = data
        self.left = None
        self.right = None

def height(node):
    if node is None:
        return 0
    return 1 + max(height(node.left), height(node.right))

def diameter(node):
    if node is None:
        return 0
    left_height = height(node.left)
    right_height = height(node.right)
    left_diameter = diameter(node.left)
    right_diameter = diameter(node.right)
    return max(left_height + right_height, max(left_diameter, right_diameter))
class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

function height(node) {
    if (node === null) return 0;
    return 1 + Math.max(height(node.left), height(node.right));
}

function diameter(node) {
    if (node === null) return 0;
    const leftHeight = height(node.left);
    const rightHeight = height(node.right);
    const leftDiameter = diameter(node.left);
    const rightDiameter = diameter(node.right);
    return Math.max(leftHeight + rightHeight, Math.max(leftDiameter, rightDiameter));
}
