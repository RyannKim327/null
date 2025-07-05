// Define a type for the Node
interface Node {
    value: string;
    children: Node[];
}

// Function to perform a breadth-limited search
function breadthLimitedSearch(root: Node, target: string, depthLimit: number): Node | null {
    // Queue for nodes to explore, initialized with the root node and depth 0
    const queue: { node: Node; depth: number }[] = [{ node: root, depth: 0 }];
    
    while (queue.length > 0) {
        // Dequeue the next node
        const { node, depth } = queue.shift()!;

        // Check if the current node is the target
        if (node.value === target) {
            return node; // Target found
        }

        // If we haven't reached the depth limit, enqueue the children
        if (depth < depthLimit) {
            for (const child of node.children) {
                queue.push({ node: child, depth: depth + 1 });
            }
        }
    }

    // If the target is not found within the depth limit
    return null;
}

// Example usage
const rootNode: Node = {
    value: 'A',
    children: [
        {
            value: 'B',
            children: [
                { value: 'D', children: [] },
                { value: 'E', children: [] },
            ],
        },
        {
            value: 'C',
            children: [
                { value: 'F', children: [] },
                { value: 'G', children: [] },
            ],
        },
    ],
};

// Perform a breadth-limited search
const result = breadthLimitedSearch(rootNode, 'E', 2);
console.log(result ? `Found: ${result.value}` : 'Not Found');
