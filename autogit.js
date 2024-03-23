function Node(value, children) {
    this.value = value;
    this.children = children || [];
}

function breadthLimitedSearch(root, target, limit) {
    let queue = [{ node: root, depth: 0 }];

    while (queue.length > 0) {
        let current = queue.shift();
        let node = current.node;
        let depth = current.depth;

        if (node.value === target) {
            return `Found ${target} at depth ${depth}`;
        }

        if (depth < limit) {
            for (let child of node.children) {
                queue.push({ node: child, depth: depth + 1 });
            }
        }
    }

    return `Target ${target} not found within depth limit ${limit}`;
}

// Usage example
let nodeD = new Node('D');
let nodeE = new Node('E');
let nodeB = new Node('B', [nodeD, nodeE]);
let nodeF = new Node('F');
let nodeC = new Node('C', [nodeF]);
let nodeA = new Node('A', [nodeB, nodeC]);

console.log(breadthLimitedSearch(nodeA, 'F', 2));
