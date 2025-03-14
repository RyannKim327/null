class Node {
    value: number;
    children: Node[];

    constructor(value: number) {
        this.value = value;
        this.children = [];
    }
}

function depthLimitedSearch(node: Node, depth: number, target: number): Node | null {
    if (depth === 0) {
        if (node.value === target) {
            return node;
        } else {
            return null;
        }
    }

    for (const child of node.children) {
        const result = depthLimitedSearch(child, depth - 1, target);
        if (result !== null) {
            return result;
        }
    }

    return null;
}

// Example usage
const rootNode = new Node(1);
const childNode1 = new Node(2);
const childNode2 = new Node(3);
rootNode.children.push(childNode1, childNode2);

const result = depthLimitedSearch(rootNode, 2, 3);
console.log(result);
