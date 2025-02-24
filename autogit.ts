// Define a Node interface
interface Node {
    value: string;
    children: Node[];
}

// Breadth-Limited Search function
function breadthLimitedSearch(root: Node, target: string, limit: number): Node | null {
    if (limit < 0) {
        return null; // If the limit is negative, return null
    }

    const queue: { node: Node; depth: number }[] = [{ node: root, depth: 0 }];

    while (queue.length > 0) {
        const { node, depth } = queue.shift()!; // Get the first node in the queue

        // Check if the current node is the target
        if (node.value === target) {
            return node; // Return the found node
        }

        // If the current depth is less than the limit, add children to the queue
        if (depth < limit) {
            for (const child of node.children) {
                queue.push({ node: child, depth: depth + 1 });
            }
        }
    }

    return null; // Return null if the target is not found within the limit
}

// Example usage
const rootNode: Node = {
    value: 'A',
    children: [
        { value: 'B', children: [] },
        { value: 'C', children: [
            { value: 'D', children: [] },
            { value: 'E', children: [] }
        ] }
    ]
};

const targetNode = breadthLimitedSearch(rootNode, 'D', 2);
if (targetNode) {
    console.log(`Found node: ${targetNode.value}`);
} else {
    console.log('Node not found within the depth limit.');
}
