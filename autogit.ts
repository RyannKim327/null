class Node {
    public name: string;
    public cost: number; // g(n) - cost from start node
    public heuristic: number; // h(n) - estimated cost to goal
    public totalCost: number; // f(n) - total cost (g(n) + h(n))
    public parent: Node | null;

    constructor(name: string, heuristic: number) {
        this.name = name;
        this.cost = Infinity; // start with infinite cost
        this.heuristic = heuristic;
        this.totalCost = Infinity;
        this.parent = null;
    }
}

class AStar {
    private startNode: Node;
    private goalNode: Node;
    private openList: Node[];
    private closedList: Node[];

    constructor(startNode: Node, goalNode: Node) {
        this.startNode = startNode;
        this.goalNode = goalNode;
        this.openList = [];
        this.closedList = [];
    }

    public findPath(): Node[] {
        this.startNode.cost = 0;
        this.startNode.totalCost = this.startNode.heuristic;
        this.openList.push(this.startNode);

        while (this.openList.length > 0) {
            // Sort the open list to get the node with the lowest total cost
            this.openList.sort((a, b) => a.totalCost - b.totalCost);
            const currentNode = this.openList.shift()!;

            // Check if we reached the goal
            if (currentNode.name === this.goalNode.name) {
                return this.reconstructPath(currentNode);
            }

            this.closedList.push(currentNode);

            // Get neighbors of the current node (implement this according to your representation)
            const neighbors = this.getNeighbors(currentNode);

            for (let neighbor of neighbors) {
                if (this.closedList.includes(neighbor)) {
                    continue; // Ignore the neighbor which is already evaluated
                }

                const tentativeCost = currentNode.cost + this.getCost(currentNode, neighbor);

                if (!this.openList.includes(neighbor)) {
                    this.openList.push(neighbor); // Discover a new node
                } else if (tentativeCost >= neighbor.cost) {
                    continue; // This is not a better path
                }

                // This path is the best so far, record it
                neighbor.parent = currentNode;
                neighbor.cost = tentativeCost;
                neighbor.totalCost = neighbor.cost + neighbor.heuristic;
            }
        }

        return []; // Return an empty path if no path is found
    }

    private reconstructPath(node: Node): Node[] {
        const path: Node[] = [];
        let current: Node | null = node;
        while (current) {
            path.push(current);
            current = current.parent;
        }
        return path.reverse(); // Return the path from start to goal
    }

    private getNeighbors(node: Node): Node[] {
        // This method should return the neighbors of the given node.
        // Implement according to your node representation
        return [];
    }

    private getCost(from: Node, to: Node): number {
        // You can define the cost to move from one node to another.
        return 1; // Example: uniform cost for simplicity
    }
}

// Example usage:

// Heuristic values are just placeholders for testing
const startNode = new Node("A", 5);
const goalNode = new Node("B", 0);
const aStar = new AStar(startNode, goalNode);

// After implementing getNeighbors, you can find the path
const path = aStar.findPath();
console.log(path.map(node => node.name)); // Output the node names in the path
