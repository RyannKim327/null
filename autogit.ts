type Graph = Map<string, string[]>;

function bidirectionalSearch(graph: Graph, start: string, goal: string): string[] | null {
    if (start === goal) return [start];

    // Queues for forward and backward search
    const forwardQueue: string[] = [start];
    const backwardQueue: string[] = [goal];

    // Visited maps for forward and backward searches (node -> previous node)
    const forwardVisited = new Map<string, string | null>([[start, null]]);
    const backwardVisited = new Map<string, string | null>([[goal, null]]);

    while (forwardQueue.length && backwardQueue.length) {
        // Expand forward
        const forwardResult = visitLevel(graph, forwardQueue, forwardVisited, backwardVisited);
        if (forwardResult) return reconstructPath(forwardResult, forwardVisited, backwardVisited);

        // Expand backward
        const backwardResult = visitLevel(graph, backwardQueue, backwardVisited, forwardVisited);
        if (backwardResult) return reconstructPath(backwardResult, forwardVisited, backwardVisited);
    }

    return null; // No path found
}

function visitLevel(
    graph: Graph,
    queue: string[],
    visited: Map<string, string | null>,
    otherVisited: Map<string, string | null>
): string | null {
    const current = queue.shift()!;
    const neighbors = graph.get(current) || [];
    for (const neighbor of neighbors) {
        if (!visited.has(neighbor)) {
            visited.set(neighbor, current);
            queue.push(neighbor);
            if (otherVisited.has(neighbor)) {
                // Meeting point found
                return neighbor;
            }
        }
    }
    return null;
}

function reconstructPath(
    meetingNode: string,
    forwardVisited: Map<string, string | null>,
    backwardVisited: Map<string, string | null>
): string[] {
    const path: string[] = [];

    // From meeting node to start
    let current: string | null = meetingNode;
    const forwardPath: string[] = [];
    while (current) {
        forwardPath.push(current);
        current = forwardVisited.get(current) || null;
    }
    forwardPath.reverse(); // Reverse to get start -> meeting

    // From meeting node to goal (excluding meeting node, already included)
    current = backwardVisited.get(meetingNode) || null;
    const backwardPath: string[] = [];
    while (current) {
        backwardPath.push(current);
        current = backwardVisited.get(current) || null;
    }

    return [...forwardPath, ...backwardPath];
}
const graph: Graph = new Map([
    ['A', ['B', 'C']],
    ['B', ['A', 'D', 'E']],
    ['C', ['A', 'F']],
    ['D', ['B']],
    ['E', ['B', 'F']],
    ['F', ['C', 'E']]
]);

const path = bidirectionalSearch(graph, 'A', 'F');
console.log(path);  // Example output: ['A', 'C', 'F']
