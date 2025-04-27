interface State {
    sequence: string[];
    score: number;
}

function beamSearch(
    initialState: State,
    expandFunction: (state: State) => State[],
    beamWidth: number,
    maxSteps: number
): State[] {
    let currentBeams: State[] = [initialState];

    for (let step = 0; step < maxSteps; step++) {
        const allSuccessors: State[] = [];

        // Expand each beam
        for (const state of currentBeams) {
            const successors = expandFunction(state);
            allSuccessors.push(...successors);
        }

        // Keep only the top `beamWidth` based on score
        currentBeams = allSuccessors
            .sort((a, b) => b.score - a.score) // Descending order
            .slice(0, beamWidth);
    }

    return currentBeams;
}
function expandSequence(state: State): State[] {
    const possibleNextWords = ["hello", "world", "foo", "bar"]; // dummy
    return possibleNextWords.map(word => ({
        sequence: [...state.sequence, word],
        score: state.score + Math.random() // dummy scoring
    }));
}
const initialState: State = { sequence: [], score: 0 };
const results = beamSearch(initialState, expandSequence, 3, 5);

console.log(results);
