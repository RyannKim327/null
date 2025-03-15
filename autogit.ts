// Define a type for the graph nodes
type Node = {
    value: string;
    children: Node[];
};

// Depth-limited search function
function depthLimitedSearch(node: Node, depthLimit: number, target: string): boolean {
    // If the current node is the target, return true
    if (node.value === target) {
        return true;
    }

    // If the depth limit is reached, return false
    if (depthLimit === 0) {
        return false;
    }

    // Recursively search in the children nodes
    for (const child of node.children) {
        if (depthLimitedSearch(child, depthLimit - 1, target)) {
            return true;
        }
    }

    // If the target is not found in this path, return false
    return false;
}

// Example usage
const rootNode: Node = {
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

const targetValue = 'E';
const depthLimit = 2;

const found = depthLimitedSearch(rootNode, depthLimit, targetValue);
console.log(`Target ${targetValue} found: ${found}`);
