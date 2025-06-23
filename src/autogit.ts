type Graph = Map<number, number[]>;
function bidirectionalSearch(graph: Graph, start: number, goal: number): number[] | null {
    // Check if start and goal are the same
    if (start === goal) return [start];

    // Initialize queues and visited sets for both directions
    const queueStart: number[] = [start];
    const queueGoal: number[] = [goal];

    const visitedStart: Map<number, number[]> = new Map();
    const visitedGoal: Map<number, number[]> = new Map();

    visitedStart.set(start, [start]);
    visitedGoal.set(goal, [goal]);

    // Helper function to check if two paths meet
    function getPath(intersection: number): number[] {
        const pathFromStart = visitedStart.get(intersection)!;
        const pathToGoal = visitedGoal.get(intersection)!.slice(1); // Exclude the intersection node
        return [...pathFromStart, ...pathToGoal.reverse()];
    }

    // Perform the bi-directional search
    while (queueStart.length > 0 && queueGoal.length > 0) {
        // Expand the forward search
        const currentStart = queueStart.shift()!;
        for (const neighbor of graph.get(currentStart) || []) {
            if (!visitedStart.has(neighbor)) {
                const path = [...visitedStart.get(currentStart)!, neighbor];
                visitedStart.set(neighbor, path);
                queueStart.push(neighbor);

                // Check if this node has been visited by the backward search
                if (visitedGoal.has(neighbor)) {
                    return getPath(neighbor);
                }
            }
        }

        // Expand the backward search
        const currentGoal = queueGoal.shift()!;
        for (const neighbor of graph.get(currentGoal) || []) {
            if (!visitedGoal.has(neighbor)) {
                const path = [...visitedGoal.get(currentGoal)!, neighbor];
                visitedGoal.set(neighbor, path);
                queueGoal.push(neighbor);

                // Check if this node has been visited by the forward search
                if (visitedStart.has(neighbor)) {
                    return getPath(neighbor);
                }
            }
        }
    }

    // If no path is found, return null
    return null;
}
// Create a sample graph as an adjacency list
const graph: Graph = new Map([
    [0, [1, 2]],
    [1, [0, 3, 4]],
    [2, [0, 5]],
    [3, [1]],
    [4, [1, 5]],
    [5, [2, 4, 6]],
    [6, [5]]
]);

// Perform bi-directional search
const start = 0;
const goal = 6;
const path = bidirectionalSearch(graph, start, goal);

if (path) {
    console.log("Path found:", path);
} else {
    console.log("No path exists between the start and goal nodes.");
}
