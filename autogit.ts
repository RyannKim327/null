type Graph = { [key: string]: string[] };

function bfs(graph: Graph, startNode: string): void {
    const queue: string[] = [startNode]; // Initialize the queue with the starting node.
    const visited: Set<string> = new Set(); // Keep track of visited nodes.
    
    visited.add(startNode); // Mark the start node as visited.

    while (queue.length > 0) {
        const node = queue.shift(); // Dequeue a node from the queue.

        if (node === undefined) {
            continue; // In case the queue is empty and gives us undefined.
        }
        
        console.log(node); // Process the current node (for example, print it).

        // Enqueue all unvisited neighbors.
        for (const neighbor of graph[node]) {
            if (!visited.has(neighbor)) {
                visited.add(neighbor); // Mark the neighbor as visited.
                queue.push(neighbor); // Enqueue the neighbor.
            }
        }
    }
}

// Example usage:
const graph: Graph = {
    'A': ['B', 'C'],
    'B': ['A', 'D', 'E'],
    'C': ['A', 'F'],
    'D': ['B'],
    'E': ['B', 'F'],
    'F': ['C', 'E'],
};

bfs(graph, 'A'); // Output: A, B, C, D, E, F in some order.
