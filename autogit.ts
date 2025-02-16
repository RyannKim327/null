type Node = {
    value: any;
    children: Node[];
};

function depthLimitedSearch(node: Node, depth: number, target: any): Node | null {
    // Check if the current node is the target
    if (node.value === target) {
        return node;
    }

    // If the depth limit is reached, return null
    if (depth === 0) {
        return null;
    }

    // Explore each child node
    for (const child of node.children) {
        const result = depthLimitedSearch(child, depth - 1, target);
        if (result) {
            return result; // Return the found node
        }
    }

    return null; // Target not found in this path
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

const targetValue = 5;
const depthLimit = 2;
const result = depthLimitedSearch(tree, depthLimit, targetValue);

if (result) {
    console.log(`Found node with value: ${result.value}`);
} else {
    console.log('Node not found within the depth limit.');
}
