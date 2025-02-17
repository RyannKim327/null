type Node = {
    value: any;
    children: Node[];
};

function depthLimitedSearch(node: Node, depth: number, target: any): Node | null {
    // Check if the current node is the target
    if (node.value === target) {
        return node;
    }
    
    // If we've reached the depth limit, return null
    if (depth === 0) {
        return null;
    }

    // Recursively search the children
    for (let child of node.children) {
        const result = depthLimitedSearch(child, depth - 1, target);
        if (result !== null) {
            return result; // Return the found node
        }
    }

    return null; // Target not found
}

// Example usage:
const rootNode: Node = {
    value: 'A',
    children: [
        { value: 'B', children: [] },
        { value: 'C', children: [
            { value: 'D', children: [] },
            { value: 'E', children: [] }
        ]}
    ]
};

const targetValue = 'D';
const depthLimit = 2;

const foundNode = depthLimitedSearch(rootNode, depthLimit, targetValue);
if (foundNode) {
    console.log(`Found node: ${foundNode.value}`);
} else {
    console.log(`Node not found within depth limit.`);
}
