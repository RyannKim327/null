type Graph = { [key: string]: string[] };

function bfs(graph: Graph, startNode: string): string[] {
    const visited: Set<string> = new Set();
    const queue: string[] = [];
    const result: string[] = [];

    // Start with the starting node
    queue.push(startNode);
    visited.add(startNode);

    while (queue.length > 0) {
        const currentNode = queue.shift(); // Dequeue the first node

        if (currentNode !== undefined) {
            result.push(currentNode); // Process the current node

            // Explore all unvisited neighbors
            for (const neighbor of graph[currentNode]) {
                if (!visited.has(neighbor)) {
                    visited.add(neighbor); // Mark neighbor as visited
                    queue.push(neighbor); // Enqueue the neighbor
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

const bfsResult = bfs(graph, 'A');
console.log(bfsResult); // Output: ["A", "B", "C", "D", "E", "F"]
