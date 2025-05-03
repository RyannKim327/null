type Graph = {
    [key: string]: string[]; // The graph represented as an adjacency list
};

function bfs(graph: Graph, startNode: string): string[] {
    const visited: Set<string> = new Set(); // To track visited nodes
    const queue: string[] = []; // Queue for BFS
    const result: string[] = []; // To store the order of traversal

    // Start with the start node
    queue.push(startNode);
    visited.add(startNode);

    while (queue.length > 0) {
        // Dequeue the front node
        const currentNode = queue.shift()!;
        result.push(currentNode); // Process the current node

        // Get all its neighbors
        const neighbors = graph[currentNode];

        for (const neighbor of neighbors) {
            if (!visited.has(neighbor)) {
                visited.add(neighbor); // Mark the neighbor as visited
                queue.push(neighbor); // Enqueue the neighbor
            }
        }
    }

    return result; // Return the order of traversal
}

// Example Usage
const graph: Graph = {
    'A': ['B', 'C'],
    'B': ['D', 'E'],
    'C': ['F'],
    'D': [],
    'E': ['F'],
    'F': []
};

const result = bfs(graph, 'A');
console.log(result); // Output: ['A', 'B', 'C', 'D', 'E', 'F']
