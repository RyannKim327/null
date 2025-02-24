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
        // Expand from the start
        const currentFromStart = queueFromStart.shift()!;
        visitedFromStart.add(currentFromStart);

        for (const neighbor of graph[currentFromStart] || []) {
            if (!visitedFromStart.has(neighbor)) {
                parentFromStart[neighbor] = currentFromStart;
                queueFromStart.push(neighbor);
                if (visitedFromGoal.has(neighbor)) {
                    return constructPath(neighbor, parentFromStart, parentFromGoal);
                }
            }
        }

        // Expand from the goal
        const currentFromGoal = queueFromGoal.shift()!;
        visitedFromGoal.add(currentFromGoal);

        for (const neighbor of graph[currentFromGoal] || []) {
            if (!visitedFromGoal.has(neighbor)) {
                parentFromGoal[neighbor] = currentFromGoal;
                queueFromGoal.push(neighbor);
                if (visitedFromStart.has(neighbor)) {
                    return constructPath(neighbor, parentFromStart, parentFromGoal);
                }
            }
        }
    }

    return null; // No path found
}

function constructPath(meetingPoint: string, parentFromStart: { [key: string]: string | null }, parentFromGoal: { [key: string]: string | null }): string[] {
    const path: string[] = [];
    
    // Construct path from start to meeting point
    let current: string | null = meetingPoint;
    while (current !== null) {
        path.push(current);
        current = parentFromStart[current];
    }
    path.reverse(); // Reverse to get the correct order

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
