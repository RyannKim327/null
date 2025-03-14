// Define a TreeNode class
class TreeNode {
    value: number;
    children: TreeNode[];

    constructor(value: number) {
        this.value = value;
        this.children = [];
    }

    addChild(child: TreeNode) {
        this.children.push(child);
    }
}

// Breadth-Limited Search function
function breadthLimitedSearch(root: TreeNode, target: number, depthLimit: number): boolean {
    if (depthLimit < 0) {
        return false; // Depth limit reached
    }

    const queue: { node: TreeNode; depth: number }[] = [{ node: root, depth: 0 }];

    while (queue.length > 0) {
        const { node, depth } = queue.shift()!; // Get the first node in the queue

        // Check if the current node's value matches the target
        if (node.value === target) {
            return true; // Target found
        }

        // If we haven't reached the depth limit, add children to the queue
        if (depth < depthLimit) {
            for (const child of node.children) {
                queue.push({ node: child, depth: depth + 1 });
            }
        }
    }

    return false; // Target not found within the depth limit
}

// Example usage
const root = new TreeNode(1);
const child1 = new TreeNode(2);
const child2 = new TreeNode(3);
const child3 = new TreeNode(4);
const child4 = new TreeNode(5);

root.addChild(child1);
root.addChild(child2);
child1.addChild(child3);
child1.addChild(child4);

const target = 4;
const depthLimit = 2;

const found = breadthLimitedSearch(root, target, depthLimit);
console.log(`Target ${target} found within depth limit: ${found}`);
