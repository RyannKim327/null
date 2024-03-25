function BFS(graph, startNode) {
    let visited = {};
    let queue = [];

    visited[startNode] = true;
    queue.push(startNode);

    while (queue.length > 0) {
        let currentNode = queue.shift();
        console.log(currentNode);

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

// Example graph
const graph = {
    A: ['B', 'C'],
    B: ['A', 'D', 'E'],
    C: ['A', 'F'],
    D: ['B'],
    E: ['B', 'F'],
    F: ['C', 'E']
};

BFS(graph, 'A');
