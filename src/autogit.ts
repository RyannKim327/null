// Define the structure of a tree node
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

// Define the breadth-limited search function
function breadthLimitedSearch(root: TreeNode | null, depthLimit: number): string[] {
    if (!root || depthLimit < 0) {
        return [];
    }

    const results: string[] = [];
    const queue: { node: TreeNode; depth: number }[] = [{ node: root, depth: 0 }];

    while (queue.length > 0) {
        const { node, depth } = queue.shift()!; // Get the current node and its depth

        // Add the current node value to results if within depth limit
        if (depth <= depthLimit) {
            results.push(node.value);
        }

        // If we have not reached the depth limit, enqueue the children
        if (depth < depthLimit) {
            for (const child of node.children) {
                queue.push({ node: child, depth: depth + 1 });
            }
        }
    }

    return results;
}

// Example usage
const root = new TreeNode("A");
const b = new TreeNode("B");
const c = new TreeNode("C");
const d = new TreeNode("D");
const e = new TreeNode("E");
const f = new TreeNode("F");

root.addChild(b);
root.addChild(c);
b.addChild(d);
b.addChild(e);
c.addChild(f);

const depthLimit = 1;
const result = breadthLimitedSearch(root, depthLimit);
console.log(result); // Output: ['A', 'B', 'C']
