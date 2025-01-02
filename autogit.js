// Define a structure for a node in the binary tree
struct Node {
    int data;
    Node* left;
    Node* right;
};

// Function to find the height of the tree
int height(Node* root) {
    if (root == nullptr) {
        return 0;
    }

    int left_height = height(root->left);
    int right_height = height(root->right);

    return 1 + max(left_height, right_height);
}

// Function to find the diameter of the tree
int diameter(Node* root) {
    if (root == nullptr) {
        return 0;
    }

    int left_height = height(root->left);
    int right_height = height(root->right);

    int left_diameter = diameter(root->left);
    int right_diameter = diameter(root->right);

    return max(left_height + right_height + 1, max(left_diameter, right_diameter));
}
