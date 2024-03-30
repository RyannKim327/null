class Node {
    constructor(value) {
        this.value = value;
        this.children = [];
    }
}

function depthLimitedSearch(root, targetValue, depthLimit) {
    let stack = [{
        node: root,
        depth: 0
    }];

    while (stack.length > 0) {
        let current = stack.pop();

        if (current.node.value === targetValue) {
            return current.node;
        }

        if (current.depth < depthLimit) {
            for (let child of current.node.children) {
                stack.push({
                    node: child,
                    depth: current.depth + 1
                });
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

root.children = [node2, node3];
node2.children = [node4];

console.log(depthLimitedSearch(root, 4, 2)); // Output: Node { value: 4, children: [] }
console.log(depthLimitedSearch(root, 5, 2)); // Output: null
