class Node {
    constructor(value, cost, parent) {
        this.value = value;
        this.cost = cost;
        this.parent = parent;
    }
}

function beamSearch(initialState, beamWidth, goalTest, successor, heuristic) {
    let open = [new Node(initialState, 0, null)]; // Initial list of nodes
    while (open.length > 0) {
        let nextOpen = [];
        for (let node of open) {
            // Check for goal state
            if (goalTest(node.value)) {
                let path = [];
                while (node) {
                    path.unshift(node.value);
                    node = node.parent;
                }
                return path;
            }

            // Expand current node
            let children = successor(node);
            for (let child of children) {
                let totalCost = node.cost + heuristic(child);
                nextOpen.push(new Node(child, totalCost, node));
            }
        }

        // Sort by cost and select top nodes based on beam width
        nextOpen.sort((a, b) => a.cost - b.cost);
        open = nextOpen.slice(0, beamWidth);
    }

    return null; // If no path found
}

// Example usage
let initialState = 1;
let goalState = 10;

function goalTest(state) {
    return state === goalState;
}

function successor(node) {
    let children = [node.value + 1, node.value + 2]; // Example successors
    return children;
}

function heuristic(state) {
    return Math.abs(goalState - state); // Example heuristic
}

let result = beamSearch(initialState, 3, goalTest, successor, heuristic);
console.log(result);
