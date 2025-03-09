type Node = {
    value: any;
    children: Node[];
};

function depthLimitedSearch(node: Node, depth: number, target: any): boolean {
    // Check if the current node is the target
    if (node.value === target) {
        return true;
    }

    // If the depth limit is reached, return false
    if (depth === 0) {
        return false;
    }

    // Recursively search in the children nodes
    for (const child of node.children) {
        if (depthLimitedSearch(child, depth - 1, target)) {
            return true;
        }
    }

    // If the target is not found in this path, return false
    return false;
}

// Example usage:
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

const found = depthLimitedSearch(tree, depthLimit, targetValue);
console.log(`Target ${targetValue} found: ${found}`);
