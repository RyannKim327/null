type Node = {
    sequence: string; // The current sequence
    score: number;    // The score of the sequence
};

function beamSearch(
    initialNode: Node,
    expand: (node: Node) => Node[], // Function to expand a node into its children
    beamWidth: number,
    maxSteps: number
): Node {
    let currentNodes: Node[] = [initialNode];

    for (let step = 0; step < maxSteps; step++) {
        let allCandidates: Node[] = [];

        // Expand all current nodes
        for (const node of currentNodes) {
            const children = expand(node);
            allCandidates.push(...children);
        }

        // Sort candidates by score and keep the top `beamWidth` candidates
        allCandidates.sort((a, b) => b.score - a.score);
        currentNodes = allCandidates.slice(0, beamWidth);
    }

    // Return the best node after all steps
    return currentNodes[0];
}

// Example expand function
function expand(node: Node): Node[] {
    // This is a placeholder for your actual expansion logic
    // For example, you might generate new sequences based on the current sequence
    const newNodes: Node[] = [];
    const possibleExtensions = ['a', 'b', 'c']; // Example extensions

    for (const extension of possibleExtensions) {
        const newSequence = node.sequence + extension;
        const newScore = Math.random(); // Replace with your scoring logic
        newNodes.push({ sequence: newSequence, score: newScore });
    }

    return newNodes;
}

// Example usage
const initialNode: Node = { sequence: '', score: 0 };
const beamWidth = 3;
const maxSteps = 5;

const bestNode = beamSearch(initialNode, expand, beamWidth, maxSteps);
console.log('Best sequence:', bestNode.sequence, 'with score:', bestNode.score);
