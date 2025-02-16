// Define the structure of a node
type Node = {
    value: number; // or string based on your logic
    children: Node[];
};

function depthLimitedSearch(root: Node, limit: number, target: number): Node | null {
    const stack: [Node, number][] = [[root, 0]]; // Stack holds tuples of (Node, currentDepth)

    while (stack.length > 0) {
        const [node, depth] = stack.pop()!; // Get the last added node and its depth

        // Check if we have found the target
        if (node.value === target) {
            return node; // Return the found node
        }
        
        // If current depth is less than the limit
        if (depth < limit) {
            // Add children to the stack with increased depth
            for (let i = node.children.length - 1; i >= 0; i--) { // Reverse for stack behavior
                stack.push([node.children[i], depth + 1]);
            }
        }
    }

    return null; // If target is not found
}

// Example Usage
const node3 = { value: 3, children: [] };
const node4 = { value: 4, children: [] };
const node2 = { value: 2, children: [node3, node4] };
const root = { value: 1, children: [node2] };

const result = depthLimitedSearch(root, 2, 3);
console.log(result); // Should output the node with value 3 or null if not found
