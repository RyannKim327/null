type Graph = Map<number, number[]>; // Define the type for the graph

function bfs(graph: Graph, startNode: number): number[] {
    const visited: Set<number> = new Set(); // Keep track of visited nodes
    const queue: number[] = []; // Initialize an empty queue
    const result: number[] = []; // To store the order of traversal
    
    // Start with the initial node
    visited.add(startNode);
    queue.push(startNode);
    
    while (queue.length > 0) {
        const currentNode = queue.shift(); // Dequeue a node
        
        if (currentNode !== undefined) {
            result.push(currentNode); // Process the current node
            
            // Get neighbors of the current node
            const neighbors = graph.get(currentNode);
            if (neighbors) {
                for (const neighbor of neighbors) {
                    if (!visited.has(neighbor)) {
                        visited.add(neighbor); // Mark neighbor as visited
                        queue.push(neighbor); // Enqueue the neighbor
                    }
                }
            }
        }
    }
    
    return result; // Return the BFS traversal order
}

// Example usage:
const graph: Graph = new Map([
    [0, [1, 2]],
    [1, [0, 3, 4]],
    [2, [0, 5]],
    [3, [1]],
    [4, [1, 6]],
    [5, [2]],
    [6, [4]]
]);

const startNode = 0;
const bfsResult = bfs(graph, startNode);
console.log(bfsResult); // Output: [0, 1, 2, 3, 4, 5, 6]
