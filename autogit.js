function Node(value, children = []) {
    this.value = value;
    this.children = children;
}

function breadthLimitedSearch(root, target, limit) {
    let queue = [{
        node: root,
        depth: 0
    }];

    while (queue.length > 0) {
        let current = queue.shift();
        let node = current.node;
        let depth = current.depth;

        if (depth > limit) {
            continue; // Skip nodes beyond the limit
        }

        if (node.value === target) {
            return node;
        }

        for (let child of node.children) {
            queue.push({
                node: child,
                depth: depth + 1
            });
        }
    }

    return null; // Target not found within the limit
}

// Example usage:
// Create a tree
let nodeA = new Node("A");
let nodeB = new Node("B");
let nodeC = new Node("C");
let nodeD = new Node("D");
let nodeE = new Node("E");
nodeA.children = [nodeB, nodeC];
nodeB.children = [nodeD, nodeE];

// Search for node with value "C" with limit 2
let result = breadthLimitedSearch(nodeA, "C", 2);
console.log(result); // Should output the node with value "C"
