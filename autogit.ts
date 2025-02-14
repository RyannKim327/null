class Node {
    constructor(public value: any, public children: Node[] = []) {}
}
function breadthLimitedSearch(root: Node, limit: number): Node | null {
    if (limit < 0) {
        return null; // Return if the limit is negative
    }
    
    const queue: { node: Node, depth: number }[] = [{ node: root, depth: 0 }];
    
    while (queue.length > 0) {
        const { node, depth } = queue.shift()!;

        // Check if we have reached the limit
        if (depth === limit) {
            continue; // If we are at limit, don't expand further
        }
        
        // Process the current node
        console.log(node.value); // Example processing step
        
        // Enqueue children with incremented depth
        for (const child of node.children) {
            queue.push({ node: child, depth: depth + 1 });
        }
    }
    
    return null; // If no result is found, return null
}
const root = new Node(1, [
    new Node(2, [
        new Node(5),
        new Node(6)
    ]),
    new Node(3, [
        new Node(7),
        new Node(8)
    ]),
    new Node(4)
]);

console.log("Breadth Limited Search Result:");
breadthLimitedSearch(root, 2); // Limit set to 2
