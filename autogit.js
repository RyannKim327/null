// Depth-limited search algorithm
function depthLimitedSearch(node, goal, depthLimit) {
    // Base case: goal found
    if (node === goal) {
        return true;
    }

    // Base case: depth limit reached
    if (depthLimit <= 0) {
        return false;
    }

    // Recursive case: explore next level
    for (let child of node.children) {
        if (depthLimitedSearch(child, goal, depthLimit - 1)) {
            return true;
        }
    }

    return false; // Goal not found
}

// Usage example
class Node {
    constructor(value, children = []) {
        this.value = value;
        this.children = children;
    }
}

// Create a sample tree
const tree = new Node("A", [
    new Node("B", [
        new Node("C"),
        new Node("D"),
    ]),
    new Node("E", [
        new Node("F", [
            new Node("G"),
            new Node("H"),
        ]),
        new Node("I"),
    ]),
]);

// Search for a value in the tree up to depth 2
const goalFound = depthLimitedSearch(tree, "G", 2);

console.log("Goal found:", goalFound);
