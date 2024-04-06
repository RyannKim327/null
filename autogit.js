function Node(value) {
    this.value = value;
    this.children = [];
}

function breadthLimitedSearch(root, target, limit) {
    let queue = [];
    queue.push({ node: root, depth: 0 });

    while (queue.length > 0) {
        let current = queue.shift();

        if (current.node.value === target) {
            return current.node;
        }

        if (current.depth < limit) {
            current.node.children.forEach(child => {
                queue.push({ node: child, depth: current.depth + 1 });
            });
        }
    }

    return null;
}

// Usage example
let root = new Node(1);
let node2 = new Node(2);
let node3 = new Node(3);
let node4 = new Node(4);
let node5 = new Node(5);

root.children = [node2, node3];
node2.children = [node4];
node3.children = [node5];

let result = breadthLimitedSearch(root, 5, 2);
console.log(result);
