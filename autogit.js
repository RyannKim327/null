class Node {
    constructor(name, children = []) {
        this.name = name;
        this.children = children;
    }
}

function depthLimitedSearch(node, target, depth) {
    let stack = [{ node, depth: 0 }];

    while (stack.length > 0) {
        const { node, depth } = stack.pop();

        if (depth <= depth) {
            if (node.name === target) {
                return node;
            }

            for (let child of node.children) {
                stack.push({ node: child, depth: depth + 1 });
            }
        }
    }

    return null;
}

// Example usage
const nodeG = new Node('G');
const nodeF = new Node('F');
const nodeE = new Node('E', [nodeF, nodeG]);
const nodeD = new Node('D');
const nodeC = new Node('C', [nodeD]);
const nodeB = new Node('B', [nodeE]);
const nodeA = new Node('A', [nodeB, nodeC]);

const targetNode = depthLimitedSearch(nodeA, 'G', 2);
console.log(targetNode);
