type Graph<T> = {
    [key: string]: T[]; // Adjacency list representation
};

function breadthLimitedSearch<T>(
    graph: Graph<T>,
    startNode: string,
    depthLimit: number,
    target: T
): string | null {
    const queue: Array<{ node: string; depth: number }> = []; // Queue to hold nodes to visit along with their depth
    const visited: Set<string> = new Set(); // Set to keep track of visited nodes

    queue.push({ node: startNode, depth: 0 }); // Start with the initial node

    while (queue.length > 0) {
        const { node, depth } = queue.shift()!; // Get the first node and depth

        if (depth > depthLimit) {
            continue; // Skip nodes that are beyond the depth limit
        }
        
        if (visited.has(node)) {
            continue; // Skip nodes already visited
        }

        visited.add(node); // Mark the current node as visited

        // Check if the current node is the target
        if (node === target) {
            return node; // Return the target node if found
        }

        // If not at the depth limit, enqueue the children
        if (depth < depthLimit) {
            const neighbors = graph[node]; // Get the neighbors of the current node
            for (const neighbor of neighbors) {
                queue.push({ node: neighbor, depth: depth + 1 }); // Add each neighbor to the queue
            }
        }
    }

    return null; // Return null if the target node is not found
}

// Example Usage:

const graph: Graph<string> = {
    A: ['B', 'C'],
    B: ['D', 'E'],
    C: ['F'],
    D: [],
    E: [],
    F: []
};

const result = breadthLimitedSearch(graph, 'A', 2, 'E');
console.log(result); // Output: 'E'
