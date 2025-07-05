// Define the structure for a Node
class Node {
    value: string;
    children: Node[];

    constructor(value: string) {
        this.value = value;
        this.children = [];
    }

    // Method to add a child node
    addChild(child: Node) {
        this.children.push(child);
    }
}

// Implement the breadth-limited search algorithm
function breadthLimitedSearch(root: Node, target: string, depthLimit: number): Node | null {
    if (depthLimit < 0) {
        throw new Error("Depth limit must be non-negative");
    }

    // Create a queue for BFS
    const queue: { node: Node; depth: number }[] = [];
    queue.push({ node: root, depth: 0 });

    while (queue.length > 0) {
        const { node, depth } = queue.shift()!; // Get the front node

        // Check if the current node is the target
        if (node.value === target) {
            return node; // Return the found node
        }

        // Only traverse children if we haven't reached the depth limit
        if (depth < depthLimit) {
            for (const child of node.children) {
                queue.push({ node: child, depth: depth + 1 });
            }
        }
    }

    // Return null if the target was not found
    return null;
}

// Example usage
const root = new Node("A");
const b = new Node("B");
const c = new Node("C");
const d = new Node("D");
const e = new Node("E");
const f = new Node("F");

root.addChild(b);
root.addChild(c);
b.addChild(d);
b.addChild(e);
c.addChild(f);

// Perform a breadth-limited search
const targetNode = breadthLimitedSearch(root, "E", 2);

if (targetNode) {
    console.log(`Found node: ${targetNode.value}`);
} else {
    console.log("Node not found within the depth limit.");
}
