function dijkstra(graph, startNode) {
    const distances = {};
    const visited = {};
    const predecessor = {};
    
    // Initialize distances and predecessor
    for (let node in graph) {
        distances[node] = Infinity;
        predecessor[node] = null;
    }
    
    distances[startNode] = 0;
    
    // Main loop
    while (true) {
        let currentNode = null;
        let shortestDistance = Infinity;
        
        // Find the closest unvisited node
        for (let node in distances) {
            if (!visited[node] && distances[node] < shortestDistance) {
                currentNode = node;
                shortestDistance = distances[node];
            }
        }
        
        if (currentNode === null) {
            break;
        }
        
        // Update distances and predecessors for neighbors of current node
        for (let neighbor in graph[currentNode]) {
            let distance = distances[currentNode] + graph[currentNode][neighbor];
            if (distance < distances[neighbor]) {
                distances[neighbor] = distance;
                predecessor[neighbor] = currentNode;
            }
        }
        
        visited[currentNode] = true;
    }
    
    return { distances, predecessor };
}

// Sample graph
const graph = {
    A: { B: 1, C: 4 },
    B: { A: 1, C: 2, D: 5 },
    C: { A: 4, B: 2, D: 1 },
    D: { B: 5, C: 1 }
};

const startNode = 'A';
const { distances, predecessor } = dijkstra(graph, startNode);

console.log(distances);
console.log(predecessor);
