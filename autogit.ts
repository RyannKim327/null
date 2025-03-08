type Node = {
    state: string; // The current state or sequence
    score: number; // The score of the current state
};

function beamSearch(initialState: string, beamWidth: number, maxSteps: number): string {
    let beams: Node[] = [{ state: initialState, score: 0 }];

    for (let step = 0; step < maxSteps; step++) {
        const newBeams: Node[] = [];

        // Expand each beam
        for (const beam of beams) {
            const expandedNodes = expandNode(beam);
            newBeams.push(...expandedNodes);
        }

        // Sort new beams by score and keep the top `beamWidth` beams
        newBeams.sort((a, b) => b.score - a.score);
        beams = newBeams.slice(0, beamWidth);
    }

    // Return the best beam's state
    return beams[0].state;
}

function expandNode(node: Node): Node[] {
    // This function should generate new nodes based on the current node's state.
    // For demonstration, let's assume we generate two new states with random scores.
    const newStates: Node[] = [
        { state: node.state + "A", score: node.score + Math.random() },
        { state: node.state + "B", score: node.score + Math.random() },
    ];
    return newStates;
}

// Example usage
const initialState = "Start";
const beamWidth = 3;
const maxSteps = 5;

const result = beamSearch(initialState, beamWidth, maxSteps);
console.log("Best sequence found:", result);
