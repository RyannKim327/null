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

function depthLimitedSearch(root: Node, limit: number, target: string): Node | null {
    const stack: { node: Node; depth: number }[] = [];
    stack.push({ node: root, depth: 0 });

    while (stack.length > 0) {
        const { node, depth } = stack.pop()!;

        // Check if the node is the target
        if (node.value === target) {
            return node;
        }

        // If the depth limit has not been reached, add children to the stack
        if (depth < limit) {
            for (let i = node.children.length - 1; i >= 0; i--) {
                stack.push({ node: node.children[i], depth: depth + 1 });
            }
        }
    }

    // Return null if the target was not found within the depth limit
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

const targetNode = depthLimitedSearch(root, 2, "D");
console.log(targetNode ? targetNode.value : "Not found");  // Output: "Not found"
