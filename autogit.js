class Node {
    constructor(value) {
        this.value = value;
        this.children = [];
    }
}

function depthLimitedSearch(root, target, depthLimit) {
    let stack = [{ node: root, depth: 0 }];

    while (stack.length > 0) {
        let { node, depth } = stack.pop();

        if (node.value === target) {
            return node;
        }

        if (depth < depthLimit) {
            for (let child of node.children) {
                stack.push({ node: child, depth: depth + 1 });
            }
        }
    }

    return null;
}

// Usage example
let node1 = new Node(1);
let node2 = new Node(2);
let node3 = new Node(3);
let node4 = new Node(4);

node1.children.push(node2, node3);
node2.children.push(node4);

console.log(depthLimitedSearch(node1, 4, 2)); // Output: Node { value: 4, children: [] }
