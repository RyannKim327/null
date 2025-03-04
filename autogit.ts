// Define a structure for Tree Node
class TreeNode {
    value: string;
    children: TreeNode[];

    constructor(value: string) {
        this.value = value;
        this.children = [];
    }

    addChild(child: TreeNode) {
        this.children.push(child);
    }
}

// Depth-Limited Search function
function depthLimitedSearch(node: TreeNode, target: string, limit: number): boolean {
    if (limit < 0) {
        return false; // Limit reached, return false
    }

    console.log(`Visiting Node: ${node.value}`);

    if (node.value === target) {
        return true; // Found the target
    }

    // If not found, explore the children
    for (let child of node.children) {
        if (depthLimitedSearch(child, target, limit - 1)) {
            return true; // If found in children, propagate true
        }
    }

    return false; // Target not found in this branch
}

// Example usage
const root = new TreeNode("A");
const b = new TreeNode("B");
const c = new TreeNode("C");
const d = new TreeNode("D");
const e = new TreeNode("E");

root.addChild(b);
root.addChild(c);
b.addChild(d);
b.addChild(e);

const target = "D";
const limit = 2;

const found = depthLimitedSearch(root, target, limit);
console.log(`Found: ${found}`); // Outputs true if target is found, else false
        A
       / \
      B   C
     / \
    D   E
