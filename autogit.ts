// Define a Node interface
interface Node {
    value: any;
    children: Node[];
}

// Breadth-limited search function
function breadthLimitedSearch(root: Node, target: any, maxDepth: number): Node | null {
    // Use a queue to keep track of nodes to explore
    const queue: { node: Node; depth: number }[] = [{ node: root, depth: 0 }];
    
    while (queue.length > 0) {
        const { node, depth } = queue.shift()!; // Get the first node in the queue

        // Check if the current node is the target
        if (node.value === target) {
            return node; // Return the found node
        }

        // If we haven't reached the maximum depth, add children to the queue
        if (depth < maxDepth) {
            for (const child of node.children) {
                queue.push({ node: child, depth: depth + 1 });
            }
        }
    }

    return null; // Return null if the target is not found
}

// Example usage
const rootNode: Node = {
    value: 1,
    children: [
        {
            value: 2,
            children: [
                { value: 4, children: [] },
                { value: 5, children: [] }
            ]
        },
        {
            value: 3,
            children: [
                { value: 6, children: [] },
                { value: 7, children: [] }
            ]
        }
    ]
};

const targetValue = 5;
const maxDepth = 2;
const result = breadthLimitedSearch(rootNode, targetValue, maxDepth);

if (result) {
    console.log(`Found node with value: ${result.value}`);
} else {
    console.log('Node not found within the specified depth.');
}
