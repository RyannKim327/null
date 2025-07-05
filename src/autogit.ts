// Define the type for the graph
type Graph = {
    [key: string]: string[]; // Each node points to an array of its neighbors
};

// BFS function
function bfs(graph: Graph, startNode: string): string[] {
    const visited: Set<string> = new Set(); // To keep track of visited nodes
    const queue: string[] = []; // Queue for BFS
    const result: string[] = []; // To store the order of traversal

    // Start with the initial node
    queue.push(startNode);
    visited.add(startNode);

    while (queue.length > 0) {
        const currentNode = queue.shift(); // Dequeue a node
        if (currentNode) {
            result.push(currentNode); // Process the current node

            // Get all neighbors of the current node
            const neighbors = graph[currentNode] || [];
            for (const neighbor of neighbors) {
                if (!visited.has(neighbor)) {
                    visited.add(neighbor); // Mark neighbor as visited
                    queue.push(neighbor); // Enqueue the neighbor
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

const startNode = 'A';
const bfsResult = bfs(graph, startNode);
console.log(bfsResult); // Output: ['A', 'B', 'C', 'D', 'E', 'F']
