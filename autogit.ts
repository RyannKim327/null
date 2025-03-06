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

function depthLimitedSearch(root: Node, target: string, limit: number): boolean {
    const stack: { node: Node; depth: number }[] = [];
    stack.push({ node: root, depth: 0 });

    while (stack.length > 0) {
        const { node, depth } = stack.pop()!;

        // Check if the current node is the target
        if (node.value === target) {
            return true;
        }

        // If the current depth is less than the limit, add children to the stack
        if (depth < limit) {
            for (let i = node.children.length - 1; i >= 0; i--) {
                stack.push({ node: node.children[i], depth: depth + 1 });
            }
        }
    }

    // Target not found within the depth limit
    return false;
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

const target = "E";
const limit = 2;

const found = depthLimitedSearch(root, target, limit);
console.log(`Target ${target} found: ${found}`);
