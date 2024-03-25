function Node(value) {
    this.value = value;
    this.children = [];
}

function breadthLimitedSearch(root, targetValue, limit) {
    let queue = [{ node: root, depth: 0 }];

    while (queue.length > 0) {
        let currentNode = queue.shift();
        let node = currentNode.node;
        let depth = currentNode.depth;

        if (node.value === targetValue) {
            return node;
        }

        if (depth < limit) {
            for (let i = 0; i < node.children.length; i++) {
                queue.push({ node: node.children[i], depth: depth + 1 });
            }
        }
    }

    return null;
}

// Usage example
let root = new Node(1);
let node2 = new Node(2);
let node3 = new Node(3);
let node4 = new Node(4);
let node5 = new Node(5);

root.children = [node2, node3];
node2.children = [node4, node5];

let result = breadthLimitedSearch(root, 5, 2);
if (result) {
    console.log(`Node with value 5 found: ${result}`);
} else {
    console.log('Node not found within the specified limit');
}
