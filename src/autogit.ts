type Node = string | number; // Define the type for nodes
type Graph = Map<Node, Node[]>; // Adjacency list representation of the graph

/**
 * Perform a breadth-limited search on the graph.
 * @param graph - The graph represented as an adjacency list.
 * @param startNode - The starting node for the search.
 * @param depthLimit - The maximum depth to explore.
 * @returns An array of visited nodes in the order they were visited.
 */
function breadthLimitedSearch(graph: Graph, startNode: Node, depthLimit: number): Node[] {
    const visited: Node[] = []; // List of visited nodes
    const queue: [Node, number][] = [[startNode, 0]]; // Queue of nodes to visit, with their current depth
    const seen = new Set<Node>(); // Set to track visited nodes

    while (queue.length > 0) {
        const [currentNode, currentDepth] = queue.shift()!; // Dequeue the front node

        // Skip if the node has already been visited
        if (seen.has(currentNode)) continue;

        // Mark the node as visited
        visited.push(currentNode);
        seen.add(currentNode);

        // Stop exploring if the current depth exceeds the depth limit
        if (currentDepth >= depthLimit) continue;

        // Enqueue all unvisited neighbors with incremented depth
        for (const neighbor of graph.get(currentNode) || []) {
            if (!seen.has(neighbor)) {
                queue.push([neighbor, currentDepth + 1]);
            }
        }
    }

    return visited;
}

// Example Usage
const graph: Graph = new Map([
    ['A', ['B', 'C']],
    ['B', ['D', 'E']],
    ['C', ['F']],
    ['D', []],
    ['E', ['G']],
    ['F', []],
    ['G', []],
]);

const startNode: Node = 'A';
const depthLimit: number = 2;

const result = breadthLimitedSearch(graph, startNode, depthLimit);
console.log("Visited Nodes:", result);
Visited Nodes: [ 'A', 'B', 'C', 'D', 'E', 'F' ]
