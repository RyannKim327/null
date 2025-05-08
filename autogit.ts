type AdjacencyList = { [key: string]: string[] };

function bfs(graph: AdjacencyList, start: string): string[] {
    const visited: Set<string> = new Set(); // Set to keep track of visited nodes
    const queue: string[] = []; // Queue to hold nodes to visit
    const result: string[] = []; // Result of the BFS traversal

    queue.push(start); // Start with the initial node
    visited.add(start); // Mark the starting node as visited

    while (queue.length > 0) {
        const node = queue.shift(); // Get the first node in the queue
        if (node) {
            result.push(node); // Add the node to the result
            const neighbors = graph[node]; // Get the neighbors of the node

            for (const neighbor of neighbors) {
                if (!visited.has(neighbor)) { // If the neighbor has not been visited
                    visited.add(neighbor); // Mark it as visited
                    queue.push(neighbor); // Add to the queue
                }
            }
        }
    }

    return result; // Return the BFS traversal result
}

// Example usage:
const graph: AdjacencyList = {
    'A': ['B', 'C'],
    'B': ['A', 'D', 'E'],
    'C': ['A', 'F'],
    'D': ['B'],
    'E': ['B', 'F'],
    'F': ['C', 'E']
};

const bfsResult = bfs(graph, 'A');
console.log(bfsResult); // Output: [ 'A', 'B', 'C', 'D', 'E', 'F' ] (order may vary based on implementation)
