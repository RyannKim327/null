type Node = string | number; // Define the type for nodes (can be strings or numbers)
type Graph = Map<Node, Node[]>; // Adjacency list representation of the graph

function bidirectionalSearch(graph: Graph, start: Node, goal: Node): Node[] | null {
    // Initialize queues and visited sets for both directions
    const forwardQueue: Node[] = [start];
    const backwardQueue: Node[] = [goal];

    const forwardVisited: Map<Node, Node | null> = new Map([[start, null]]);
    const backwardVisited: Map<Node, Node | null> = new Map([[goal, null]]);

    // Helper function to perform BFS in one direction
    function bfsStep(queue: Node[], visited: Map<Node, Node | null>, otherVisited: Map<Node, Node | null>): Node | null {
        if (queue.length === 0) return null;

        const current = queue.shift()!;
        for (const neighbor of graph.get(current) || []) {
            if (!visited.has(neighbor)) {
                visited.set(neighbor, current); // Track the parent for path reconstruction
                queue.push(neighbor);

                // Check if the neighbor is in the other direction's visited set
                if (otherVisited.has(neighbor)) {
                    return neighbor; // Intersection found
                }
            }
        }
        return null;
    }

    // Main loop for bi-directional search
    while (forwardQueue.length > 0 && backwardQueue.length > 0) {
        // Perform one step of BFS in the forward direction
        const intersectionForward = bfsStep(forwardQueue, forwardVisited, backwardVisited);
        if (intersectionForward) {
            return reconstructPath(intersectionForward, forwardVisited, backwardVisited);
        }

        // Perform one step of BFS in the backward direction
        const intersectionBackward = bfsStep(backwardQueue, backwardVisited, forwardVisited);
        if (intersectionBackward) {
            return reconstructPath(intersectionBackward, forwardVisited, backwardVisited);
        }
    }

    // If no path is found
    return null;
}

// Helper function to reconstruct the path from the intersection node
function reconstructPath(
    intersection: Node,
    forwardVisited: Map<Node, Node | null>,
    backwardVisited: Map<Node, Node | null>
): Node[] {
    const path: Node[] = [];

    // Trace the path from the intersection to the start node
    let current: Node | null = intersection;
    while (current !== null) {
        path.unshift(current);
        current = forwardVisited.get(current);
    }

    // Trace the path from the intersection to the goal node
    current = backwardVisited.get(intersection);
    while (current !== null) {
        path.push(current);
        current = backwardVisited.get(current);
    }

    return path;
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
const startNode: Node = 'A';
const goalNode: Node = 'F';
const path = bidirectionalSearch(graph, startNode, goalNode);

if (path) {
    console.log('Path found:', path.join(' -> '));
} else {
    console.log('No path found.');
}
Path found: A -> C -> F
