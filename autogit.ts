type State = any; // Define your state type
type ScoreFunction = (state: State) => number;
type NextStatesFunction = (state: State) => State[];

function beamSearch(
    initialState: State,
    beamWidth: number,
    nextStatesFn: NextStatesFunction,
    scoreFn: ScoreFunction,
    maxIterations: number
): State | null {
    let currentStates: State[] = [initialState];

    for (let iteration = 0; iteration < maxIterations; iteration++) {
        const nextStates: State[] = [];

        // Generate next states for each current state
        for (const state of currentStates) {
            const generatedStates = nextStatesFn(state);
            nextStates.push(...generatedStates);
        }

        // Score the next states
        const scoredStates = nextStates.map(state => ({
            state,
            score: scoreFn(state),
        }));

        // Sort by score and keep the best `beamWidth` states
        scoredStates.sort((a, b) => b.score - a.score);
        currentStates = scoredStates.slice(0, beamWidth).map(item => item.state);
    }

    // Return the best state found or null if no states were generated
    if (currentStates.length > 0) {
        return currentStates[0]; // Return the best state
    }
    return null;
}

// Example usage
const initialState: State = {}; // Define your initial state
const beamWidth = 3;
const maxIterations = 10;

const nextStatesFn: NextStatesFunction = (state) => {
    // Implement your logic to generate next states
    return []; // Return an array of next states
};

const scoreFn: ScoreFunction = (state) => {
    // Implement your scoring logic
    return 0; // Return a score for the state
};

const bestState = beamSearch(initialState, beamWidth, nextStatesFn, scoreFn, maxIterations);
console.log(bestState);
