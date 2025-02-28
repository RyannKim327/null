// Define the graph as an adjacency list
type Graph = {
    [key: string]: string[];
};

// BFS function
function bfs(graph: Graph, start: string): string[] {
    const visited: Set<string> = new Set(); // To keep track of visited nodes
    const queue: string[] = []; // Queue for BFS
    const result: string[] = []; // To store the order of traversal

    // Start with the initial node
    queue.push(start);
    visited.add(start);

    while (queue.length > 0) {
        const node = queue.shift(); // Dequeue a node
        if (node) {
            result.push(node); // Process the node

            // Get all adjacent nodes
            const neighbors = graph[node];
            if (neighbors) {
                for (const neighbor of neighbors) {
                    if (!visited.has(neighbor)) {
                        visited.add(neighbor); // Mark as visited
                        queue.push(neighbor); // Enqueue the neighbor
                    }
                }
            }
        }
    }

    return result; // Return the order of traversal
}

// Example usage
const graph: Graph = {
    A: ['B', 'C'],
    B: ['D', 'E'],
    C: ['F'],
    D: [],
    E: ['F'],
    F: []
};

const result = bfs(graph, 'A');
console.log(result); // Output: ['A', 'B', 'C', 'D', 'E', 'F']
