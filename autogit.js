class Node {
    constructor(value, children = []) {
        this.value = value;
        this.children = children;
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

// Example usage
let nodeG = new Node('G');
let nodeF = new Node('F');
let nodeE = new Node('E', [nodeF, nodeG]);
let nodeD = new Node('D');
let nodeC = new Node('C', [nodeD]);
let nodeB = new Node('B', [nodeC, nodeE]);
let nodeA = new Node('A', [nodeB]);

let result = depthLimitedSearch(nodeA, 'G', 3);
console.log(result);
