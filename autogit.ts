class Graph {
    private adjacencyList: Map<string, string[]>;

    constructor() {
        this.adjacencyList = new Map();
    }

    addEdge(vertex1: string, vertex2: string) {
        if (!this.adjacencyList.has(vertex1)) {
            this.adjacencyList.set(vertex1, []);
        }
        if (!this.adjacencyList.has(vertex2)) {
            this.adjacencyList.set(vertex2, []);
        }
        this.adjacencyList.get(vertex1)!.push(vertex2);
        this.adjacencyList.get(vertex2)!.push(vertex1); // For undirected graph
    }

    getNeighbors(vertex: string): string[] {
        return this.adjacencyList.get(vertex) || [];
    }

    getVertices(): string[] {
        return Array.from(this.adjacencyList.keys());
    }
}
function biDirectionalSearch(graph: Graph, start: string, goal: string): string[] | null {
    if (start === goal) return [start];

    const visitedFromStart = new Set<string>();
    const visitedFromGoal = new Set<string>();
    const queueFromStart: string[] = [start];
    const queueFromGoal: string[] = [goal];
    const parentFromStart: Map<string, string | null> = new Map();
    const parentFromGoal: Map<string, string | null> = new Map();

    visitedFromStart.add(start);
    visitedFromGoal.add(goal);
    parentFromStart.set(start, null);
    parentFromGoal.set(goal, null);

    while (queueFromStart.length > 0 && queueFromGoal.length > 0) {
        // Expand from the start
        const currentFromStart = queueFromStart.shift()!;
        for (const neighbor of graph.getNeighbors(currentFromStart)) {
            if (!visitedFromStart.has(neighbor)) {
                visitedFromStart.add(neighbor);
                parentFromStart.set(neighbor, currentFromStart);
                queueFromStart.push(neighbor);

                if (visitedFromGoal.has(neighbor)) {
                    return constructPath(neighbor, parentFromStart, parentFromGoal);
                }
            }
        }

        // Expand from the goal
        const currentFromGoal = queueFromGoal.shift()!;
        for (const neighbor of graph.getNeighbors(currentFromGoal)) {
            if (!visitedFromGoal.has(neighbor)) {
                visitedFromGoal.add(neighbor);
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
    const pathFromStart: string[] = [];
    let current: string | null = meetingPoint;

    while (current !== null) {
        pathFromStart.push(current);
        current = parentFromStart.get(current)!;
    }

    const pathFromGoal: string[] = [];
    current = parentFromGoal.get(meetingPoint)!;

    while (current !== null) {
        pathFromGoal.push(current);
        current = parentFromGoal.get(current)!;
    }

    return pathFromStart.reverse().concat(pathFromGoal);
}
const graph = new Graph();
graph.addEdge("A", "B");
graph.addEdge("A", "C");
graph.addEdge("B", "D");
graph.addEdge("C", "D");
graph.addEdge("D", "E");
graph.addEdge("E", "F");

const path = biDirectionalSearch(graph, "A", "F");
console.log(path); // Output: [ 'A', 'B', 'D', 'E', 'F' ] or similar path
