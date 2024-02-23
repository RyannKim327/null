class Node {
    constructor(state, value, parent) {
        this.state = state;
        this.value = value;
        this.parent = parent;
    }
}

function beamSearch(initialState, beamWidth, goalTest, successor, heuristic) {
    let open = [new Node(initialState, 0, null)];

    while (open.length > 0) {
        let nextNodes = [];
        
        for (let node of open) {
            if (goalTest(node.state)) {
                return node;
            }

            let children = successor(node.state);
            for (let child of children) {
                let childNode = new Node(child, node.value + heuristic(child), node);
                nextNodes.push(childNode);
            }
        }

        nextNodes.sort((a, b) => a.value - b.value);
        open = nextNodes.slice(0, beamWidth);
    }

    return null; // no solution found
}

// Example usage:
const initialState = 0;
const goalState = 10;

function goalTest(state) {
    return state === goalState;
}

function successor(state) {
    return [state + 1, state + 2];
}

function heuristic(state) {
    return Math.abs(goalState - state);
}

const solution = beamSearch(initialState, 2, goalTest, successor, heuristic);
console.log(solution);
