function breadthFirstSearch(graph, startNode, targetNode) {
    let visited = {};
    let queue = [startNode];
    
    while (queue.length > 0) {
        let currentNode = queue.shift();
        
        if (currentNode === targetNode) {
            return true;
        }
        
        if (!visited[currentNode]) {
            visited[currentNode] = true;
            
            let neighbors = graph[currentNode];
            for (let i = 0; i < neighbors.length; i++) {
                let neighbor = neighbors[i];
                if (!visited[neighbor]) {
                    queue.push(neighbor);
                }
            }
        }
    }
    
    return false;
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

let startNode = 'A';
let targetNode = 'F';

console.log(breadthFirstSearch(graph, startNode, targetNode)); // Output: true
