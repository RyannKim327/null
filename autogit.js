function Node(value, children) {
    this.value = value;
    this.children = children || [];
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

// Example Usage
let tree = new Node(1, [
    new Node(2, [
        new Node(4),
        new Node(5)
    ]),
    new Node(3, [
        new Node(6),
        new Node(7)
    ])
]);

let result = depthLimitedSearch(tree, 6, 2); // Searching for value 6 with depth limit 2
console.log(result); // Output: Node { value: 6, children: [] }
