interface Node {
    state: string; // Current state representation (e.g., sentence)
    score: number; // Score for the current state
}

function beamSearch(initialState: string, beamWidth: number, maxSteps: number, expand: (state: string) => Node[]): Node[] {
    let currentBeam: Node[] = [{ state: initialState, score: 0 }];
    
    for (let step = 0; step < maxSteps; step++) {
        let newBeam: Node[] = [];

        // Expand each node in the current beam
        for (const node of currentBeam) {
            const expandedNodes = expand(node.state); // Generate new nodes by expanding the current state
            newBeam.push(...expandedNodes); // Add new nodes to the new beam
        }

        // Sort the new beam by score and keep the top 'beamWidth' nodes
        newBeam.sort((a, b) => b.score - a.score); // Sort high to low based on score
        currentBeam = newBeam.slice(0, beamWidth); // Keep only the top 'beamWidth' nodes
    }

    return currentBeam; // Final states in the beam
}

// Example expansion function
function exampleExpand(state: string): Node[] {
    // Here you would define how to expand states with the actual logic
    const possibilities = [
        { state: state + " A", score: Math.random() }, // Random score for example
        { state: state + " B", score: Math.random() }
    ];
    return possibilities;
}

// Use the beamSearch function
const initialState = "Start";
const beamWidth = 2;
const maxSteps = 3;
const result = beamSearch(initialState, beamWidth, maxSteps, exampleExpand);

console.log(result);
