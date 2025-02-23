type Node<T> = {
    state: T;
    cost: number; // Cost to reach this node
    parent?: Node<T>; // Optional parent node for path reconstruction
};

function beamSearch<T>(
    initialState: T,
    generateSuccessors: (state: T) => Node<T>[],
    isGoal: (state: T) => boolean,
    beamWidth: number
): Node<T> | null {
    let currentLevel: Node<T>[] = [{ state: initialState, cost: 0 }];

    while (currentLevel.length > 0) {
        // Check for goal states
        for (const node of currentLevel) {
            if (isGoal(node.state)) {
                return node; // Return the goal node
            }
        }

        // Generate successors for all nodes in the current level
        let successors: Node<T>[] = [];
        for (const node of currentLevel) {
            successors.push(...generateSuccessors(node.state));
        }

        // Sort successors by cost and keep only the best ones
        successors.sort((a, b) => a.cost - b.cost);
        currentLevel = successors.slice(0, beamWidth);
    }

    return null; // No solution found
}

// Example usage:

// Define a simple state and successor generation
type State = string;

const generateSuccessors = (state: State): Node<State>[] => {
    // Example: Generate successors by appending characters
    return [
        { state: state + 'A', cost: state.length + 1 },
        { state: state + 'B', cost: state.length + 1 },
        { state: state + 'C', cost: state.length + 1 },
    ];
};

const isGoal = (state: State): boolean => {
    return state === 'Goal'; // Define your goal state
};

// Run the beam search
const initialState: State = '';
const beamWidth = 2;
const result = beamSearch(initialState, generateSuccessors, isGoal, beamWidth);

if (result) {
    console.log('Goal found:', result.state);
} else {
    console.log('No solution found.');
}
