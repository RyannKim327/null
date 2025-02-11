class Node {
    constructor(public value: any, public children: Node[] = []) {}
}

function depthLimitedSearch(root: Node, target: any, limit: number): Node | null {
    const stack: { node: Node; depth: number }[] = [{ node: root, depth: 0 }];
    
    while (stack.length > 0) {
        const { node, depth } = stack.pop()!;
        
        // Check if the current node is the target
        if (node.value === target) {
            return node;
        }
        
        // If the depth limit is not reached, add children to the stack
        if (depth < limit) {
            for (let i = node.children.length - 1; i >= 0; i--) {
                stack.push({ node: node.children[i], depth: depth + 1 });
            }
        }
    }
    
    // Target not found within the depth limit
    return null;
}

// Example Usage
const root = new Node(1, [
    new Node(2, [new Node(5), new Node(6)]),
    new Node(3, [new Node(7)]),
    new Node(4)
]);

const target = 6;
const limit = 2;

const result = depthLimitedSearch(root, target, limit);
if (result) {
    console.log(`Found: ${result.value}`);
} else {
    console.log("Target not found within depth limit.");
}
