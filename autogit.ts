class TreeNode {
    value: number;
    left: TreeNode | null;
    right: TreeNode | null;

    constructor(value: number) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinaryTree {
    root: TreeNode | null;

    constructor() {
        this.root = null;
    }

    insert(value: number): void {
        const newNode = new TreeNode(value);
        if (this.root === null) {
            this.root = newNode;
            return;
        }

        this.insertNode(this.root, newNode);
    }

    private insertNode(node: TreeNode, newNode: TreeNode): void {
        if (newNode.value < node.value) {
            if (node.left === null) {
                node.left = newNode;
            } else {
                this.insertNode(node.left, newNode);
            }
        } else {
            if (node.right === null) {
                node.right = newNode;
            } else {
                this.insertNode(node.right, newNode);
            }
        }
    }

    inorderTraversal(node: TreeNode | null = this.root): number[] {
        const result: number[] = [];
        if (node !== null) {
            result.push(...this.inorderTraversal(node.left));
            result.push(node.value);
            result.push(...this.inorderTraversal(node.right));
        }
        return result;
    }
}

// Example usage:
const tree = new BinaryTree();
tree.insert(5);
tree.insert(3);
tree.insert(7);
tree.insert(2);
tree.insert(4);

console.log(tree.inorderTraversal()); // Output: [2, 3, 4, 5, 7]
