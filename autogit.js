function dijkstra(graph, source) {
    const distance = {};
    const visited = {};
    
    for (let node in graph) {
        distance[node] = Infinity;
        visited[node] = false;
    }
    
    distance[source] = 0;
    
    for (let i = 0; i < Object.keys(graph).length - 1; i++) {
        let u = minDistanceNode(distance, visited);
        visited[u] = true;
        
        for (let v in graph[u]) {
            if (!visited[v] && distance[u] + graph[u][v] < distance[v]) {
                distance[v] = distance[u] + graph[u][v];
            }
        }
    }
    
    return distance;
}

function minDistanceNode(distance, visited) {
    let min = Infinity;
    let minNode = null;
    
    for (let node in distance) {
        if (!visited[node] && distance[node] < min) {
            min = distance[node];
            minNode = node;
        }
    }
    
    return minNode;
}

// Example
const graph = {
    'A': { 'B': 1, 'C': 4 },
    'B': { 'A': 1, 'C': 2, 'D': 5 },
    'C': { 'A': 4, 'B': 2, 'D': 1 },
    'D': { 'B': 5, 'C': 1 }
};

const sourceNode = 'A';
const shortestDistances = dijkstra(graph, sourceNode);
console.log(shortestDistances);
