class Node {
    public name: string; // Name of the node
    public g: number; // Cost from start node to current node
    public h: number; // Heuristic cost from current node to goal node
    public f: number; // Total cost (g + h)
    public parent: Node | null; // Parent node in the path

    constructor(name: string, g: number = 0, h: number = 0, parent: Node | null = null) {
        this.name = name;
        this.g = g;
        this.h = h;
        this.f = g + h;
        this.parent = parent;
    }
}
type Graph = Record<string, { [key: string]: number }>;

function aStar(graph: Graph, start: string, goal: string, heuristic: (node: string) => number): string[] {
    const openSet: Node[] = [];
    const closedSet: Set<string> = new Set();
  
    const startNode = new Node(start, 0, heuristic(start));
    openSet.push(startNode);

    while (openSet.length > 0) {
        // Sort the open set by f value
        openSet.sort((a, b) => a.f - b.f);
        
        const currentNode = openSet.shift()!; // Get the node with the lowest f score
        
        // Goal check
        if (currentNode.name === goal) {
            return constructPath(currentNode);
        }

        closedSet.add(currentNode.name);

        // Explore neighbors
        for (const neighbor in graph[currentNode.name]) {
            if (closedSet.has(neighbor)) {
                continue; // Ignore already evaluated nodes
            }

            const gScore = currentNode.g + graph[currentNode.name][neighbor];
            const hScore = heuristic(neighbor);
            const fScore = gScore + hScore;

            // Check whether the node is in the open set and has a higher g score
            const existingNodeIndex = openSet.findIndex(node => node.name === neighbor);
            if (existingNodeIndex !== -1) {
                if (gScore < openSet[existingNodeIndex].g) {
                    openSet[existingNodeIndex].g = gScore;
                    openSet[existingNodeIndex].f = fScore;
                    openSet[existingNodeIndex].parent = currentNode;
                }
            } else {
                // Add new node to open set
                openSet.push(new Node(neighbor, gScore, hScore, currentNode));
            }
        }
    }

    return []; // Return an empty path if no path is found
}

function constructPath(node: Node): string[] {
    const path: string[] = [];
    let current: Node | null = node;

    while (current) {
        path.push(current.name);
        current = current.parent;
    }

    return path.reverse(); // Reverse to get the correct order from start to goal
}
const graph: Graph = {
    'A': { 'B': 1, 'C': 4 },
    'B': { 'A': 1, 'D': 2, 'E': 5 },
    'C': { 'A': 4, 'F': 1 },
    'D': { 'B': 2, 'E': 3, 'G': 1 },
    'E': { 'B': 5, 'D': 3, 'G': 2 },
    'F': { 'C': 1, 'G': 2 },
    'G': { 'D': 1, 'E': 2, 'F': 2 },
};

const heuristic = (node: string): number => {
    const heuristics: { [key: string]: number } = {
        'A': 7,
        'B': 6,
        'C': 2,
        'D': 1,
        'E': 0,
        'F': 3,
        'G': 0,
    };
    return heuristics[node] || Infinity;
};

const path = aStar(graph, 'A', 'E', heuristic);
console.log(path); // Output: ['A', 'B', 'D', 'E']
