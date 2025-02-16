class Node {
    value: number;
    children: Node[];

    constructor(value: number) {
        this.value = value;
        this.children = [];
    }

    addChild(child: Node) {
        this.children.push(child);
    }
}

function depthLimitedSearch(root: Node, target: number, limit: number): Node | null {
    const stack: { node: Node, depth: number }[] = [];
    stack.push({ node: root, depth: 0 });

    while (stack.length > 0) {
        const { node, depth } = stack.pop()!;

        if (node.value === target) {
            return node; // target found
        }

        if (depth < limit) {
            // Push children onto the stack with incremented depth
            for (let i = node.children.length - 1; i >= 0; i--) { // reverse to maintain order
                stack.push({ node: node.children[i], depth: depth + 1 });
            }
        }
    }

    return null; // target not found within depth limit
}

// Usage example
const root = new Node(1);
const child1 = new Node(2);
const child2 = new Node(3);
const grandChild1 = new Node(4);
const grandChild2 = new Node(5);

root.addChild(child1);
root.addChild(child2);
child1.addChild(grandChild1);
child1.addChild(grandChild2);

const targetNode = depthLimitedSearch(root, 4, 2); // Searching for node with value 4 within depth limit of 2
if (targetNode) {
    console.log(`Found node with value: ${targetNode.value}`);
} else {
    console.log('Node not found within the depth limit.');
}
