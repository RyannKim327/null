type Graph = {
    [key: string]: string[]; // Adjacency list representation
};

function breadthFirstSearch(graph: Graph, startNode: string): string[] {
    const visited: Set<string> = new Set();
    const queue: string[] = [];
    const result: string[] = [];

    // Start with the initial node
    queue.push(startNode);
    visited.add(startNode);

    while (queue.length > 0) {
        const currentNode = queue.shift(); // Get the first element from the queue
        if (currentNode) {
            result.push(currentNode); // Process the current node

            // Get all adjacent nodes
            const neighbors = graph[currentNode] || [];
            for (const neighbor of neighbors) {
                if (!visited.has(neighbor)) {
                    visited.add(neighbor); // Mark it as visited
                    queue.push(neighbor); // Add it to the queue
                }
            }
        }
    }

    return result;
}

// Example usage
const graph: Graph = {
    A: ['B', 'C'],
    B: ['D', 'E'],
    C: ['F'],
    D: [],
    E: ['F'],
    F: [],
};

const startingNode = 'A';
const traversalOrder = breadthFirstSearch(graph, startingNode);
console.log(traversalOrder); // Output: ['A', 'B', 'C', 'D', 'E', 'F']
