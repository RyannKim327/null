type Node = string; // Assuming nodes are represented as strings
type Graph = Map<Node, Node[]>; // Adjacency list representation of the graph

function bidirectionalSearch(graph: Graph, start: Node, goal: Node): Node[] | null {
    if (start === goal) {
        return [start]; // Trivial case: start and goal are the same
    }

    // Queues for BFS from both directions
    const queueStart: Node[] = [start];
    const queueGoal: Node[] = [goal];

    // Maps to track visited nodes and their parents
    const visitedStart: Map<Node, Node | null> = new Map([[start, null]]);
    const visitedGoal: Map<Node, Node | null> = new Map([[goal, null]]);

    while (queueStart.length > 0 && queueGoal.length > 0) {
        // Search from the start direction
        const intersectionStart = bfsStep(graph, queueStart, visitedStart, visitedGoal);
        if (intersectionStart) {
            return reconstructPath(intersectionStart, visitedStart, visitedGoal);
        }

        // Search from the goal direction
        const intersectionGoal = bfsStep(graph, queueGoal, visitedGoal, visitedStart);
        if (intersectionGoal) {
            return reconstructPath(intersectionGoal, visitedStart, visitedGoal);
        }
    }

    return null; // No path found
}

function bfsStep(
    graph: Graph,
    queue: Node[],
    visited: Map<Node, Node | null>,
    oppositeVisited: Map<Node, Node | null>
): Node | null {
    const currentNode = queue.shift()!; // Dequeue the first node
    for (const neighbor of graph.get(currentNode) || []) {
        if (!visited.has(neighbor)) {
            visited.set(neighbor, currentNode); // Mark neighbor as visited and set parent
            queue.push(neighbor); // Enqueue neighbor
        }

        // Check if the neighbor has been visited by the opposite search
        if (oppositeVisited.has(neighbor)) {
            return neighbor; // Intersection found
        }
    }
    return null; // No intersection found in this step
}

function reconstructPath(
    intersection: Node,
    visitedStart: Map<Node, Node | null>,
    visitedGoal: Map<Node, Node | null>
): Node[] {
    // Reconstruct path from start to intersection
    const pathStart: Node[] = [];
    let current: Node | null = intersection;
    while (current !== null) {
        pathStart.push(current);
        current = visitedStart.get(current)!;
    }
    pathStart.reverse();

    // Reconstruct path from intersection to goal
    const pathGoal: Node[] = [];
    current = visitedGoal.get(intersection)!;
    while (current !== null) {
        pathGoal.push(current);
        current = visitedGoal.get(current)!;
    }

    // Combine the two paths
    return [...pathStart, ...pathGoal];
}

// Example usage
const graph: Graph = new Map([
    ['A', ['B', 'C']],
    ['B', ['A', 'D', 'E']],
    ['C', ['A', 'F']],
    ['D', ['B']],
    ['E', ['B', 'F']],
    ['F', ['C', 'E']]
]);

const start = 'A';
const goal = 'F';
const path = bidirectionalSearch(graph, start, goal);

if (path) {
    console.log('Path found:', path.join(' -> '));
} else {
    console.log('No path found');
}
