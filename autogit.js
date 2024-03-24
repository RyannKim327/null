class Node {
    constructor(value) {
        this.value = value;
        this.children = [];
    }
}

function depthLimitedSearch(root, target, depthLimit) {
    let stack = [{ node: root, depth: 0 }];

    while (stack.length > 0) {
        let current = stack.pop();
        let currentNode = current.node;
        let currentDepth = current.depth;

        if (currentNode.value === target) {
            return currentNode;
        }

        if (currentDepth < depthLimit) {
            for (let i = 0; i < currentNode.children.length; i++) {
                stack.push({ node: currentNode.children[i], depth: currentDepth + 1 });
            }
        }
    }

    return null;
}

// Example Usage
const node1 = new Node(1);
const node2 = new Node(2);
const node3 = new Node(3);
const node4 = new Node(4);
const node5 = new Node(5);

node1.children = [node2, node3];
node2.children = [node4, node5];

const result = depthLimitedSearch(node1, 5, 2);
if (result) {
    console.log("Node found: ", result.value);
} else {
    console.log("Node not found within depth limit.");
}
