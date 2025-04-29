type Graph = { [key: string]: string[] }; // Define a type for the graph

function bfs(graph: Graph, startNode: string): string[] {
    let visited: Set<string> = new Set(); // A set to keep track of visited nodes
    let queue: string[] = []; // A queue to manage the nodes to be explored
    let result: string[] = []; // To store the result of BFS

    // Start with the initial node
    queue.push(startNode);
    visited.add(startNode);

    while (queue.length > 0) {
        // Dequeue the first node in the queue
        const node = queue.shift()!;
        result.push(node); // Add the node to the result

        // Get all adjacent nodes
        const neighbors = graph[node] || [];

        for (const neighbor of neighbors) {
            // If the neighbor has not been visited
            if (!visited.has(neighbor)) {
                visited.add(neighbor); // Mark it as visited
                queue.push(neighbor); // Enqueue the neighbor
            }
        }
    }

    return result; // Return the result of BFS
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
console.log(bfsResult); // Output: ['A', 'B', 'C', 'D', 'E', 'F']
