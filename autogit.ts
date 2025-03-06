type Graph = { [key: string]: string[] };

// Create a bi-directional search function
function biDirectionalSearch(graph: Graph, start: string, goal: string): string[] | null {
    // Edge case
    if (start === goal) return [start];

    const visitedFromStart = new Set<string>();
    const visitedFromGoal = new Set<string>();
    const queueFromStart = [start];
    const queueFromGoal = [goal];
    const parentFromStart: { [key: string]: string | null } = { [start]: null };
    const parentFromGoal: { [key: string]: string | null } = { [goal]: null };

    while (queueFromStart.length > 0 && queueFromGoal.length > 0) {
        // Search from the start
        const currentStart = queueFromStart.shift()!;
        if (visitedFromGoal.has(currentStart)) {
            return constructPath(currentStart, parentFromStart, parentFromGoal);
        }

        visitedFromStart.add(currentStart);
        for (const neighbor of graph[currentStart] || []) {
            if (!visitedFromStart.has(neighbor)) {
                queueFromStart.push(neighbor);
                visitedFromStart.add(neighbor);
                parentFromStart[neighbor] = currentStart;
            }
        }

        // Search from the goal
        const currentGoal = queueFromGoal.shift()!;
        if (visitedFromStart.has(currentGoal)) {
            return constructPath(currentGoal, parentFromGoal, parentFromStart);
        }

        visitedFromGoal.add(currentGoal);
        for (const neighbor of graph[currentGoal] || []) {
            if (!visitedFromGoal.has(neighbor)) {
                queueFromGoal.push(neighbor);
                visitedFromGoal.add(neighbor);
                parentFromGoal[neighbor] = currentGoal;
            }
        }
    }

    return null; // No path found
}

function constructPath(meetingPoint: string, parentFromStart: any, parentFromGoal: any): string[] {
    const path: string[] = [];
    
    // Build path from start to meeting point
    let current: string | null = meetingPoint;
    while (current !== null) {
        path.push(current);
        current = parentFromStart[current];
    }
  
    path.reverse(); // Reverse to get the correct order
  
    // Build path from meeting point to goal
    current = parentFromGoal[meetingPoint];
    while (current !== null) {
        path.push(current);
        current = parentFromGoal[current];
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

const path = biDirectionalSearch(graph, 'A', 'F');
console.log(path); // Output: ['A', 'C', 'F'] or ['A', 'B', 'E', 'F']
