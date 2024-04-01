class Node {
    constructor(value) {
        this.value = value;
        this.children = [];
    }

    addChild(node) {
        this.children.push(node);
    }
}

function depthLimitedSearch(root, target, depthLimit) {
    if (!root) return null;

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

// Example Usage
let root = new Node(1);
let node2 = new Node(2);
let node3 = new Node(3);
let node4 = new Node(4);

root.addChild(node2);
root.addChild(node3);
node3.addChild(node4);

console.log(depthLimitedSearch(root, 4, 2)); // Output: Node { value: 4, children: [] }
