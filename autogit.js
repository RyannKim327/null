class Node {
    constructor(state, parent, cost) {
        this.state = state;
        this.parent = parent;
        this.cost = cost;
    }
}

function beamSearch(initialState, beamWidth, goalTest, actions, takeAction, heuristic) {
    let frontier = [new Node(initialState, null, 0)];
    let explored = new Set();

    while (frontier.length > 0) {
        let nextFrontier = [];

        for (let node of frontier) {
            if (goalTest(node.state)) {
                // Goal state found, backtrack to get the path
                let path = [];
                while (node.parent != null) {
                    path.unshift(node.state);
                    node = node.parent;
                }
                path.unshift(initialState);
                return path;
            }

            for (let action of actions(node.state)) {
                let childState = takeAction(node.state, action);
                let childNode = new Node(childState, node, node.cost + 1);
                nextFrontier.push(childNode);
            }
        }

        nextFrontier.sort((a, b) => a.cost + heuristic(a.state) - (b.cost + heuristic(b.state)));
        frontier = nextFrontier.slice(0, beamWidth);

        // Add explored states to prevent revisiting
        explored.add(frontier.map(node => node.state).toString());
    }

    return null; // Goal state not found
}

// Example usage
let initialState = 1;
let goalState = 10;
let beamWidth = 2;

function goalTest(state) {
    return state === goalState;
}

function actions(state) {
    return state + 1 <= goalState ? ['+1'] : [];
}

function takeAction(state, action) {
    return state + 1;
}

function heuristic(state) {
    return Math.abs(goalState - state);
}

let path = beamSearch(initialState, beamWidth, goalTest, actions, takeAction, heuristic);
console.log(path);
