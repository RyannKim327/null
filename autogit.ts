interface State {
    value: string;
    score: number;
}

function beamSearch(start: State, expand: (state: State) => State[], beamWidth: number): State[] {
    let currentStates: State[] = [start];

    while (currentStates.length > 0) {
        let nextStates: State[] = [];

        // Expand each current state and generate next states
        for (const state of currentStates) {
            const expandedStates = expand(state);
            nextStates.push(...expandedStates);
        }

        // Sort the next states by score and keep only the best ones
        nextStates.sort((a, b) => b.score - a.score); // Sort in descending order
        currentStates = nextStates.slice(0, beamWidth); // Keep top `beamWidth` states
    }

    return currentStates; // Return the best states found
}

// Function to expand the current state
function expandState(state: State): State[] {
    // Example logic to expand current state
    return [
        { value: state.value + 'A', score: state.score + Math.random() },
        { value: state.value + 'B', score: state.score + Math.random() },
        { value: state.value + 'C', score: state.score + Math.random() },
    ];
}

// Example usage
const initialState: State = { value: 'Start', score: 0 };
const bestStates = beamSearch(initialState, expandState, 3);

console.log("Best States:", bestStates);
