// Define the structure of a Node
interface Node {
    value: string; // or whatever type you need
    children: Node[];
}

// Breadth-Limited Search function
function breadthLimitedSearch(root: Node, target: string, limit: number): Node | null {
    // Check if the root is the target
    if (root.value === target) {
        return root;
    }

    // Create a queue for BFS
    const queue: { node: Node; depth: number }[] = [{ node: root, depth: 0 }];
    
    while (queue.length > 0) {
        const { node, depth } = queue.shift()!; // Get the front node from the queue

        // Avoid going deeper than the limit
        if (depth < limit) {
            // Check all children of the current node
            for (let child of node.children) {
                if (child.value === target) {
                    return child; // Return if the target is found
                }
                // Enqueue children with incremented depth
                queue.push({ node: child, depth: depth + 1 });
            }
        }
    }

    // If the target was not found within the depth limit
    return null;
}

// Example Usage
const tree: Node = {
    value: 'A',
    children: [
        { value: 'B', children: [{ value: 'D', children: [] }, { value: 'E', children: [] }] },
        { value: 'C', children: [{ value: 'F', children: [] }, { value: 'G', children: [] }] }
    ]
};

const result = breadthLimitedSearch(tree, 'E', 2); // Search for 'E' with a limit of 2
console.log(result ? `Found: ${result.value}` : 'Not found');
