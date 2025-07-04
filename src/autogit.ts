// Define the structure of a Node
interface Node {
    value: string; // or any type you need
    children: Node[];
}

// Depth-Limited Search function
function depthLimitedSearch(root: Node, limit: number, target: string): Node | null {
    // Stack to hold nodes to explore, along with their current depth
    const stack: { node: Node; depth: number }[] = [{ node: root, depth: 0 }];

    while (stack.length > 0) {
        const { node, depth } = stack.pop()!; // Get the last node and its depth

        // Check if the current node is the target
        if (node.value === target) {
            return node; // Target found
        }

        // If the current depth is less than the limit, add children to the stack
        if (depth < limit) {
            for (let i = node.children.length - 1; i >= 0; i--) {
                stack.push({ node: node.children[i], depth: depth + 1 });
            }
        }
    }

    return null; // Target not found within the depth limit
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

const targetValue = 'D';
const depthLimit = 2;

const result = depthLimitedSearch(rootNode, depthLimit, targetValue);
if (result) {
    console.log(`Found node: ${result.value}`);
} else {
    console.log('Node not found within the depth limit.');
}
