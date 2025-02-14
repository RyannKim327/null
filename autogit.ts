class Node {
    value: any;
    children: Node[];

    constructor(value: any) {
        this.value = value;
        this.children = [];
    }

    addChild(child: Node) {
        this.children.push(child);
    }
}

function depthLimitedSearch(root: Node, target: any, limit: number): Node | null {
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
const root = new Node(1);
const child1 = new Node(2);
const child2 = new Node(3);
const child3 = new Node(4);
const child4 = new Node(5);

root.addChild(child1);
root.addChild(child2);
child1.addChild(child3);
child1.addChild(child4);

const target = 4;
const limit = 2;

const result = depthLimitedSearch(root, target, limit);
if (result) {
    console.log(`Found target: ${result.value}`);
} else {
    console.log('Target not found within the depth limit.');
}
