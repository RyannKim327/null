function depthLimitedSearch(node, goal, depthLimit) {
    return recursiveDLS(node, goal, depthLimit, 0);
}

function recursiveDLS(node, goal, depthLimit, depth) {
    if (depth > depthLimit) {
        return false;
    }

    if (node === goal) {
        return true;
    }

    if (depth === depthLimit) {
        return false;
    }

    for (let child of node.children) {
        if (recursiveDLS(child, goal, depthLimit, depth + 1)) {
            return true;
        }
    }

    return false;
}

// Usage example
class Node {
    constructor(value) {
        this.value = value;
        this.children = [];
    }
}

// Construct a tree
const root = new Node(1);
const node2 = new Node(2);
const node3 = new Node(3);
root.children = [node2, node3];
const node4 = new Node(4);
node2.children = [node4];
const node5 = new Node(5);
node4.children = [node5];

console.log(depthLimitedSearch(root, node5, 2)); // Output: false
console.log(depthLimitedSearch(root, node5, 3)); // Output: true
