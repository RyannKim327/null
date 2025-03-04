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

function depthLimitedSearch(root: Node, target: string, depthLimit: number): Node | null {
    // Create a stack for the iterative search
    const stack: { node: Node; depth: number }[] = [{ node: root, depth: 0 }];

    while (stack.length > 0) {
        const { node, depth } = stack.pop()!; // Get the last added node and its depth

        // Check if this is the node we are looking for
        if (node.value === target) {
            return node; // Return the found node
        }

        // If we have not reached the depth limit, push children onto the stack
        if (depth < depthLimit) {
            for (let i = node.children.length - 1; i >= 0; i--) {
                stack.push({ node: node.children[i], depth: depth + 1 });
            }
        }
    }

    return null; // Return null if the target is not found
}

// Example usage
const root = new Node("A");
const b = new Node("B");
const c = new Node("C");
const d = new Node("D");
const e = new Node("E");
const f = new Node("F");
const g = new Node("G");

root.addChild(b);
root.addChild(c);
b.addChild(d);
b.addChild(e);
c.addChild(f);
c.addChild(g);

const targetNode = depthLimitedSearch(root, "E", 2);
if (targetNode) {
    console.log(`Found node: ${targetNode.value}`);
} else {
    console.log("Node not found within depth limit.");
}
