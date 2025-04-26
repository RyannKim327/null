// Graph interface
interface Graph {
    [key: string]: string[];
}

// BFS Function
function bfs(graph: Graph, start: string): string[] {
    // Create a queue for BFS
    const queue: string[] = [];
    // Create a set to keep track of visited nodes
    const visited: Set<string> = new Set();
    // Array to store the order of traversal
    const result: string[] = [];

    // Start with the initial node
    queue.push(start);
    visited.add(start);

    while (queue.length > 0) {
        // Dequeue a node from the beginning of the queue
        const node = queue.shift();
        
        if (node) {
            // Process the current node
            result.push(node);
            
            // Get all adjacent nodes
            const neighbors = graph[node];
            if (neighbors) {
                for (const neighbor of neighbors) {
                    if (!visited.has(neighbor)) {
                        // Mark it visited and enqueue it
                        visited.add(neighbor);
                        queue.push(neighbor);
                    }
                }
            }
        }
    }

    return result;
}

// Example Usage
const graph: Graph = {
    A: ['B', 'C'],
    B: ['A', 'D', 'E'],
    C: ['A', 'F'],
    D: ['B'],
    E: ['B', 'F'],
    F: ['C', 'E'],
};

const result = bfs(graph, 'A');
console.log(result);  // Output: ['A', 'B', 'C', 'D', 'E', 'F']
