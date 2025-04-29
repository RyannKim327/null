type Node = {
    value: string;
    neighbors: Node[];
};

function depthLimitedSearch(startNode: Node, depthLimit: number, goal: string): Node | null {
    const stack: { node: Node; depth: number }[] = [];
    const visited = new Set<Node>();
    
    stack.push({ node: startNode, depth: 0 });

    while (stack.length > 0) {
        const { node, depth } = stack.pop()!;
        
        // If we found the goal, return the node
        if (node.value === goal) {
            return node;
        }

        // If we haven't reached the depth limit, explore neighbors
        if (depth < depthLimit) {
            visited.add(node); // Mark the node as visited
            for (const neighbor of node.neighbors) {
                if (!visited.has(neighbor)) {
                    stack.push({ node: neighbor, depth: depth + 1 });
                }
            }
        }
    }

    // If we get here, it means we didn't find the goal within the depth limit
    return null;
}

// Example usage with a graph
const nodeA: Node = { value: 'A', neighbors: [] };
const nodeB: Node = { value: 'B', neighbors: [] };
const nodeC: Node = { value: 'C', neighbors: [] };
const nodeD: Node = { value: 'D', neighbors: [] };

nodeA.neighbors.push(nodeB, nodeC);
nodeB.neighbors.push(nodeD);

const depthLimit = 2;
const foundNode = depthLimitedSearch(nodeA, depthLimit, 'D');

if (foundNode) {
    console.log(`Found node with value: ${foundNode.value}`);
} else {
    console.log('Node not found within depth limit.');
}
