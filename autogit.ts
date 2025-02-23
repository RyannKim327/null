type Graph = Map<string, string[]>;

const graph: Graph = new Map([
    ['A', ['B', 'C']],
    ['B', ['A', 'D', 'E']],
    ['C', ['A', 'F']],
    ['D', ['B']],
    ['E', ['B', 'F']],
    ['F', ['C', 'E']]
]);
function biDirectionalSearch(graph: Graph, start: string, goal: string): string[] | null {
    if (start === goal) return [start];

    const visitedFromStart = new Set<string>();
    const visitedFromGoal = new Set<string>();
    const queueFromStart: string[] = [start];
    const queueFromGoal: string[] = [goal];
    const parentFromStart: Map<string, string | null> = new Map();
    const parentFromGoal: Map<string, string | null> = new Map();

    parentFromStart.set(start, null);
    parentFromGoal.set(goal, null);

    while (queueFromStart.length > 0 && queueFromGoal.length > 0) {
        // Search from the start
        const currentFromStart = queueFromStart.shift()!;
        visitedFromStart.add(currentFromStart);

        for (const neighbor of graph.get(currentFromStart) || []) {
            if (!visitedFromStart.has(neighbor)) {
                parentFromStart.set(neighbor, currentFromStart);
                queueFromStart.push(neighbor);
                if (visitedFromGoal.has(neighbor)) {
                    return constructPath(neighbor, parentFromStart, parentFromGoal);
                }
            }
        }

        // Search from the goal
        const currentFromGoal = queueFromGoal.shift()!;
        visitedFromGoal.add(currentFromGoal);

        for (const neighbor of graph.get(currentFromGoal) || []) {
            if (!visitedFromGoal.has(neighbor)) {
                parentFromGoal.set(neighbor, currentFromGoal);
                queueFromGoal.push(neighbor);
                if (visitedFromStart.has(neighbor)) {
                    return constructPath(neighbor, parentFromStart, parentFromGoal);
                }
            }
        }
    }

    return null; // No path found
}

function constructPath(meetingPoint: string, parentFromStart: Map<string, string | null>, parentFromGoal: Map<string, string | null>): string[] {
    const path: string[] = [];
    
    // Construct path from start to meeting point
    let current: string | null = meetingPoint;
    while (current !== null) {
        path.push(current);
        current = parentFromStart.get(current) || null;
    }
    path.reverse();

    // Construct path from meeting point to goal
    current = parentFromGoal.get(meetingPoint) || null;
    while (current !== null) {
        path.push(current);
        current = parentFromGoal.get(current) || null;
    }

    return path;
}
const startNode = 'A';
const goalNode = 'F';
const path = biDirectionalSearch(graph, startNode, goalNode);

if (path) {
    console.log(`Path found: ${path.join(' -> ')}`);
} else {
    console.log('No path found');
}
