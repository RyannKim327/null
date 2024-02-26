function Node(data) {
    this.data = data;
    this.children = [];
}

function breadthLimitedSearch(root, goal, limit) {
    let queue = [];
    queue.push({ node: root, depth: 0 });

    while (queue.length > 0) {
        let current = queue.shift();
        let currentNode = current.node;
        let currentDepth = current.depth;

        if (currentNode.data === goal) {
            return currentNode;
        }

        if (currentDepth < limit) {
            currentNode.children.forEach(child => {
                queue.push({ node: child, depth: currentDepth + 1 });
            });
        }
    }
    
    return null; // If goal is not found within the limit
}

// Usage example
let node1 = new Node(1);
let node2 = new Node(2);
let node3 = new Node(3);
let node4 = new Node(4);
let node5 = new Node(5);
let node6 = new Node(6);

node1.children.push(node2, node3);
node2.children.push(node4, node5);
node3.children.push(node6);

let result = breadthLimitedSearch(node1, 6, 2);

if (result) {
    console.log("Goal found: " + result.data);
} else {
    console.log("Goal not found within the limit");
}
