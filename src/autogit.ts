interface Node {
    value: any; // The value stored in the node
    children: Node[]; // The children of this node
}
function breadthLimitedSearch(root: Node, depthLimit: number, target: any): Node | null {
    // Early exit if the root is null
    if (!root) {
        return null;
    }
    
    // Queue for BFS
    const queue: { node: Node; depth: number }[] = [{ node: root, depth: 0 }];
    
    while (queue.length > 0) {
        const { node, depth } = queue.shift()!;
        
        // Check if the current node matches the target value
        if (node.value === target) {
            return node; // Target found
        }

        // If we haven't reached the depth limit, add children to the queue
        if (depth < depthLimit) {
            for (const child of node.children) {
                queue.push({ node: child, depth: depth + 1 });
            }
        }
    }
    
    // Target not found within depth limit
    return null;
}
// Create an example tree
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

// Test the breadth-limited search
const result = breadthLimitedSearch(rootNode, 2, 'E');
console.log(result); // Output: { value: 'E', children: [] }

const notFound = breadthLimitedSearch(rootNode, 1, 'D');
console.log(notFound); // Output: null (D is deeper than depth limit)
