// Define the structure of a node for the search tree or graph
interface Node {
    value: string; // or any type you want to use
    children?: Node[]; // optional, for tree-like structures
}

// Depth-Limited Search iterative implementation
function depthLimitedSearch(root: Node, goal: string, limit: number): boolean {
    // Stack to hold nodes to explore
    const stack: Array<{ node: Node, depth: number }> = [];
    // Push the root node with a depth of 0
    stack.push({ node: root, depth: 0 });

    while (stack.length > 0) {
        // Pop a node from the stack
        const { node, depth } = stack.pop()!;
        
        // Check if the current node is the goal
        if (node.value === goal) {
            return true; // Goal found
        }

        // If the current depth is less than the limit
        if (depth < limit) {
            // If the node has children, push them onto the stack
            if (node.children) {
                for (let child of node.children) {
                    stack.push({ node: child, depth: depth + 1 });
                }
            }
        }
    }
    
    // Goal not found within the depth limit
    return false;
}

// Example usage
const rootNode: Node = {
    value: 'A',
    children: [
        { value: 'B', children: [{ value: 'D' }, { value: 'E' }] },
        { value: 'C', children: [{ value: 'F' }, { value: 'G' }] }
    ]
};

const goalValue = 'E';
const depthLimit = 2;

const found = depthLimitedSearch(rootNode, goalValue, depthLimit);
console.log(`Goal "${goalValue}" found: ${found}`);
