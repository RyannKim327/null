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

        // Check for goal state in successors
        for (const successor of successors) {
            if (successor.state === goalState) {
                return successor.path; // Return the path to the goal state
            }
        }

        // Sort successors by cost (or any other heuristic) and select the top `beamWidth` nodes
        successors.sort((a, b) => a.cost - b.cost);
        currentLevel = successors.slice(0, beamWidth);
    }

    return null; // Return null if the goal state is not found
}

// Example usage
const generateSuccessors = (state: string): Node[] => {
    // This function should generate successor nodes based on the current state
    // For demonstration, let's assume each state can lead to two new states
    return [
        { state: state + 'A', cost: Math.random(), path: [] }, // Random cost for demonstration
        { state: state + 'B', cost: Math.random(), path: [] }
    ];
};

const initialState = 'Start';
const goalState = 'StartAB'; // Example goal state
const beamWidth = 2;

const result = beamSearch(initialState, goalState, generateSuccessors, beamWidth);
console.log(result);
