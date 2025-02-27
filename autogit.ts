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
    // For demonstration, let's assume we can move to states "A", "B", and "C" from "start"
    const successors: Node[] = [];
    if (state === "start") {
        successors.push({ state: "A", cost: 1, path: ["start", "A"] });
        successors.push({ state: "B", cost: 2, path: ["start", "B"] });
        successors.push({ state: "C", cost: 3, path: ["start", "C"] });
    }
    // Add more logic for other states as needed
    return successors;
};

const initialState = "start";
const goalState = "B";
const beamWidth = 2;

const result = beamSearch(initialState, goalState, generateSuccessors, beamWidth);
console.log(result); // Output: ["start", "B"] or null if not found
