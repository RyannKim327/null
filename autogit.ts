type Graph = { [key: string]: string[] };

function bfs(graph: Graph, start: string): string[] {
    let queue: string[] = [start]; // Initialize a queue with the starting node
    let visited: Set<string> = new Set(); // Keep track of visited nodes
    let result: string[] = []; // To hold the order of visited nodes

    while (queue.length > 0) {
        const node = queue.shift(); // Dequeue an element
        if (node && !visited.has(node)) {
            visited.add(node); // Mark the node as visited
            result.push(node); // Add the node to the result

            // Enqueue all the neighbors that haven't been visited
            for (const neighbor of graph[node]) {
                if (!visited.has(neighbor)) {
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
    B: ['A', 'D', 'E'],
    C: ['A', 'F'],
    D: ['B'],
    E: ['B', 'F'],
    F: ['C', 'E'],
};

console.log(bfs(graph, 'A')); // Output: ['A', 'B', 'C', 'D', 'E', 'F']
