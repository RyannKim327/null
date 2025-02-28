type Graph = {
    [key: string]: string[];
};

function biDirectionalSearch(graph: Graph, start: string, goal: string): string[] | null {
    if (start === goal) return [start];

    const visitedFromStart = new Set<string>();
    const visitedFromGoal = new Set<string>();
    const queueFromStart: string[] = [start];
    const queueFromGoal: string[] = [goal];
    const parentFromStart: { [key: string]: string | null } = { [start]: null };
    const parentFromGoal: { [key: string]: string | null } = { [goal]: null };

    while (queueFromStart.length > 0 && queueFromGoal.length > 0) {
        // Search from the start
        const currentFromStart = queueFromStart.shift()!;
        if (visitedFromGoal.has(currentFromStart)) {
            return constructPath(currentFromStart, parentFromStart, parentFromGoal);
        }
        visitedFromStart.add(currentFromStart);

        for (const neighbor of graph[currentFromStart] || []) {
            if (!visitedFromStart.has(neighbor)) {
                queueFromStart.push(neighbor);
                visitedFromStart.add(neighbor);
                parentFromStart[neighbor] = currentFromStart;
            }
        }

        // Search from the goal
        const currentFromGoal = queueFromGoal.shift()!;
        if (visitedFromStart.has(currentFromGoal)) {
            return constructPath(currentFromGoal, parentFromStart, parentFromGoal);
        }
        visitedFromGoal.add(currentFromGoal);

        for (const neighbor of graph[currentFromGoal] || []) {
            if (!visitedFromGoal.has(neighbor)) {
                queueFromGoal.push(neighbor);
                visitedFromGoal.add(neighbor);
                parentFromGoal[neighbor] = currentFromGoal;
            }
        }
    }

    return null; // No path found
}

function constructPath(meetingPoint: string, parentFromStart: { [key: string]: string | null }, parentFromGoal: { [key: string]: string | null }): string[] {
    const path: string[] = [];
    let current: string | null = meetingPoint;

    // Construct path from start to meeting point
    while (current !== null) {
        path.push(current);
        current = parentFromStart[current];
    }
    path.reverse();

    // Construct path from meeting point to goal
    current = parentFromGoal[meetingPoint];
    while (current !== null) {
        path.push(current);
        current = parentFromGoal[current];
    }

    return path;
}
const graph: Graph = {
    A: ['B', 'C'],
    B: ['A', 'D', 'E'],
    C: ['A', 'F'],
    D: ['B'],
    E: ['B', 'F'],
    F: ['C', 'E'],
};

const start = 'A';
const goal = 'F';
const path = biDirectionalSearch(graph, start, goal);

console.log(path); // Output: ['A', 'C', 'F'] or ['A', 'B', 'E', 'F']
