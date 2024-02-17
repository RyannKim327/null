function breadthLimitedSearch(root, target, limit) {
    let queue = [{ node: root, depth: 0 }];

    while (queue.length > 0) {
        let current = queue.shift();
        let currentNode = current.node;
        let currentDepth = current.depth;

        if (currentNode.value === target) {
            return currentNode;
        }

        if (currentDepth < limit) {
            for (let child of currentNode.children) {
                if (!child.visited) {
                    child.visited = true;
                    queue.push({ node: child, depth: currentDepth + 1 });
                }
            }
        }
    }

    return null;
}

// Define a sample tree structure
class Node {
    constructor(value) {
        this.value = value;
        this.children = [];
        this.visited = false;
    }
}

let root = new Node(1);

let node2 = new Node(2);
let node3 = new Node(3);
let node4 = new Node(4);
let node5 = new Node(5);
let node6 = new Node(6);

root.children = [node2, node3];
node2.children = [node4, node5];
node3.children = [node6];

let targetNode = breadthLimitedSearch(root, 6, 2); // Search for target value 6 with depth limit 2

if (targetNode) {
    console.log("Target node found: ", targetNode);
} else {
    console.log("Target not found within the depth limit.");
}
