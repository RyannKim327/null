// Type definition for the Graph
type Graph = {
    [key: string]: string[]; // Adjacency list representation
};

// Breadth-Limited Search Function
function breadthLimitedSearch(graph: Graph, startNode: string, targetNode: string, depthLimit: number): boolean {
    if (depthLimit < 0) {
        return false; // If depth limit is negative, return false
    }

    const queue: { node: string; depth: number }[] = [{ node: startNode, depth: 0 }];
    const visited = new Set<string>(); // To keep track of visited nodes

    while (queue.length > 0) {
        const { node, depth } = queue.shift()!; // Dequeue the front element

        if (node === targetNode) {
            return true; // Target found
        }

        if (depth < depthLimit) {
            visited.add(node); // Mark the node as visited

            for (const neighbor of graph[node] || []) {
                if (!visited.has(neighbor)) {
                    queue.push({ node: neighbor, depth: depth + 1 }); // Add neighbors to queue with incremented depth
                }
            }
        }
    }

    return false; // Target not found within depth limit
}

// Example usage
const graph: Graph = {
    A: ['B', 'C'],
    B: ['D', 'E'],
    C: ['F'],
    D: [],
    E: [],
    F: []
};

const startNode = 'A';
const targetNode = 'E';
const depthLimit = 2;

const result = breadthLimitedSearch(graph, startNode, targetNode, depthLimit);
console.log(result ? "Target found!" : "Target not found within depth limit.");
