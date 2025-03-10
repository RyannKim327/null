type Node = {
    state: string; // The current state (e.g., a string in NLP tasks)
    score: number; // The score of the current state
    path: string[]; // The path taken to reach this state
};

function beamSearch(
    initialState: string,
    expand: (state: string) => Node[], // Function to expand a node
    beamWidth: number,
    maxSteps: number
): Node[] {
    let beams: Node[] = [{ state: initialState, score: 0, path: [initialState] }];

    for (let step = 0; step < maxSteps; step++) {
        let candidates: Node[] = [];

        // Expand each node in the current beam
        for (const beam of beams) {
            const expansions = expand(beam.state);
            candidates.push(...expansions);
        }

        // Sort candidates by score and keep the top `beamWidth` candidates
        candidates.sort((a, b) => b.score - a.score);
        beams = candidates.slice(0, beamWidth);
    }

    return beams; // Return the best candidates after maxSteps
}

// Example expand function for a simple case
function exampleExpand(state: string): Node[] {
    // This is a placeholder for your actual expansion logic
    // Here we just create dummy nodes for demonstration
    return [
        { state: state + 'A', score: Math.random(), path: [state + 'A'] },
        { state: state + 'B', score: Math.random(), path: [state + 'B'] },
        { state: state + 'C', score: Math.random(), path: [state + 'C'] },
    ];
}

// Example usage
const initialState = 'Start';
const beamWidth = 2;
const maxSteps = 3;

const result = beamSearch(initialState, exampleExpand, beamWidth, maxSteps);
console.log(result);
