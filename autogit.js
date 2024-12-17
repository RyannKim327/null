int countLeafNodes(Node* root) {
    if (root == NULL) {
        return 0;
    }
    
    if (root->left == NULL && root->right == NULL) {
        return 1;
    }
    
    return countLeafNodes(root->left) + countLeafNodes(root->right);
}
