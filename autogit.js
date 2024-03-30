// Node class to represent the nodes in the search tree
class Node {
    constructor(value) {
        this.value = value;
        this.children = [];
    }
}

// Function to perform breadth-limited search
function breadthLimitedSearch(root, limit, target) {
    let queue = [root];
    let depth = 0;

    while (queue.length > 0 && depth <= limit) {
        let node = queue.shift();

        if (node.value === target) {
            return node;
        }

        if (node.children) {
            for (let child of node.children) {
                queue.push(child);
            }
        }

        if (queue[0] === undefined) {
            queue = [];
            depth++;
            queue.push(root);
        }
    }

    return null;
}

// Example usage
let root = new Node(1);
root.children = [new Node(2), new Node(3), new Node(4)];
root.children[0].children = [new Node(5), new Node(6)];
root.children[1].children = [new Node(7), new Node(8)];

let result = breadthLimitedSearch(root, 2, 8);
if (result) {
    console.log("Node found: " + result.value);
} else {
    console.log("Node not found.");
}
