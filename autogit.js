function breadthFirstSearch(graph, startNode) {
    let visited = {};
    let queue = [];

    queue.push(startNode);
    visited[startNode] = true;

    while (queue.length > 0) {
        let currentNode = queue.shift();
        console.log("Visiting node: ", currentNode);

        let neighbors = graph[currentNode];
        for (let i = 0; i < neighbors.length; i++) {
            let neighbor = neighbors[i];
            if (!visited[neighbor]) {
                visited[neighbor] = true;
                queue.push(neighbor);
            }
        }
    }
}

// Example graph represented as an adjacency list
let graph = {
    'A': ['B', 'C'],
    'B': ['A', 'D', 'E'],
    'C': ['A', 'F'],
    'D': ['B'],
    'E': ['B', 'F'],
    'F': ['C', 'E']
};

breadthFirstSearch(graph, 'A');
