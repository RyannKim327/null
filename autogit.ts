class Node {
    constructor(public value: string, public children: Node[] = []) {}
}

function breadthLimitedSearch(root: Node, target: string, limit: number): Node | null {
    const queue: { node: Node, depth: number }[] = [];
    queue.push({ node: root, depth: 0 });

    while (queue.length > 0) {
        const { node, depth } = queue.shift()!;

        // Check if we've found the target
        if (node.value === target) {
            return node;
        }

        // Only continue if we haven't reached the depth limit
        if (depth < limit) {
            for (const child of node.children) {
                queue.push({ node: child, depth: depth + 1 });
            }
        }
    }

    // If target is not found within the limit
    return null;
}

// Example usage
const root = new Node("A", [
    new Node("B", [
        new Node("D"),
        new Node("E")
    ]),
    new Node("C", [
        new Node("F"),
        new Node("G", [
            new Node("I"),
            new Node("J")
        ])
    ])
]);

const targetNode = "E";
const limit = 2;

const result = breadthLimitedSearch(root, targetNode, limit);
if (result) {
    console.log(`Found: ${result.value}`);
} else {
    console.log("Not Found within the limit");
}
