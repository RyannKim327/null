interface Node {
    value: string; // Or any data type
    children: Node[]; // Array of children nodes
}

function depthLimitedSearch(node: Node, limit: number, visited: Set<string> = new Set()): Node | null {
    // If the node value is already visited, return null to avoid cycles
    if (visited.has(node.value)) {
        return null;
    }
    
    // Mark the node as visited
    visited.add(node.value);

    // Check if the limit is reached
    if (limit === 0) {
        // If you reached the depth limit, return null or you can return the node if needed
        return null;
    }

    // Check for goal condition (for example, if we're searching for a specific value)
    // Replace 'your_goal_value' with the actual value you're searching for
    if (node.value === 'your_goal_value') {
        return node; // Goal found
    }

    // Recursive case: search in children
    for (const child of node.children) {
        const result = depthLimitedSearch(child, limit - 1, visited);
        if (result) {
            return result; // If the result is found, return it
        }
    }

    return null; // Return null if the goal is not found within the limit
}

// Example usage:
const rootNode: Node = {
    value: 'A',
    children: [
        { value: 'B', children: [] }, 
        { value: 'C', children: [{ value: 'D', children: [] }] }
    ]
};

const limit = 2;
const result = depthLimitedSearch(rootNode, limit);

if (result) {
    console.log(`Goal found: ${result.value}`);
} else {
    console.log('Goal not found within depth limit.');
}
