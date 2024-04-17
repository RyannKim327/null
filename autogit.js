class Node {
    constructor(state, cost, heuristic, parent) {
        this.state = state;
        this.cost = cost;
        this.heuristic = heuristic;
        this.parent = parent;
        this.totalCost = cost + heuristic;
    }
}

function aStarSearch(startNode, goalNode, heuristicFunction) {
    let openList = [new Node(startNode, 0, heuristicFunction(startNode), null)];
    let closedList = new Set();

    while (openList.length > 0) {
        openList.sort((a, b) => a.totalCost - b.totalCost);
        let currentNode = openList.shift();

        if (currentNode.state === goalNode) {
            // Reconstruct path
            let path = [];
            while (currentNode !== null) {
                path.unshift(currentNode.state);
                currentNode = currentNode.parent;
            }
            return path;
        }

        closedList.add(currentNode.state);

        let neighbors = getNeighbors(currentNode.state);
        neighbors.forEach(neighbor => {
            if (!closedList.has(neighbor)) {
                let cost = currentNode.cost + 1; // Assuming all edge costs are 1
                let heuristic = heuristicFunction(neighbor);
                let newNode = new Node(neighbor, cost, heuristic, currentNode);

                let existingNode = openList.find(node => node.state === neighbor);
                if (!existingNode || newNode.totalCost < existingNode.totalCost) {
                    openList = openList.filter(node => node.state !== neighbor);
                    openList.push(newNode);
                }
            }
        });
    }

    return null; // No path found
}

function getNeighbors(state) {
    // Implement your function to get neighbors based on the problem
    // For example, return all adjacent nodes in a grid
}

function heuristicFunction(node) {
    // Implement your heuristic function
    // Return the estimated cost from the given node to the goal node
}

// Example Usage
let startNode = 'A';
let goalNode = 'G';

let path = aStarSearch(startNode, goalNode, heuristicFunction);
console.log(path);
