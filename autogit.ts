type Node = {
    value: string;
    children?: Node[];
};

function depthLimitedSearch(node: Node, goal: string, depth: number, limit: number): Node | null {
    // Check if the current node is the goal
    if (node.value === goal) {
        return node;
    }

    // Check if the depth limit has been reached
    if (depth >= limit) {
        return null;
    }

    // Recursively search through each child
    if (node.children) {
        for (const child of node.children) {
            const result = depthLimitedSearch(child, goal, depth + 1, limit);
            if (result) {
                return result; // Return the result if found
            }
        }
    }

    return null; // Return null if goal is not found
}

// Example usage:
const root: Node = {
    value: 'A',
    children: [
        {
            value: 'B',
            children: [
                { value: 'D' },
                { value: 'E' }
            ]
        },
        {
            value: 'C',
            children: [
                { value: 'F' },
                { value: 'G' }
            ]
        }
    ]
};

const depthLimit = 2;
const goalNode = depthLimitedSearch(root, 'E', 0, depthLimit);
console.log(goalNode ? `Found: ${goalNode.value}` : 'Not found');
