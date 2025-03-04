// Define the type for the graph's adjacency list
type Graph = { [key: string]: string[] };

// Function to perform Breadth-First Search
function bfs(graph: Graph, startNode: string): string[] {
    // Initialize an array to keep track of visited nodes
    const visited: Set<string> = new Set();
    const queue: string[] = [];
    const result: string[] = [];

    // Start the traversal with the starting node
    queue.push(startNode);
    visited.add(startNode);

    while (queue.length > 0) {
        // Dequeue the first node from the queue
        const currentNode = queue.shift()!;
        result.push(currentNode);

        // Explore each neighbor of the current node
        for (const neighbor of graph[currentNode] || []) {
            if (!visited.has(neighbor)) {
                visited.add(neighbor);
                queue.push(neighbor);
            }
        }
    }

    return result;
}

// Example usage
const graph: Graph = {
    'A': ['B', 'C'],
    'B': ['D', 'E'],
    'C': ['F'],
    'D': [],
    'E': ['F'],
    'F': []
};

const result = bfs(graph, 'A');
console.log(result); // Output: ['A', 'B', 'C', 'D', 'E', 'F']
