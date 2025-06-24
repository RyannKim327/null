type Graph = Map<number, number[]>;

function biDirectionalSearch(graph: Graph, start: number, goal: number): number[] | null {
    // Helper function to perform BFS and return the path
    function bfsStep(
        queue: number[],
        visited: Map<number, number>,
        otherVisited: Map<number, number>
    ): number[] | null {
        const current = queue.shift()!;
        for (const neighbor of graph.get(current) || []) {
            if (visited.has(neighbor)) continue; // Already visited
            visited.set(neighbor, current); // Mark parent for path reconstruction
            queue.push(neighbor);

            if (otherVisited.has(neighbor)) {
                // Intersection found
                return [neighbor, visited.get(neighbor)!, otherVisited.get(neighbor)!];
            }
        }
        return null;
    }

    // Initialize data structures for BFS
    const queueStart: number[] = [start];
    const queueGoal: number[] = [goal];

    const visitedStart = new Map<number, number>();
    const visitedGoal = new Map<number, number>();

    visitedStart.set(start, -1); // -1 indicates no parent
    visitedGoal.set(goal, -1);

    while (queueStart.length > 0 && queueGoal.length > 0) {
        // Perform one step of BFS from the start
        const resultFromStart = bfsStep(queueStart, visitedStart, visitedGoal);
        if (resultFromStart) {
            const [intersection, parentStart, parentGoal] = resultFromStart;
            return reconstructPath(intersection, parentStart, parentGoal, visitedStart, visitedGoal);
        }

        // Perform one step of BFS from the goal
        const resultFromGoal = bfsStep(queueGoal, visitedGoal, visitedStart);
        if (resultFromGoal) {
            const [intersection, parentStart, parentGoal] = resultFromGoal;
            return reconstructPath(intersection, parentStart, parentGoal, visitedStart, visitedGoal);
        }
    }

    return null; // No path found
}

// Helper function to reconstruct the path
function reconstructPath(
    intersection: number,
    parentStart: number,
    parentGoal: number,
    visitedStart: Map<number, number>,
    visitedGoal: Map<number, number>
): number[] {
    const pathStart: number[] = [];
    let current = intersection;
    while (current !== -1) {
        pathStart.push(current);
        current = visitedStart.get(current)!;
    }
    pathStart.reverse();

    const pathGoal: number[] = [];
    current = visitedGoal.get(intersection)!;
    while (current !== -1) {
        pathGoal.push(current);
        current = visitedGoal.get(current)!;
    }

    return [...pathStart, ...pathGoal];
}

// Example usage
const graph: Graph = new Map([
    [0, [1, 2]],
    [1, [0, 3]],
    [2, [0, 4]],
    [3, [1, 5]],
    [4, [2, 6]],
    [5, [3, 7]],
    [6, [4, 7]],
    [7, [5, 6]]
]);

const start = 0;
const goal = 7;

const path = biDirectionalSearch(graph, start, goal);
if (path) {
    console.log(`Path from ${start} to ${goal}:`, path);
} else {
    console.log(`No path found from ${start} to ${goal}`);
}
Path from 0 to 7: [0, 1, 3, 5, 7]
