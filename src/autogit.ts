type Graph = {
    [key: string]: string[];
};
function bfs(graph: Graph, startNode: string): string[] {
    const visited: Set<string> = new Set(); // To keep track of visited nodes
    const queue: string[] = [startNode]; // Initialize the queue with the start node
    const result: string[] = []; // To store the order of traversal

    while (queue.length > 0) {
        const currentNode = queue.shift(); // Dequeue the first node

        if (currentNode && !visited.has(currentNode)) {
            visited.add(currentNode); // Mark the node as visited
            result.push(currentNode); // Add it to the result

            // Enqueue all unvisited neighbors
            for (const neighbor of graph[currentNode]) {
                if (!visited.has(neighbor)) {
                    queue.push(neighbor);
                }
            }
        }
    }

    return result; // Return the order of traversal
}
const graph: Graph = {
    'A': ['B', 'C'],
    'B': ['D', 'E'],
    'C': ['F'],
    'D': [],
    'E': ['F'],
    'F': [],
};

const startNode = 'A';
const traversalOrder = bfs(graph, startNode);

console.log(traversalOrder); // Output: ['A', 'B', 'C', 'D', 'E', 'F']
