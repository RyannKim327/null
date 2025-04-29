type Node = {
    state: any; // replace 'any' with the state type you're using (e.g. string, number, object, etc.)
    score: number; // the score used for sorting
};

// Example scoring function
function scoreFunction(state: any): number {
    // Implement your scoring function here
    return Math.random(); // Placeholder for demo purposes
}

// Beam Search Implementation
function beamSearch(startState: any, beamWidth: number, maxIterations: number): any {
    let beam: Node[] = [{ state: startState, score: scoreFunction(startState) }];

    for (let iteration = 0; iteration < maxIterations; iteration++) {
        let nextBeam: Node[] = [];

        // Expand each node in the current beam
        for (const node of beam) {
            const newStates = generateSuccessors(node.state); // user-defined method to generate successors
            for (const newState of newStates) {
                const newNode: Node = { state: newState, score: scoreFunction(newState) };
                nextBeam.push(newNode);
            }
        }

        // Sort through the next nodes and select the best ones to form the next beam
        nextBeam.sort((a, b) => b.score - a.score); // Sort in descending order
        beam = nextBeam.slice(0, beamWidth); // Keep only the best 'beamWidth' nodes
    }

    // Return the best state from the final beam
    return beam[0].state; // or adjust according to your needs
}

// Example successor generation (user-defined)
function generateSuccessors(state: any): any[] {
    // Replace this with your actual logic to generate valid successors to the current state
    return [state + 1, state - 1]; // Dummy example
}

// Example usage
const bestState = beamSearch(0, 3, 5);
console.log('Best state found:', bestState);
