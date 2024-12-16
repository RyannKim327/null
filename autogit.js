// Define a structure for binary tree nodes
struct TreeNode {
    int value;
    TreeNode *left;
    TreeNode *right;
};

// Function to count the number of leaf nodes in a binary tree
int countLeafNodes(TreeNode *root) {
    if (root == nullptr) {
        return 0; // Base case: null node
    } else if (root->left == nullptr && root->right == nullptr) {
        return 1; // Base case: leaf node
    } else {
        return countLeafNodes(root->left) + countLeafNodes(root->right); // Recursive case
    }
}

// Usage example
int main() {
    TreeNode *root = new TreeNode{1, new TreeNode{2, nullptr, nullptr}, new TreeNode{3, nullptr, nullptr}};
    
    int leafNodesCount = countLeafNodes(root);
    cout << "Number of leaf nodes: " << leafNodesCount << endl;
    
    return 0;
}
