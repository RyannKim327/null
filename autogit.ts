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
function breadthLimitedSearch(root: TreeNode, target: number, limit: number): TreeNode | null {
    if (limit < 0) return null; // if the limit is negative, return null

    const queue: { node: TreeNode; depth: number }[] = [];
    queue.push({ node: root, depth: 0 });

    while (queue.length > 0) {
        const { node, depth } = queue.shift()!; // Dequeue the first element

        // Check if the current node matches the target
        if (node.value === target) {
            return node; // Return the node if found
        }

        // If the current depth is below the limit, enqueue the children
        if (depth < limit) {
            for (const child of node.children) {
                queue.push({ node: child, depth: depth + 1 });
            }
        }
    }

    return null; // Return null if target is not found
}
const root = new TreeNode(1);
const child1 = new TreeNode(2);
const child2 = new TreeNode(3);
const child3 = new TreeNode(4);
const grandchild1 = new TreeNode(5);
const grandchild2 = new TreeNode(6);

root.addChild(child1);
root.addChild(child2);
child1.addChild(grandchild1);
child1.addChild(grandchild2);
child2.addChild(new TreeNode(7));
child2.addChild(new TreeNode(8));

// Search for a target value within a specified depth limit
const result = breadthLimitedSearch(root, 5, 2);  // should find the node with value 5
if (result) {
    console.log(`Found node with value: ${result.value}`);
} else {
    console.log('Node not found.');
}
