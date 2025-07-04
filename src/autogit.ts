// Function to perform topological sort
function topologicalSort(graph: Map<string, string[]>): string[] {
    const inDegree = new Map<string, number>();
    const nodes = Array.from(graph.keys());

    // Initialize in-degree for each node
    for (const node of nodes) {
        inDegree.set(node, 0);
    }

    // Calculate in-degree for each node
    for (const [node, neighbors] of graph.entries()) {
        for (const neighbor of neighbors) {
            inDegree.set(neighbor, (inDegree.get(neighbor) || 0) + 1);
        }
    }

    // Collect nodes with zero in-degree
    const queue: string[] = [];
    for (const [node, degree] of inDegree.entries()) {
        if (degree === 0) {
            queue.push(node);
        }
    }

    const sortedOrder: string[] = [];

    // Process nodes
    while (queue.length > 0) {
        const current = queue.shift()!;
        sortedOrder.push(current);

        // Decrease in-degree of neighbors
        const neighbors = graph.get(current) || [];
        for (const neighbor of neighbors) {
            inDegree.set(neighbor, (inDegree.get(neighbor) || 0) - 1);
            if (inDegree.get(neighbor) === 0) {
                queue.push(neighbor);
            }
        }
    }

    // Check if topological sort is possible (no cycles)
    if (sortedOrder.length !== nodes.length) {
        throw new Error("Graph has at least one cycle, topological sort not possible.");
    }

    return sortedOrder;
}

// Example Usage:
const graph = new Map<string, string[]>([
    ['A', ['C']],
    ['B', ['C', 'D']],
    ['C', ['E']],
    ['D', ['F']],
    ['E', ['F']],
    ['F', []]
]);

const order = topologicalSort(graph);
console.log(order);
// Possible Output: ['A', 'B', 'C', 'D', 'E', 'F']
