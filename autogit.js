function bfs(graph, startNode) {
    let visited = {};
    let queue = [startNode];
    let result = [];

    visited[startNode] = true;

    while (queue.length > 0) {
        let currentNode = queue.shift();
        result.push(currentNode);

        for (let neighbor of graph[currentNode]) {
            if (!visited[neighbor]) {
                visited[neighbor] = true;
                queue.push(neighbor);
            }
        }
    }

    return result;
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

// Starting node
const startNode = 'A';

// Perform BFS
const bfsResult = bfs(graph, startNode);
console.log(bfsResult);
