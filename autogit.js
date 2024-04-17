function Node(value) {
    this.value = value;
    this.children = [];
}

function breadthLimitedSearch(root, target, limit) {
    let queue = [{ node: root, depth: 0 }];

    while (queue.length > 0) {
        let current = queue.shift();
        let node = current.node;
        let depth = current.depth;

        if (node.value === target) {
            return node;
        }

        if (depth < limit) {
            for (let child of node.children) {
                queue.push({ node: child, depth: depth + 1 });
            }
        }
    }

    return null;
}

// Usage example
let rootNode = new Node(1);
let node2 = new Node(2);
let node3 = new Node(3);
let node4 = new Node(4);

rootNode.children.push(node2, node3);
node2.children.push(new Node(5), new Node(6));
node3.children.push(new Node(7), new Node(8));
node4.children.push(new Node(9), new Node(10));

let result = breadthLimitedSearch(rootNode, 8, 2);
console.log(result); // Should output the node with value 8
