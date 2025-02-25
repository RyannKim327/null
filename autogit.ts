class Node {
    value: string;
    children: Node[];

    constructor(value: string) {
        this.value = value;
        this.children = [];
    }

    addChild(child: Node) {
        this.children.push(child);
    }
}

function depthLimitedSearch(root: Node, target: string, limit: number): Node | null {
    const stack: { node: Node; depth: number }[] = [];
    stack.push({ node: root, depth: 0 });

    while (stack.length > 0) {
        const { node, depth } = stack.pop()!;

        // Check if the current node is the target
        if (node.value === target) {
            return node;
        }

        // If the current depth is less than the limit, add children to the stack
        if (depth < limit) {
            for (let i = node.children.length - 1; i >= 0; i--) {
                stack.push({ node: node.children[i], depth: depth + 1 });
            }
        }
    }

    // Return null if the target is not found within the depth limit
    return null;
}

// Example usage:
const root = new Node("A");
const b = new Node("B");
const c = new Node("C");
const d = new Node("D");
const e = new Node("E");

root.addChild(b);
root.addChild(c);
b.addChild(d);
b.addChild(e);

const targetNode = depthLimitedSearch(root, "E", 2);
if (targetNode) {
    console.log(`Found node: ${targetNode.value}`);
} else {
    console.log("Node not found within the depth limit.");
}
