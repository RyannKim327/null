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

function depthLimitedSearch(root: Node, target: number, depthLimit: number): Node | null {
    const stack: { node: Node; depth: number }[] = [{ node: root, depth: 0 }];

    while (stack.length > 0) {
        const { node, depth } = stack.pop()!; // Get the current node and its depth

        // Check if the current node is the target
        if (node.value === target) {
            return node; // Found the target
        }

        // If we haven't reached the depth limit, add the children to the stack
        if (depth < depthLimit) {
            for (let i = node.children.length - 1; i >= 0; i--) {
                stack.push({ node: node.children[i], depth: depth + 1 });
            }
        }
    }

    return null; // Target not found within the depth limit
}

// Example usage
const root = new Node(1);
const child1 = new Node(2);
const child2 = new Node(3);
const child3 = new Node(4);
const grandChild1 = new Node(5);
const grandChild2 = new Node(6);
const grandChild3 = new Node(7);

root.addChild(child1);
root.addChild(child2);
child1.addChild(child3);
child3.addChild(grandChild1);
child3.addChild(grandChild2);
child2.addChild(grandChild3);

// Perform a depth-limited search
const target = 6;
const depthLimit = 2;
const result = depthLimitedSearch(root, target, depthLimit);

if (result) {
    console.log(`Found target: ${result.value}`);
} else {
    console.log(`Target not found within depth limit.`);
}
