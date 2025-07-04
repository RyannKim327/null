type Node = string; // Define the type for nodes, can be adjusted to any type.

interface Graph {
    [key: string]: Node[]; // Adjacency list representation.
}

function depthLimitedSearch(graph: Graph, start: Node, goal: Node, limit: number): boolean {
    const stack: { node: Node; depth: number }[] = []; // Stack to manage the search
    stack.push({ node: start, depth: 0 }); // Start with the initial node at depth 0

    while (stack.length > 0) {
        const { node, depth } = stack.pop()!; // Get the last node added to the stack

        // If we reach the goal, return true
        if (node === goal) {
            return true;
        }

        // If the current depth is less than the limit, explore neighbors
        if (depth < limit) {
            const neighbors = graph[node] || []; // Get the neighbors of the current node
            // Push neighbors onto the stack with incremented depth
            for (const neighbor of neighbors) {
                stack.push({ node: neighbor, depth: depth + 1 });
            }
        }
    }

    // If goal is not found within the depth limit
    return false;
}

// Example Usage
const graph: Graph = {
    A: ['B', 'C'],
    B: ['D', 'E'],
    C: ['F'],
    D: [],
    E: ['G'],
    F: [],
    G: []
};

const startNode: Node = 'A';
const goalNode: Node = 'G';
const depthLimit: number = 3;

const found = depthLimitedSearch(graph, startNode, goalNode, depthLimit);
console.log(`Goal ${goalNode} found: ${found}`);
