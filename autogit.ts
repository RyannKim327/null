class Node {
    constructor(public state: string, public score: number) {}
}

function beamSearch(initialState: string, beamWidth: number, maxDepth: number, scoreFn: (state: string) => number): Node[] {
    let beam: Node[] = [new Node(initialState, scoreFn(initialState))];

    for (let depth = 0; depth < maxDepth; depth++) {
        let newBeam: Node[] = [];

        for (let node of beam) {
            // Generate children nodes based on the current node's state
            // Here just for demonstration, replace it with your actual generation logic
            const childrenStates = generateChildren(node.state);
            
            for (let childState of childrenStates) {
                const childScore = scoreFn(childState);
                newBeam.push(new Node(childState, childScore));
            }
        }

        // Sort the new beam by score and take the top `beamWidth` nodes
        newBeam.sort((a, b) => b.score - a.score);
        beam = newBeam.slice(0, beamWidth);
    }

    return beam;
}

// Example function to generate children nodes. Replace this with real logic.
function generateChildren(state: string): string[] {
    return [state + '0', state + '1', state + '2'];
}

// Example scoring function.
function scoreFunction(state: string): number {
    return state.length; // Example scoring: longer states are scored higher
}

// Example usage
const result = beamSearch('start', 3, 5, scoreFunction);
console.log(result);
