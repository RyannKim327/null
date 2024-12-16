#include <iostream>

// Definition for a binary tree node
struct TreeNode {
    int val;
    TreeNode* left;
    TreeNode* right;
    TreeNode(int x) : val(x), left(NULL), right(NULL) {}
};

// Function to count the number of leaf nodes in a binary tree
int countLeafNodes(TreeNode* root) {
    if (root == NULL) {
        return 0;
    }
    
    if (root->left == NULL && root->right == NULL) {
        return 1;
    }
    
    return countLeafNodes(root->left) + countLeafNodes(root->right);
}

int main() {
    // Example binary tree
    TreeNode* root = new TreeNode(1);
    root->left = new TreeNode(2);
    root->right = new TreeNode(3);
    root->left->left = new TreeNode(4);
    root->left->right = new TreeNode(5);
    
    // Count the number of leaf nodes
    int leafNodes = countLeafNodes(root);
    
    std::cout << "Number of leaf nodes: " << leafNodes << std::endl;
    
    return 0;
}
