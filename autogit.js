// Structure for a node in the binary tree
struct Node {
    int data;
    Node* left;
    Node* right;
};

// Function to count the number of leaf nodes in a binary tree
int countLeafNodes(Node* root) {
    if (root == nullptr) {
        return 0;
    }
    if (root->left == nullptr && root->right == nullptr) {
        return 1;
    }
    return countLeafNodes(root->left) + countLeafNodes(root->right);
}
