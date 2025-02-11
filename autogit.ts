type Beam<T> = {
    state: T;
    score: number; // Used to rank the beams
};

function beamSearch<T>(
    initialState: T, 
    generateCandidates: (state: T) => T[], 
    score: (state: T) => number, 
    beamWidth: number,
    maxIterations: number
): T | null {
    let beams: Beam<T>[] = [{ state: initialState, score: score(initialState) }];

    for (let iteration = 0; iteration < maxIterations; iteration++) {
        let candidates: Beam<T>[] = [];

        for (const beam of beams) {
            const newStates = generateCandidates(beam.state);
            for (const newState of newStates) {
                candidates.push({ state: newState, score: score(newState) });
            }
        }

        // Sort candidates by score
        candidates.sort((a, b) => b.score - a.score); // Highest score first

        // Select top N candidates for the next beam
        beams = candidates.slice(0, beamWidth);

        // Check if one of the beams is a goal state
        for (const beam of beams) {
            if (isGoalState(beam.state)) {
                return beam.state;
            }
        }
    }

    return null; // No goal found within max iterations
}

// Example helper functions
function generateCandidates(state: string): string[] {
    // Example candidate generation logic (modify for your use case)
    return [state + 'a', state + 'b', state + 'c'];
}

function score(state: string): number {
    // Example scoring logic (modify for your use case)
    return state.length; // Just an example
}

function isGoalState(state: string): boolean {
    // Define a goal check (modify for your use case)
    return state === 'goal'; // Example goal state
}

// Example usage
const result = beamSearch('', generateCandidates, score, 3, 10);
console.log(result); // Outputs 'goal' if found within 10 iterations
