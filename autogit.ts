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

        // Check if any successor is the goal state
        for (const successor of successors) {
            if (successor.state === goalState) {
                return successor.path; // Return the path to the goal state
            }
        }

        // Sort successors by cost and keep only the best `beamWidth` nodes
        successors.sort((a, b) => a.cost - b.cost);
        currentLevel = successors.slice(0, beamWidth);
    }

    return null; // Return null if the goal state is not found
}

// Example usage
const generateSuccessors = (state: string): Node[] => {
    // This is a placeholder for generating successors.
    // Replace this with your actual logic to generate child nodes.
    const successors: Node[] = [];
    const nextStates = ['A', 'B', 'C']; // Example next states
    for (const nextState of nextStates) {
        successors.push({ state: nextState, cost: Math.random(), path: [state, nextState] });
    }
    return successors;
};

const initialState = 'Start';
const goalState = 'Goal';
const beamWidth = 2;

const result = beamSearch(initialState, goalState, generateSuccessors, beamWidth);
console.log(result);
