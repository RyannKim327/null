// Definition of a binary tree node
class TreeNode {
    val: number;
    left: TreeNode | null;
    right: TreeNode | null;

    constructor(val: number) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

function diameterOfBinaryTree(root: TreeNode | null): number {
    // Helper function to compute height and diameter simultaneously
    function dfs(node: TreeNode | null): { height: number; diameter: number } {
        if (!node) {
            return { height: 0, diameter: 0 }; // Base case: empty tree
        }

        // Recursively calculate height and diameter for left and right subtrees
        const left = dfs(node.left);
        const right = dfs(node.right);

        // Height of the current node is 1 + max(height of left, height of right)
        const height = 1 + Math.max(left.height, right.height);

        // Diameter through the current node is the sum of heights of left and right subtrees
        const diameterThroughNode = left.height + right.height;

        // The diameter of the tree rooted at the current node is the maximum of:
        // 1. Diameter of the left subtree
        // 2. Diameter of the right subtree
        // 3. Diameter through the current node
        const diameter = Math.max(left.diameter, right.diameter, diameterThroughNode);

        return { height, diameter };
    }

    // Call the helper function and return the diameter of the entire tree
    return dfs(root).diameter;
}
// Constructing a binary tree
//         1
//        / \
//       2   3
//      / \     
//     4   5    
const root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);

console.log(diameterOfBinaryTree(root)); // Output: 3
function diameterOfBinaryTree(root: TreeNode | null): number {
    function dfs(node: TreeNode | null): { height: number; diameter: number } {
        if (!node) return { height: 0, diameter: 0 };
        const left = dfs(node.left);
        const right = dfs(node.right);
        const height = 1 + Math.max(left.height, right.height);
        const diameterThroughNode = left.height + right.height;
        const diameter = Math.max(left.diameter, right.diameter, diameterThroughNode);
        return { height, diameter };
    }
    return dfs(root).diameter;
}
