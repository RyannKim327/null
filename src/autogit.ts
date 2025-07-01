type Node = string | number; // Define the type of nodes (can be adjusted based on your use case)
type Graph = Map<Node, Node[]>; // Adjacency list representation of the graph

/**
 * Bi-directional Search Algorithm
 * @param graph - The graph represented as an adjacency list
 * @param start - The starting node
 * @param target - The target node
 * @returns The shortest path from start to target, or null if no path exists
 */
function bidirectionalSearch(graph: Graph, start: Node, target: Node): Node[] | null {
    // Initialize queues and visited sets for both directions
    const forwardQueue: Node[] = [start];
    const backwardQueue: Node[] = [target];

    const forwardVisited = new Map<Node, Node | null>(); // Tracks parent nodes for path reconstruction
    const backwardVisited = new Map<Node, Node | null>();

    forwardVisited.set(start, null); // Start has no parent
    backwardVisited.set(target, null); // Target has no parent

    // Helper function to check if two searches meet
    function isIntersection(node: Node): boolean {
        return forwardVisited.has(node) && backwardVisited.has(node);
    }

    // Helper function to reconstruct the path
    function reconstructPath(intersection: Node): Node[] {
        const path: Node[] = [];

        // Build the forward path
        let current: Node | null = intersection;
        while (current !== null) {
            path.unshift(current); // Add to the front of the path
            current = forwardVisited.get(current);
        }

        // Build the backward path
        current = backwardVisited.get(intersection);
        while (current !== null) {
            path.push(current); // Add to the end of the path
            current = backwardVisited.get(current);
        }

        return path;
    }

    // Perform bi-directional BFS
    while (forwardQueue.length > 0 && backwardQueue.length > 0) {
        // Expand the forward search
        const forwardNode = forwardQueue.shift()!;
        for (const neighbor of graph.get(forwardNode) || []) {
            if (!forwardVisited.has(neighbor)) {
                forwardVisited.set(neighbor, forwardNode);
                forwardQueue.push(neighbor);

                // Check for intersection
                if (isIntersection(neighbor)) {
                    return reconstructPath(neighbor);
                }
            }
        }

        // Expand the backward search
        const backwardNode = backwardQueue.shift()!;
        for (const neighbor of graph.get(backwardNode) || []) {
            if (!backwardVisited.has(neighbor)) {
                backwardVisited.set(neighbor, backwardNode);
                backwardQueue.push(neighbor);

                // Check for intersection
                if (isIntersection(neighbor)) {
                    return reconstructPath(neighbor);
                }
            }
        }
    }

    // If no intersection is found, return null (no path exists)
    return null;
}
// Example graph
const graph: Graph = new Map([
    ['A', ['B', 'C']],
    ['B', ['A', 'D', 'E']],
    ['C', ['A', 'F']],
    ['D', ['B']],
    ['E', ['B', 'F']],
    ['F', ['C', 'E']]
]);

// Perform bi-directional search
const start = 'A';
const target = 'F';
const path = bidirectionalSearch(graph, start, target);

if (path) {
    console.log(`Shortest path from ${start} to ${target}:`, path);
} else {
    console.log(`No path exists between ${start} and ${target}`);
}
Shortest path from A to F: [ 'A', 'C', 'F' ]
