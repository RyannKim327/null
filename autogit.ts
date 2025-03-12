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
        if (visitedFromGoal.has(currentFromStart)) {
            return constructPath(currentFromStart, parentFromStart, parentFromGoal);
        }
        visitedFromStart.add(currentFromStart);

        for (const neighbor of graph.get(currentFromStart) || []) {
            if (!visitedFromStart.has(neighbor)) {
                queueFromStart.push(neighbor);
                visitedFromStart.add(neighbor);
                parentFromStart.set(neighbor, currentFromStart);
            }
        }

        // Search from the goal
        const currentFromGoal = queueFromGoal.shift()!;
        if (visitedFromStart.has(currentFromGoal)) {
            return constructPath(currentFromGoal, parentFromStart, parentFromGoal);
        }
        visitedFromGoal.add(currentFromGoal);

        for (const neighbor of graph.get(currentFromGoal) || []) {
            if (!visitedFromGoal.has(neighbor)) {
                queueFromGoal.push(neighbor);
                visitedFromGoal.add(neighbor);
                parentFromGoal.set(neighbor, currentFromGoal);
            }
        }
    }

    return null; // No path found
}

function constructPath(meetingPoint: string, parentFromStart: Map<string, string | null>, parentFromGoal: Map<string, string | null>): string[] {
    const pathFromStart: string[] = [];
    let current: string | null = meetingPoint;

    while (current !== null) {
        pathFromStart.push(current);
        current = parentFromStart.get(current) || null;
    }

    const pathFromGoal: string[] = [];
    current = parentFromGoal.get(meetingPoint) || null;

    while (current !== null) {
        pathFromGoal.push(current);
        current = parentFromGoal.get(current) || null;
    }

    return pathFromStart.reverse().concat(pathFromGoal);
}
const startNode = 'A';
const goalNode = 'F';
const path = biDirectionalSearch(graph, startNode, goalNode);

if (path) {
    console.log(`Path found: ${path.join(' -> ')}`);
} else {
    console.log('No path found.');
}
