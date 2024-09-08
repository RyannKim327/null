// Definition for a binary tree node.
class TreeNode {
    int val;
    TreeNode left;
    TreeNode right;

    TreeNode(int x) {
        val = x;
    }
}

class BinaryTree {
    public int diameterOfBinaryTree(TreeNode root) {
        if (root == null) {
            return 0;
        }

        int[] diameter = new int[1]; // Store the value of the diameter

        calculateHeight(root, diameter);

        return diameter[0];
    }

    private int calculateHeight(TreeNode root, int[] diameter) {
        if (root == null) {
            return 0;
        }

        int leftHeight = calculateHeight(root.left, diameter);
        int rightHeight = calculateHeight(root.right, diameter);

        // Update the diameter if the current path is larger
        diameter[0] = Math.max(diameter[0], leftHeight + rightHeight);

        return 1 + Math.max(leftHeight, rightHeight);
    }
}
