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

        // Filter out nodes that reach the goal state
        const goalNodes = nextLevel.filter(node => node.state === goalState);
        if (goalNodes.length > 0) {
            // Return the path of the first goal node found
            return goalNodes[0].path;
        }

        // Sort the next level by cost (or any other heuristic) and keep only the best nodes
        nextLevel.sort((a, b) => a.cost - b.cost);
        currentLevel = nextLevel.slice(0, beamWidth);
    }

    // If no solution is found
    return null;
}

// Example of a successor function
function generateSuccessors(state: string): Node[] {
    // This is a placeholder for generating successors
    // In a real scenario, you would generate valid states based on the current state
    const successors: Node[] = [];
    const possibleStates = ['A', 'B', 'C', 'D']; // Example states

    for (const s of possibleStates) {
        if (s !== state) { // Avoid generating the same state
            successors.push({ state: s, cost: Math.random(), path: [state, s] }); // Random cost for demonstration
        }
    }

    return successors;
}

// Example usage
const initialState = 'A';
const goalState = 'C';
const beamWidth = 2;

const result = beamSearch(initialState, goalState, generateSuccessors, beamWidth);
console.log(result);
