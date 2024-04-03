function Node(value, children) {
    this.value = value;
    this.children = children;
}

function depthLimitedSearch(root, targetValue, depthLimit) {
    let stack = [{ node: root, depth: 0 }];

    while (stack.length > 0) {
        const { node, depth } = stack.pop();

        if (node.value === targetValue) {
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
const targetValue = 5;
const depthLimit = 2;
const node7 = new Node(7, []);
const node6 = new Node(6, []);
const node5 = new Node(5, []);
const node4 = new Node(4, []);
const node3 = new Node(3, [node6, node7]);
const node2 = new Node(2, [node4, node5]);
const node1 = new Node(1, [node2, node3]);

const result = depthLimitedSearch(node1, targetValue, depthLimit);
console.log(result ? `Found target value ${targetValue}` : `Target value ${targetValue} not found within depth limit`);
