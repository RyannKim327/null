// Definition of a binary tree node
class TreeNode {
    int val;
    TreeNode left;
    TreeNode right;
    
    // Constructor
    TreeNode(int value) {
        this.val = value;
        this.left = null;
        this.right = null;
    }
}

// Function to find the height of a binary tree
int getHeight(TreeNode root) {
    if (root == null) {
        return 0;
    }
    
    int leftHeight = getHeight(root.left);
    int rightHeight = getHeight(root.right);
    
    return 1 + Math.max(leftHeight, rightHeight);
}

// Function to find the diameter of a binary tree
int findDiameter(TreeNode root) {
    if (root == null) {
        return 0;
    }
    
    int leftHeight = getHeight(root.left);
    int rightHeight = getHeight(root.right);
    
    // Calculate the diameter passing through the root
    int rootDiameter = leftHeight + rightHeight + 1;
    
    // Calculate the diameters of left and right subtrees
    int leftDiameter = findDiameter(root.left);
    int rightDiameter = findDiameter(root.right);
    
    // Return the maximum of the three diameters
    return Math.max(rootDiameter, Math.max(leftDiameter, rightDiameter));
}

// Example usage
TreeNode root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);

int diameter = findDiameter(root);
print("Diameter of the binary tree: " + diameter);
