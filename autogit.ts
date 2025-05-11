type Graph = { [key: string]: string[] };

function bfs(graph: Graph, startNode: string): string[] {
    const visited = new Set<string>();
    const queue: string[] = [];
    const order: string[] = [];

    visited.add(startNode);
    queue.push(startNode);

    while (queue.length > 0) {
        const current = queue.shift()!;
        order.push(current);

        for (const neighbor of graph[current] || []) {
            if (!visited.has(neighbor)) {
                visited.add(neighbor);
                queue.push(neighbor);
            }
        }
    }

    return order;
}
const graph: Graph = {
    'A': ['B', 'C'],
    'B': ['A', 'D', 'E'],
    'C': ['A', 'F'],
    'D': ['B'],
    'E': ['B', 'F'],
    'F': ['C', 'E']
};

const traversalOrder = bfs(graph, 'A');
console.log(traversalOrder); // Output: ['A', 'B', 'C', 'D', 'E', 'F']
