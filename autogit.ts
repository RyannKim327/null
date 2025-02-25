type Node = {
    state: string; // The current state
    cost: number;  // The cost to reach this state
    parent?: Node; // The parent node
};

type SearchResult = {
    path: string[];
    cost: number;
};

function beamSearch(initialState: string, goalState: string, generateSuccessors: (state: string) => Node[], beamWidth: number): SearchResult | null {
    let currentLevel: Node[] = [{ state: initialState, cost: 0 }];
    
    while (currentLevel.length > 0) {
        const nextLevel: Node[] = [];

        // Generate successors for each node in the current level
        for (const node of currentLevel) {
            const successors = generateSuccessors(node.state);
            for (const successor of successors) {
                // Check if we reached the goal
                if (successor.state === goalState) {
                    return constructPath(successor);
                }
                nextLevel.push(successor);
            }
        }

        // Sort the next level nodes by cost and keep only the best ones
        nextLevel.sort((a, b) => a.cost - b.cost);
        currentLevel = nextLevel.slice(0, beamWidth);
    }

    return null; // No solution found
}

function constructPath(node: Node): SearchResult {
    const path: string[] = [];
    let currentNode: Node | undefined = node;

    while (currentNode) {
        path.unshift(currentNode.state);
        currentNode = currentNode.parent;
    }

    return { path, cost: node.cost };
}

// Example usage
const generateSuccessors = (state: string): Node[] => {
    // This function should generate successor nodes based on the current state
    // For demonstration, let's assume we can move to states "A", "B", and "C" from any state
    return [
        { state: 'A', cost: Math.random() }, // Random cost for demonstration
        { state: 'B', cost: Math.random() },
        { state: 'C', cost: Math.random() }
    ];
};

const result = beamSearch('START', 'GOAL', generateSuccessors, 2);
if (result) {
    console.log(`Path to goal: ${result.path.join(' -> ')}, Cost: ${result.cost}`);
} else {
    console.log('No solution found.');
}
