type Graph = {
    [key: string]: string[];
};

function bidirectionalSearch(graph: Graph, start: string, goal: string): string[] | null {
    if (!graph[start] || !graph[goal]) {
        return null; // start or goal not in graph
    }

    const visitedFromStart = new Set<string>();
    const visitedFromGoal = new Set<string>();
    const queueFromStart: string[] = [start];
    const queueFromGoal: string[] = [goal];
    const parentFromStart: { [key: string]: string | null } = { [start]: null };
    const parentFromGoal: { [key: string]: string | null } = { [goal]: null };

    while (queueFromStart.length > 0 && queueFromGoal.length > 0) {
        // Search from the start
        const currentStart = queueFromStart.shift()!;
        if (visitedFromGoal.has(currentStart)) {
            return constructPath(currentStart, parentFromStart, parentFromGoal);
        }
        
        visitedFromStart.add(currentStart);
        for (const neighbor of graph[currentStart]) {
            if (!visitedFromStart.has(neighbor)) {
                queueFromStart.push(neighbor);
                parentFromStart[neighbor] = currentStart;
            }
        }

        // Search from the goal
        const currentGoal = queueFromGoal.shift()!;
        if (visitedFromStart.has(currentGoal)) {
            return constructPath(currentGoal, parentFromGoal, parentFromStart);
        }

        visitedFromGoal.add(currentGoal);
        for (const neighbor of graph[currentGoal]) {
            if (!visitedFromGoal.has(neighbor)) {
                queueFromGoal.push(neighbor);
                parentFromGoal[neighbor] = currentGoal;
            }
        }
    }

    return null; // No path found
}

function constructPath(meetingPoint: string, parentFromStart: { [key: string]: string | null }, parentFromGoal: { [key: string]: string | null }): string[] {
    const path = [];
    
    // Backtrack from the meeting point to the start
    let current: string | null = meetingPoint;
    while (current !== null) {
        path.push(current);
        current = parentFromStart[current];
    }
    
    path.reverse(); // Reverse the path to get it from start to meeting point

    // Backtrack from the meeting point to the goal
    current = parentFromGoal[meetingPoint];
    while (current !== null) {
        path.push(current);
        current = parentFromGoal[current];
    }

    return path;
}

// Example graph and usage
const graph: Graph = {
    A: ['B', 'C'],
    B: ['A', 'D', 'E'],
    C: ['A', 'F'],
    D: ['B', 'G'],
    E: ['B'],
    F: ['C'],
    G: ['D']
};

const path = bidirectionalSearch(graph, 'A', 'G');
console.log(path); // Example output: [ 'A', 'B', 'D', 'G' ]
