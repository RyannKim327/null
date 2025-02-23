// Define a Node class
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

// Breadth-Limited Search function
function breadthLimitedSearch(root: Node, target: string, limit: number): Node | null {
    if (limit < 0) return null;

    const queue: { node: Node; depth: number }[] = [{ node: root, depth: 0 }];

    while (queue.length > 0) {
        const { node, depth } = queue.shift()!;

        // Check if the current node is the target
        if (node.value === target) {
            return node;
        }

        // If we haven't reached the depth limit, add children to the queue
        if (depth < limit) {
            for (const child of node.children) {
                queue.push({ node: child, depth: depth + 1 });
            }
        }
    }

    // Return null if the target is not found within the depth limit
    return null;
}

// Example usage
const root = new Node("A");
const b = new Node("B");
const c = new Node("C");
const d = new Node("D");
const e = new Node("E");

root.addChild(b);
root.addChild(c);
b.addChild(d);
b.addChild(e);

const targetNode = breadthLimitedSearch(root, "D", 2);
if (targetNode) {
    console.log(`Found node: ${targetNode.value}`);
} else {
    console.log("Node not found within the depth limit.");
}
