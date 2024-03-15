function Node(value) {
    this.value = value;
    this.children = [];
}

function breadthLimitedSearch(root, target, limit) {
    if (!root) return null;

    let queue = [{ node: root, depth: 0 }];

    while (queue.length > 0) {
        let current = queue.shift();
        let node = current.node;
        let depth = current.depth;

        if (node.value === target) {
            return node;
        }

        if (depth < limit) {
            node.children.forEach(child => {
                queue.push({ node: child, depth: depth + 1 });
            });
        }
    }

    return null;
}

// Usage
let rootNode = new Node(1);
let node2 = new Node(2);
let node3 = new Node(3);
let node4 = new Node(4);
let node5 = new Node(5);

rootNode.children = [node2, node3];
node2.children = [node4, node5];

let targetNode = breadthLimitedSearch(rootNode, 5, 2);
console.log(targetNode);
