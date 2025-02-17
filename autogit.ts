class Node<T> {
    value: T;
    children: Node<T>[];

    constructor(value: T) {
        this.value = value;
        this.children = [];
    }
}

function depthLimitedSearch<T>(startNode: Node<T>, goal: T, limit: number): boolean {
    if (limit < 0) {
        return false; // Limit reached, cut off search
    }
    if (startNode.value === goal) {
        return true; // Goal found
    }
    for (const child of startNode.children) {
        // Recursively call DLS on child nodes with a reduced limit
        if (depthLimitedSearch(child, goal, limit - 1)) {
            return true; // If goal is found in child's subtree
        }
    }
    return false; // Goal not found within this branch
}

// Example usage:

// Creating a simple tree
const root = new Node<number>(1);
const child1 = new Node<number>(2);
const child2 = new Node<number>(3);
const grandChild1 = new Node<number>(4);
const grandChild2 = new Node<number>(5);
const grandChild3 = new Node<number>(6);

root.children.push(child1, child2);
child1.children.push(grandChild1, grandChild2);
child2.children.push(grandChild3);

// Searching for a value
const found = depthLimitedSearch(root, 5, 2);
console.log(found); // Outputs: true
