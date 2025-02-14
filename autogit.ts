type State = {
    id: string;
    score: number;
}

type BeamSearchOptions = {
    beamWidth: number;
    maxSteps: number;
}

function beamSearch(
    initialState: State,
    generateNextStates: (state: State) => State[],
    scoreState: (state: State) => number,
    options: BeamSearchOptions
): State[] {
    let beam: State[] = [initialState];

    for (let step = 0; step < options.maxSteps; step++) {
        const allNextStates: State[] = [];

        // Generate all possible next states
        for (const state of beam) {
            const nextStates = generateNextStates(state);
            allNextStates.push(...nextStates);
        }

        // Score the next states
        allNextStates.forEach(state => {
            state.score = scoreState(state);
        });

        // Sort states by score and select the top `beamWidth` states
        beam = allNextStates
            .sort((a, b) => b.score - a.score) // Sort in descending order of score
            .slice(0, options.beamWidth); // Keep only top `beamWidth` states
    }

    return beam; // return the final states in the beam
}
function generateNextStates(state: State): State[] {
    // Generate next states based on your specific logic
    return [
        { id: state.id + 'A', score: 0 },
        { id: state.id + 'B', score: 0 },
    ];
}

function scoreState(state: State): number {
    // Calculate score based on your specific criteria
    return Math.random(); // Example: random score for demonstration
}
const initialState: State = { id: "Start", score: 0 };
const beamWidth = 2;
const maxSteps = 5;

const finalStates = beamSearch(initialState, generateNextStates, scoreState, { beamWidth, maxSteps });
console.log(finalStates);
