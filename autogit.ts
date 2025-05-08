type Graph = {
    [key: string]: string[]; // Each key (node) maps to an array of neighbors
};

function bfs(graph: Graph, startNode: string): string[] {
    const visited: Set<string> = new Set(); // To track visited nodes
    const queue: string[] = []; // Queue to manage the current node list
    const result: string[] = []; // To store the order of visited nodes

    // Start from the given starting node
    queue.push(startNode);
    visited.add(startNode);

    while (queue.length > 0) {
        const currentNode = queue.shift(); // Dequeue the first node
        if (currentNode) {
            result.push(currentNode); // Add the current node to the result

            // Get all neighbors of the current node
            const neighbors = graph[currentNode];
            for (const neighbor of neighbors) {
                // If not visited, mark it and enqueue it
                if (!visited.has(neighbor)) {
                    visited.add(neighbor);
                    queue.push(neighbor);
                }
            }
        }
    }

    return result; // Return the order of visited nodes
}

// Example usage:
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
