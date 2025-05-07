class BeamSearchNode<T> {
    state: T;          // The current state (e.g., current sequence)
    cost: number;      // The cost associated with this state
    parent?: BeamSearchNode<T>; // Optional parent node for path reconstruction

    constructor(state: T, cost: number, parent?: BeamSearchNode<T>) {
        this.state = state;
        this.cost = cost;
        this.parent = parent;
    }

    // Method to generate children nodes
    generateChildren(generateNext: (state: T) => T[]): BeamSearchNode<T>[] {
        const nextStates = generateNext(this.state);
        return nextStates.map(state => new BeamSearchNode(state, this.calculateCost(state), this));
    }

    // Your logic to calculate the cost for the next state
    private calculateCost(state: T): number {
        // Implement the actual cost function logic
        return Math.random();  // Placeholder example
    }
}

class BeamSearch<T> {
    private beamWidth: number;
    
    constructor(beamWidth: number) {
        this.beamWidth = beamWidth;
    }

    search(initialState: T, generateNext: (state: T) => T[]): BeamSearchNode<T> | null {
        let candidates = [new BeamSearchNode(initialState, 0)];

        // Continue until we reach a defined number of iterations or other stopping criteria
        for (let i = 0; i < 10; i++) {
            const newCandidates: BeamSearchNode<T>[] = [];

            // Expand each candidate
            for (const candidate of candidates) {
                const children = candidate.generateChildren(generateNext);
                newCandidates.push(...children);
            }

            // Sort by cost and keep the best candidates
            newCandidates.sort((a, b) => a.cost - b.cost);
            candidates = newCandidates.slice(0, this.beamWidth);
        }

        // Get the best node from the final candidates
        candidates.sort((a, b) => a.cost - b.cost);
        return candidates.length > 0 ? candidates[0] : null; // Return the best candidate
    }
}

// Example usage:
const generateNext = (state: number): number[] => {
    // For demonstration purposes, simply increase the state
    return [state + 1, state + 2, state + 3];
};

const beamSearch = new BeamSearch<number>(3);
const resultNode = beamSearch.search(0, generateNext);

if (resultNode) {
    console.log(`Best State: ${resultNode.state}, Cost: ${resultNode.cost}`);
}
