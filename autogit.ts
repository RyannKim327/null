interface Node {
    state: string; // You can replace this with other types based on your problem
    score: number; // Score used to rank nodes
}

function getChildren(node: Node): Node[] {
    // Implement your logic to generate child nodes based on the current node's state
    // This is just a placeholder
    return [
        { state: node.state + "A", score: node.score + Math.random() },
        { state: node.state + "B", score: node.score + Math.random() },
    ];
}

function beamSearch(initialNode: Node, beamWidth: number, maxIterations: number): Node | null {
    let currentNodes: Node[] = [initialNode];

    for (let i = 0; i < maxIterations; i++) {
        let allChildren: Node[] = [];

        // Generate children for all current nodes
        for (let node of currentNodes) {
            const children = getChildren(node);
            allChildren.push(...children);
        }

        // Sort children by score and select top `beamWidth` nodes
        allChildren.sort((a, b) => b.score - a.score); // Sort in descending order
        currentNodes = allChildren.slice(0, beamWidth); // Select top beamWidth nodes
    }

    // Return the best node found
    return currentNodes.length > 0 ? currentNodes[0] : null;
}

// Example usage:
const initialNode: Node = { state: "Start", score: 0 };
const result = beamSearch(initialNode, 3, 10);

console.log(result);
