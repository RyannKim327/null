type Graph = Map<string, string[]>;

function bfs(graph: Graph, startNode: string): string[] {
    const visited = new Set<string>();  // track visited nodes
    const queue: string[] = [];         // nodes to visit, FIFO
    const result: string[] = [];        // order of traversal

    visited.add(startNode);
    queue.push(startNode);

    while (queue.length > 0) {
        const current = queue.shift()!;
        result.push(current);

        const neighbors = graph.get(current) || [];
        for (const neighbor of neighbors) {
            if (!visited.has(neighbor)) {
                visited.add(neighbor);
                queue.push(neighbor);
            }
        }
    }

    return result;
}
const graph: Graph = new Map([
    ['A', ['B', 'C']],
    ['B', ['D', 'E']],
    ['C', ['F']],
    ['D', []],
    ['E', ['F']],
    ['F', []]
]);

const traversalOrder = bfs(graph, 'A');
console.log(traversalOrder); // Output: ['A', 'B', 'C', 'D', 'E', 'F']
