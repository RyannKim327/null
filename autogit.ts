type Node = {
    state: string; // The current state
    cost: number;  // The cost to reach this state
    path: string[]; // The path taken to reach this state
};

function beamSearch(initialState: string, goalState: string, generateSuccessors: (state: string) => Node[], beamWidth: number): string[] | null {
    let currentLevel: Node[] = [{ state: initialState, cost: 0, path: [initialState] }];
    
    while (currentLevel.length > 0) {
        // Generate successors for all nodes in the current level
        let successors: Node[] = [];
        for (const node of currentLevel) {
            const newSuccessors = generateSuccessors(node.state);
            successors.push(...newSuccessors);
        }

        // Check for goal states
        for (const successor of successors) {
            if (successor.state === goalState) {
                return successor.path; // Return the path to the goal state
            }
        }

        // Sort successors by cost and keep only the best ones (beam width)
        successors.sort((a, b) => a.cost - b.cost);
        currentLevel = successors.slice(0, beamWidth);
    }

    return null; // Return null if no solution is found
}

// Example of a successor function
function generateSuccessors(state: string): Node[] {
    // This is a placeholder for generating successors.
    // Replace this with your actual logic to generate new states.
    const successors: Node[] = [];
    const possibleStates = ['A', 'B', 'C', 'D']; // Example states

    for (const s of possibleStates) {
        if (s !== state) {
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
