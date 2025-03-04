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

function depthLimitedSearch(node: Node, depth: number, goal: string): Node | null {
    // Check if we have reached the goal node
    if (node.value === goal) {
        return node;
    }

    // Check if we have reached the depth limit
    if (depth <= 0) {
        return null;
    }

    // Recur for each child
    for (const child of node.children) {
        const result = depthLimitedSearch(child, depth - 1, goal);
        if (result) {
            return result;
        }
    }

    // If no child leads to the goal, return null
    return null;
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

const goalNode = depthLimitedSearch(root, 2, "F");
if (goalNode) {
    console.log(`Found node: ${goalNode.value}`);
} else {
    console.log("Node not found within depth limit.");
}
