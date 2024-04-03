function biDirectionalSearch(graph, startNode, goalNode) {
    let startQueue = [startNode];
    let goalQueue = [goalNode];
    let startVisited = new Set();
    let goalVisited = new Set();

    startVisited.add(startNode);
    goalVisited.add(goalNode);

    while (startQueue.length > 0 && goalQueue.length > 0) {
        let startCurrentNode = startQueue.shift();
        let goalCurrentNode = goalQueue.shift();

        if (startVisited.has(goalCurrentNode) || goalVisited.has(startCurrentNode)) {
            console.log("Path found!");
            return true;
        }

        let startNeighbors = graph[startCurrentNode] || [];
        let goalNeighbors = graph[goalCurrentNode] || [];

        for (let neighbor of startNeighbors) {
            if (!startVisited.has(neighbor)) {
                startQueue.push(neighbor);
                startVisited.add(neighbor);
            }
        }

        for (let neighbor of goalNeighbors) {
            if (!goalVisited.has(neighbor)) {
                goalQueue.push(neighbor);
                goalVisited.add(neighbor);
            }
        }
    }

    console.log("Path not found!");
    return false;
}

// Example graph
const graph = {
    'A': ['B', 'C'],
    'B': ['A', 'D', 'E'],
    'C': ['A', 'F'],
    'D': ['B'],
    'E': ['B', 'F'],
    'F': ['C', 'E']
};

biDirectionalSearch(graph, 'A', 'F');
