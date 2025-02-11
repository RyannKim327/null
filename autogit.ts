class Node {
    constructor(public value: any, public children: Node[] = []) {}
}

function depthLimitedSearch(root: Node, target: any, depth: number): boolean {
    if (depth === 0 && root.value === target) {
        return true; // Found the target at the current depth
    }

    if (depth > 0) {
        for (let child of root.children) {
            if (depthLimitedSearch(child, target, depth - 1)) {
                return true; // Found the target in the child subtree
            }
        }
    }
    
    return false; // Target not found at this depth
}

// Example usage:

// Creating a sample tree
const root = new Node(1, [
    new Node(2, [
        new Node(5),
        new Node(6)
    ]),
    new Node(3),
    new Node(4, [
        new Node(7)
    ])
]);

const targetValue = 5;
const maxDepth = 2;

const found = depthLimitedSearch(root, targetValue, maxDepth);
console.log(found ? "Target found!" : "Target not found.");
