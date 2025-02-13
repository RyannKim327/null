type Node<T> = {
    state: T;
    cost: number; // Cost to reach this node
    parent?: Node<T>; // Optional parent node for path reconstruction
};

function beamSearch<T>(
    initialState: T,
    isGoal: (state: T) => boolean,
    getSuccessors: (state: T) => Node<T>[],
    beamWidth: number
): Node<T> | null {
    // Initialize the beam with the initial state
    let beam: Node<T>[] = [{ state: initialState, cost: 0 }];

    while (beam.length > 0) {
        // Expand all nodes in the current beam
        const newBeam: Node<T>[] = [];

        for (const node of beam) {
            if (isGoal(node.state)) {
                return node; // Goal found
            }

            // Get successors of the current node
            const successors = getSuccessors(node.state);
            newBeam.push(...successors);
        }

        // Sort the new beam by cost and keep only the best candidates
        newBeam.sort((a, b) => a.cost - b.cost);
        beam = newBeam.slice(0, beamWidth); // Keep only the top `beamWidth` nodes
    }

    return null; // No solution found
}

// Example usage:

// Define the state type
type State = string;

// Define the goal test
const isGoal = (state: State) => state === "goal";

// Define the successor function
const getSuccessors = (state: State): Node<State>[] => {
    // Example successors (this should be replaced with actual logic)
    const successors: Node<State>[] = [];
    if (state === "start") {
        successors.push({ state: "state1", cost: 1 });
        successors.push({ state: "state2", cost: 2 });
    } else if (state === "state1") {
        successors.push({ state: "goal", cost: 3 });
    }
    return successors;
};

// Run the beam search
const initialState: State = "start";
const beamWidth = 2;
const result = beamSearch(initialState, isGoal, getSuccessors, beamWidth);

if (result) {
    console.log("Goal found:", result.state);
} else {
    console.log("No solution found.");
}
