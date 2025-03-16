// Define a Node interface
interface Node {
    value: any;
    children: Node[];
}

// Breadth-Limited Search function
function breadthLimitedSearch(root: Node, maxDepth: number): Node[] {
    if (maxDepth < 0) {
        throw new Error("Max depth must be non-negative");
    }

    const result: Node[] = [];
    const queue: { node: Node; depth: number }[] = [{ node: root, depth: 0 }];

    while (queue.length > 0) {
        const { node, depth } = queue.shift()!; // Get the first element from the queue

        // If the current depth is within the limit, add the node to the result
        if (depth <= maxDepth) {
            result.push(node);
            // Add children to the queue with incremented depth
            for (const child of node.children) {
                queue.push({ node: child, depth: depth + 1 });
            }
        }
    }

    return result;
}

// Example usage
const tree: Node = {
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

const maxDepth = 1;
const result = breadthLimitedSearch(tree, maxDepth);
console.log(result.map(node => node.value)); // Output: [1, 2, 3]
