function dijkstra(graph, source) {
    let distance = {};
    let visited = {};
    
    // Initialize distance to all nodes as Infinity
    for (let node in graph) {
        distance[node] = Infinity;
    }
    
    // The distance from the source to itself is 0
    distance[source] = 0;
    
    // Main loop
    while (true) {
        let minDistance = Infinity;
        let minNode = null;
        
        // Find the node with the smallest distance
        for (let node in graph) {
            if (!visited[node] && distance[node] < minDistance) {
                minDistance = distance[node];
                minNode = node;
            }
        }
        
        if (minNode === null) {
            break;
        }
        
        // Update the distances of neighbors of the current node
        for (let neighbor in graph[minNode]) {
            let weight = graph[minNode][neighbor];
            let totalDistance = distance[minNode] + weight;
            
            if (totalDistance < distance[neighbor]) {
                distance[neighbor] = totalDistance;
            }
        }
        
        visited[minNode] = true;
    }
    
    return distance;
}

// Example graph
let graph = {
    'A': { 'B': 5, 'C': 3 },
    'B': { 'A': 5, 'C': 1, 'D': 2 },
    'C': { 'A': 3, 'B': 1, 'D': 4 },
    'D': { 'B': 2, 'C': 4 }
};

// Find shortest paths from node 'A'
let shortestPaths = dijkstra(graph, 'A');

console.log(shortestPaths);
