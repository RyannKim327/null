type Graph = {
    [key: string]: string[];
};

function bidirectionalSearch(graph: Graph, start: string, goal: string): string[] | null {
    if (start === goal) return [start];

    const forwardQueue: string[] = [start];
    const backwardQueue: string[] = [goal];

    const forwardVisited: Set<string> = new Set();
    const backwardVisited: Set<string> = new Set();

    // To track the path
    const forwardParent: Map<string, string | null> = new Map();
    const backwardParent: Map<string, string | null> = new Map();

    forwardVisited.add(start);
    backwardVisited.add(goal);
    forwardParent.set(start, null);
    backwardParent.set(goal, null);

    while (forwardQueue.length > 0 && backwardQueue.length > 0) {
        // Extend the forward search
        if (expandSearch(graph, forwardQueue, forwardVisited, forwardParent, backwardVisited)) {
            return reconstructPath(forwardParent, backwardParent, start, goal);
        }

        // Extend the backward search
        if (expandSearch(graph, backwardQueue, backwardVisited, backwardParent, forwardVisited)) {
            return reconstructPath(forwardParent, backwardParent, start, goal);
        }
    }

    return null; // No path found
}

function expandSearch(
    graph: Graph,
    queue: string[],
    visited: Set<string>,
    parent: Map<string, string | null>,
    otherVisited: Set<string>
): boolean {
    const current = queue.shift();
    if (!current) return false;

    for (const neighbor of graph[current]) {
        if (!visited.has(neighbor)) {
            visited.add(neighbor);
            parent.set(neighbor, current);
            queue.push(neighbor);

            // If this node has been visited by the other search
            if (otherVisited.has(neighbor)) {
                return true; // Path found
            }
        }
    }
    return false; // No path found through this expansion
}

function reconstructPath(
    forwardParent: Map<string, string | null>,
    backwardParent: Map<string, string | null>,
    start: string,
    goal: string
): string[] {
    const path: string[] = [];
    let current: string | null = goal;

    // Reconstruct path from goal to start
    while (current !== null) {
        path.push(current);
        current = backwardParent.get(current) || null;
    }
    path.reverse();

    // Add the path from start to the point of intersection
    current = forwardParent.get(path[0]) || null;

    while (current !== null) {
        path.unshift(current);
        current = forwardParent.get(current) || null;
    }

    return path;
}

// Example usage
const graph: Graph = {
    'A': ['B', 'C'],
    'B': ['A', 'D', 'E'],
    'C': ['A', 'F'],
    'D': ['B'],
    'E': ['B', 'F'],
    'F': ['C', 'E']
};

const start = 'A';
const goal = 'F';
const path = bidirectionalSearch(graph, start, goal);
console.log(path); // Output: ["A", "C", "F"] or similar path depending on the graph
