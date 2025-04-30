class Node {
    constructor(
        public position: number[],
        public g: number = 0, // cost from start to this node
        public h: number = 0, // heuristic estimate to goal
        public f: number = 0, // total cost
        public parent?: Node // to reconstruct the path
    ) {}

    // Calculate the f cost
    calculateF() {
        this.f = this.g + this.h;
    }
}

// Priority queue
class PriorityQueue {
    private elements: Node[] = [];

    public isEmpty(): boolean {
        return this.elements.length === 0;
    }

    public enqueue(node: Node): void {
        this.elements.push(node);
        this.elements.sort((a, b) => a.f - b.f); // sort by f cost
    }

    public dequeue(): Node | undefined {
        return this.elements.shift();
    }
}

// Heuristic function (Euclidean distance in this example)
function heuristic(a: number[], b: number[]): number {
    return Math.sqrt(Math.pow(a[0] - b[0], 2) + Math.pow(a[1] - b[1], 2));
}

// A* algorithm
function aStar(start: number[], goal: number[], graph: number[][]): Node[] | null {
    const openSet = new PriorityQueue();
    const closedSet: Set<string> = new Set();

    // Initialize start node
    const startNode = new Node(start);
    startNode.h = heuristic(start, goal);
    startNode.calculateF();

    openSet.enqueue(startNode);

    while (!openSet.isEmpty()) {
        const currentNode = openSet.dequeue();

        // Check if we reached the goal
        if (!currentNode || currentNode.position[0] === goal[0] && currentNode.position[1] === goal[1]) {
            const path: Node[] = [];
            let temp: Node | undefined = currentNode;

            while (temp) {
                path.push(temp);
                temp = temp.parent;
            }

            return path.reverse(); // return reversed path
        }

        closedSet.add(currentNode.position.toString());

        // Loop through neighbors (replace this with actual neighbor fetching logic from the graph)
        const neighbors = getNeighbors(currentNode.position, graph); // Define your neighbor logic here
        
        for (const neighborPos of neighbors) {
            const neighborStr = neighborPos.toString();
            if (closedSet.has(neighborStr)) {
                continue; // Ignore the neighbor which is already evaluated
            }

            const gScore = currentNode.g + 1; // Assuming cost between neighbors is 1
            let neighborNode = new Node(neighborPos);

            let inOpenSet = openSet.elements.find(n => n.position[0] === neighborNode.position[0] && n.position[1] === neighborNode.position[1]);

            if (!inOpenSet || gScore < inOpenSet.g) {
                neighborNode.g = gScore;
                neighborNode.h = heuristic(neighborNode.position, goal);
                neighborNode.calculateF();
                neighborNode.parent = currentNode;

                if (!inOpenSet) {
                    openSet.enqueue(neighborNode);
                }
            }
        }
    }

    return null; // Return null if no path is found
}

// Helper function to get neighbors (example logic)
function getNeighbors(position: number[], graph: number[][]): number[][] {
    // Replace with actual logic to return valid neighbor positions
    return [
        [position[0] + 1, position[1]], // right
        [position[0] - 1, position[1]], // left
        [position[0], position[1] + 1], // down
        [position[0], position[1] - 1]  // up
    ].filter(pos => {
        // Example boundary check, replace based on your graph structure
        return pos[0] >= 0 && pos[0] < graph.length && pos[1] >= 0 && pos[1] < graph[0].length;
    });
}

// Example Graph (2D array)
const graph = [
    [0, 0, 0, 0],
    [0, 1, 0, 0],
    [0, 0, 0, 0],
    [0, 1, 1, 0],
    [0, 0, 0, 0]
];

// Trying to find path from (0,0) to (4,3)
const start = [0, 0];
const goal = [4, 3];

const path = aStar(start, goal, graph);
if (path) {
    console.log("Path found:");
    path.forEach(node => console.log(node.position));
} else {
    console.log("No path found.");
}
