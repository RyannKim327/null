class Node {
    constructor(value) {
        this.value = value;
        this.children = [];
    }
}

function depthLimitedSearch(root, limit) {
    if (!root) {
        return null;
    }

    let stack = [{ node: root, depth: 0 }];

    while (stack.length > 0) {
        let current = stack.pop();
        let node = current.node;
        let depth = current.depth;

        console.log(`Visiting node ${node.value} at depth ${depth}`);

        if (depth < limit) {
            for (let child of node.children) {
                stack.push({ node: child, depth: depth + 1 });
            }
        }
    }
}

// Usage example
const rootNode= new Node(1);
const node2 = new Node(2);
const node3 = new Node(3);
const node4 = new Node(4);
const node5 = new Node(5);

rootNode.children = [node2, node3];
node2.children = [node4];
node3.children = [node5];

depthLimitedSearch(rootNode, 2);
