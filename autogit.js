class BeamSearch {
    constructor(k) {
        this.k = k; // Beam width
        this.beam = [];
    }

    search(startState, goalTest, successors, heuristicFn) {
        this.beam = [{ state: startState, cost: 0 }];

        while (true) {
            const newBeam = [];

            for (const beamItem of this.beam) {
                const { state, cost } = beamItem;

                if (goalTest(state)) {
                    return state; // Found goal state
                }

                const children = successors(state);
                for (const { nextState, stepCost } of children) {
                    const newCost = cost + stepCost;
                    const heuristic = heuristicFn(nextState);
                    const totalCost = newCost + heuristic;

                    newBeam.push({ state: nextState, cost: newCost, totalCost });
                }
            }

            newBeam.sort((a, b) => a.totalCost - b.totalCost);
            this.beam = newBeam.slice(0, this.k);
        }
    }
}

// Example usage
const beamSearch = new BeamSearch(5); // Beam width = 5

const startState = [0, 0]; // Start state
const goalState = [4, 4]; // Goal state

function goalTest(state) {
    return state[0] === goalState[0] && state[1] === goalState[1];
}

function successors(state) {
    const x = state[0];
    const y = state[1];
    return [
        { nextState: [x + 1, y], stepCost: 1 },
        { nextState: [x, y + 1], stepCost: 1 }
    ];
}

function heuristicFn(state) {
    const dx = Math.abs(state[0] - goalState[0]);
    const dy = Math.abs(state[1] - goalState[1]);
    return dx + dy; // Manhattan distance heuristic
}

const result = beamSearch.search(startState, goalTest, successors, heuristicFn);
console.log("Optimal path:", result);
