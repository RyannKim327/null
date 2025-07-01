// Candidate class to represent a solution
class Candidate<T> {
    public state: T; // Current state (e.g., a word sequence)
    public score: number; // Score of the candidate

    constructor(state: T, score: number) {
        this.state = state;
        this.score = score;
    }
}

// Beam search function
function beamSearch<T>(
    initialState: T,
    beamWidth: number,
    maxDepth: number,
    successorFn: (state: T) => Array<{ state: T; score: number }>,
    isGoalFn: (state: T) => boolean
): T | null {
    // Initialize the beam with the initial state
    let beam: Candidate<T>[] = [new Candidate(initialState, 0)];

    for (let depth = 0; depth < maxDepth; depth++) {
        const allSuccessors: Candidate<T>[] = [];

        // Generate successors for each candidate in the beam
        for (const candidate of beam) {
            const successors = successorFn(candidate.state);
            for (const { state, score } of successors) {
                allSuccessors.push(new Candidate(state, candidate.score + score));
            }
        }

        // Sort successors by score in descending order
        allSuccessors.sort((a, b) => b.score - a.score);

        // Retain only the top `beamWidth` candidates
        beam = allSuccessors.slice(0, beamWidth);

        // Check if any candidate satisfies the goal condition
        for (const candidate of beam) {
            if (isGoalFn(candidate.state)) {
                return candidate.state; // Return the goal state
            }
        }
    }

    // If no goal is found, return null
    return null;
}

// Example Usage: Text Generation
type WordSequence = string[];

// Successor function: Generate possible next words
function generateSuccessors(sequence: WordSequence): Array<{ state: WordSequence; score: number }> {
    const vocabulary = ["cat", "dog", "house", "tree"];
    const successors: Array<{ state: WordSequence; score: number }> = [];
    for (const word of vocabulary) {
        const newState = [...sequence, word];
        const score = Math.random(); // Random score for demonstration
        successors.push({ state: newState, score });
    }
    return successors;
}

// Goal function: Check if the sequence ends with "house"
function isGoal(sequence: WordSequence): boolean {
    return sequence[sequence.length - 1] === "house";
}

// Run beam search
const initialState: WordSequence = [];
const beamWidth = 3;
const maxDepth = 5;

const result = beamSearch(
    initialState,
    beamWidth,
    maxDepth,
    generateSuccessors,
    isGoal
);

console.log("Result:", result);
