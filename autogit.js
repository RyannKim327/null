function bfs(graph, startNode, endNode) {
    // Create a queue for BFS
    let queue = [];
    queue.push([startNode]);

    // Keep track of visited nodes
    let visited = new Set();

    // Iterate through the queue
    while (queue.length > 0) {
        let path = queue.shift();
        let node = path[path.length - 1];

        if (node === endNode) {
            return path;
        }

        if (!visited.has(node)) {
            visited.add(node);

            let neighbors = graph[node];
            for (let neighbor of neighbors) {
                let newPath = [...path, neighbor];
                queue.push(newPath);
            }
        }
    }

    // If no path is found
    return null;
}

// Example graph representation using an adjacency list
const graph = {
    A: ['B', 'C'],
    B: ['A', 'D', 'E'],
    C: ['A', 'F'],
    D: ['B'],
    E: ['B', 'F'],
    F: ['C', 'E']
};

const startNode = 'A';
const endNode = 'F';
const shortestPath = bfs(graph, startNode, endNode);

if (shortestPath) {
    console.log(`Shortest path from ${startNode} to ${endNode}: ${shortestPath.join(' -> ')}`);
} else {
    console.log(`No path found from ${startNode} to ${endNode}`);
}
