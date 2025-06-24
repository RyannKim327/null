class Node<T> {
    state: T; // The state represented by this node
    score: number; // The cumulative score (e.g., log probability)
    parent?: Node<T>; // Reference to the parent node (for backtracking)

    constructor(state: T, score: number, parent?: Node<T>) {
        this.state = state;
        this.score = score;
        this.parent = parent;
    }
}
function beamSearch<T>(
    startState: T,
    expand: (state: T) => { state: T; score: number }[],
    beamWidth: number,
    maxSteps: number
): Node<T>[] {
    // Initialize the beam with the starting state
    let beam: Node<T>[] = [new Node(startState, 0)];

    for (let step = 0; step < maxSteps; step++) {
        let candidates: Node<T>[] = [];

        // Expand each node in the current beam
        for (const node of beam) {
            const successors = expand(node.state);

            // Create new nodes for each successor
            for (const { state, score } of successors) {
                const newNode = new Node(state, node.score + score, node);
                candidates.push(newNode);
            }
        }

        // Sort candidates by score and keep the top `beamWidth`
        candidates.sort((a, b) => b.score - a.score); // Descending order
        beam = candidates.slice(0, beamWidth);

        // Optional: Check for early termination (e.g., end-of-sequence)
        if (beam.every(node => isTerminalState(node.state))) {
            break;
        }
    }

    return beam;
}

// Example terminal state check (customize as needed)
function isTerminalState<T>(state: T): boolean {
    // Replace with your own logic to determine if a state is terminal
    return false;
}
// Example: Word generation with beam search
const vocabulary = ["hello", "world", "end"];
const transitionProbabilities: { [key: string]: { word: string; prob: number }[] } = {
    "": [{ word: "hello", prob: 0.7 }, { word: "world", prob: 0.3 }],
    "hello": [{ word: "world", prob: 0.8 }, { word: "end", prob: 0.2 }],
    "world": [{ word: "end", prob: 1.0 }],
};

function expand(state: string): { state: string; score: number }[] {
    return transitionProbabilities[state].map(({ word, prob }) => ({
        state: word,
        score: Math.log(prob), // Use log probabilities for numerical stability
    }));
}

function isTerminalState(state: string): boolean {
    return state === "end";
}

// Run beam search
const result = beamSearch("", expand, 2, 5);

// Print the best sequence(s)
result.forEach(node => {
    const sequence: string[] = [];
    let currentNode: Node<string> | undefined = node;

    while (currentNode) {
        sequence.unshift(currentNode.state);
        currentNode = currentNode.parent;
    }

    console.log(`Sequence: ${sequence.join(" -> ")}, Score: ${node.score}`);
});
Sequence: hello -> world -> end, Score: -1.6094379124341003
Sequence: world -> end, Score: -1.2039728043259361
