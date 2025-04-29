function bfs(graph: { [node: string]: string[] }, startNode: string): string[] {
    const visited: Set<string> = new Set();
    const queue: string[] = [];
    const result: string[] = [];

    // Start with the starting node
    visited.add(startNode);
    queue.push(startNode);

    while (queue.length > 0) {
        const currentNode = queue.shift()!;
        result.push(currentNode);

        // Explore neighbors
        const neighbors = graph[currentNode] || [];
        for (const neighbor of neighbors) {
            if (!visited.has(neighbor)) {
                visited.add(neighbor);
                queue.push(neighbor);
            }
        }
    }

    return result;
}

// Example usage
const graphExample = {
    A: ["B", "C"],
    B: ["D", "E"],
    C: ["F"],
    D: [],
    E: ["F"],
    F: []
};

console.log(bfs(graphExample, "A")); // Output: [ 'A', 'B', 'C', 'D', 'E', 'F' ]
