function Node(value, children) {
    this.value = value;
    this.children = children;
}

function depthLimitedSearch(root, target, depth) {
    let stack = [{ node: root, depth: 0 }];

    while (stack.length > 0) {
        let current = stack.pop();

        if (current.node.value === target) {
            return current.node.value;
        }

        if (current.depth < depth) {
            for (let child of current.node.children) {
                stack.push({ node: child, depth: current.depth + 1 });
            }
        }
    }

    return null;
}

// Example usage
let node1 = new Node(1, []);
let node2 = new Node(2, []);
let node3 = new Node(3, []);
let node4 = new Node(4, []);
let node5 = new Node(5, []);

node1.children.push(node2, node3);
node2.children.push(node4, node5);

console.log(depthLimitedSearch(node1, 5, 2)); // Output: 5
