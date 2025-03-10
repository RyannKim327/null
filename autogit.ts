type Node = {
    state: string; // The current state
    cost: number;  // The cost to reach this state
    path: string[]; // The path taken to reach this state
};

function beamSearch(initialState: string, goalState: string, generateSuccessors: (state: string) => Node[], beamWidth: number): string[] | null {
    let currentLevel: Node[] = [{ state: initialState, cost: 0, path: [initialState] }];
    
    while (currentLevel.length > 0) {
        // Generate successors for all nodes in the current level
        let nextLevel: Node[] = [];
        for (const node of currentLevel) {
            const successors = generateSuccessors(node.state);
            nextLevel.push(...successors);
        }

        // Check if we have reached the goal state
        const goalNodes = nextLevel.filter(node => node.state === goalState);
        if (goalNodes.length > 0) {
            // Return the path of the first goal node found
            return goalNodes[0].path;
        }

        // Sort the next level by cost and keep only the best `beamWidth` nodes
        nextLevel.sort((a, b) => a.cost - b.cost);
        currentLevel = nextLevel.slice(0, beamWidth);
    }

    // If no solution is found
    return null;
}

// Example usage
const generateSuccessors = (state: string): Node[] => {
    // This function should generate successor nodes based on the current state
    // For demonstration, let's assume we can move to states "A", "B", and "C" from any state
    const successors: Node[] = [];
    const possibleStates = ['A', 'B', 'C'];
    for (const s of possibleStates) {
        if (s !== state) { // Avoid going back to the same state
            successors.push({ state: s, cost: Math.random(), path: [state, s] }); // Random cost for demonstration
        }
    }
    return successors;
};

const initialState = 'Start';
const goalState = 'A'; // Example goal state
const beamWidth = 2; // Example beam width

const result = beamSearch(initialState, goalState, generateSuccessors, beamWidth);
console.log(result);
