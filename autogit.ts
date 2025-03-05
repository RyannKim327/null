interface Node {
    value: string;
    children: Node[];
}

function depthLimitedSearch(node: Node, goal: string, depthLimit: number): Node | null {
    // If the depth limit is reached or exceeded, return null
    if (depthLimit < 0) {
        return null;
    }

    // Check if the current node is the goal
    if (node.value === goal) {
        return node;
    }

    // Explore each child node
    for (const child of node.children) {
        const result = depthLimitedSearch(child, goal, depthLimit - 1);
        if (result) {
            return result; // Return the result if goal is found in child
        }
    }

    return null; // Goal not found in this path
}

// Example usage
const root: Node = {
    value: 'A',
    children: [
        {
            value: 'B',
            children: [
                { value: 'D', children: [] },
                { value: 'E', children: [] }
            ]
        },
        {
            value: 'C',
            children: [
                { value: 'F', children: [] },
                { value: 'G', children: [] }
            ]
        }
    ]
};

const goalNode = depthLimitedSearch(root, 'E', 2);
if (goalNode) {
    console.log(`Found: ${goalNode.value}`);
} else {
    console.log('Goal not found.');
}
