// Bi-directional Search Algorithm
function biDirectionalSearch(start, goal) {
    let startQueue = [start];
    let goalQueue = [goal];
    let startVisited = { [start]: true };
    let goalVisited = { [goal]: true };

    while (startQueue.length > 0 && goalQueue.length > 0) {
        let startNode = startQueue.shift();
        let goalNode = goalQueue.shift();

        if (startVisited[goalNode]) {
            return 'Path found';
        }

        if (goalVisited[startNode]) {
            return 'Path found';
        }

        // Expand startNode
        for (let neighbor of getNeighbors(startNode)) {
            if (!startVisited[neighbor]) {
                startQueue.push(neighbor);
                startVisited[neighbor] = true;
            }
        }

        // Expand goalNode
        for (let neighbor of getNeighbors(goalNode)) {
            if (!goalVisited[neighbor]) {
                goalQueue.push(neighbor);
                goalVisited[neighbor] = true;
            }
        }
    }

    return 'Path not found';
}

// Function to get neighbors of a node
function getNeighbors(node) {
    // Define this function based on your problem
    // It should return an array of neighbors of the given node
    // E.g., return [node1, node2, ...];
}

// Example usage
let startNode = 'A';
let goalNode = 'Z';
console.log(biDirectionalSearch(startNode, goalNode));
