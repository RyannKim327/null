type Node = {
    value: any;
    children?: Node[];
};

function depthLimitedSearch(root: Node, target: any, limit: number): boolean {
    if (limit < 0) {
        return false; // Limit reached, stop searching
    }
    if (root.value === target) {
        return true; // Target found
    }
    if (root.children) {
        for (const child of root.children) {
            if (depthLimitedSearch(child, target, limit - 1)) {
                return true; // If the target is found in the child
            }
        }
    }
    return false; // Target not found in this path
}

// Example usage:

const tree: Node = {
    value: 1,
    children: [
        { value: 2, children: [{ value: 4 }, { value: 5 }] },
        { value: 3, children: [{ value: 6 }, { value: 7 }] },
    ],
};

const targetValue = 5;
const depthLimit = 2;

const found = depthLimitedSearch(tree, targetValue, depthLimit);
console.log(`Target ${targetValue} found: ${found}`);
