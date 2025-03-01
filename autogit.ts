class Graph {
    private adjList: Map<number, number[]>;

    constructor() {
        this.adjList = new Map();
    }

    // Add a directed edge from source to destination
    addEdge(source: number, destination: number) {
        if (!this.adjList.has(source)) {
            this.adjList.set(source, []);
        }
        this.adjList.get(source)!.push(destination);
    }

    // Perform DFS to get topological sort
    private topologicalSortUtil(v: number, visited: boolean[], stack: number[]) {
        // Mark the current node as visited
        visited[v] = true;

        // Recur for all the vertices adjacent to this vertex
        const neighbors = this.adjList.get(v) || [];
        for (const neighbor of neighbors) {
            if (!visited[neighbor]) {
                this.topologicalSortUtil(neighbor, visited, stack);
            }
        }

        // Push current vertex to stack which stores result
        stack.push(v);
    }

    topologicalSort(): number[] {
        const visited: boolean[] = new Array(this.adjList.size).fill(false);
        const stack: number[] = [];

        // Call the recursive helper function to store Topological Sort
        // starting from all vertices one by one
        for (let i = 0; i < this.adjList.size; i++) {
            if (!visited[i]) {
                this.topologicalSortUtil(i, visited, stack);
            }
        }

        // Return the contents of stack in reverse order
        return stack.reverse();
    }
}

// Example Usage
const graph = new Graph();
graph.addEdge(5, 2);
graph.addEdge(5, 0);
graph.addEdge(4, 0);
graph.addEdge(4, 1);
graph.addEdge(2, 3);
graph.addEdge(3, 1);

const sortedOrder = graph.topologicalSort();
console.log("Topological Sort: ", sortedOrder);
class GraphKahn {
    private adjList: Map<number, number[]>;

    constructor() {
        this.adjList = new Map();
    }

    // Add a directed edge from source to destination
    addEdge(source: number, destination: number) {
        if (!this.adjList.has(source)) {
            this.adjList.set(source, []);
        }
        this.adjList.get(source)!.push(destination);
    }

    topologicalSort(): number[] {
        const inDegree: number[] = new Array(this.adjList.size).fill(0);
        const result: number[] = [];

        // Calculate in-degree (number of incoming edges) for each node
        for (const [u, neighbors] of this.adjList.entries()) {
            for (const v of neighbors) {
                inDegree[v]++;
            }
        }

        // Queue for nodes with in-degree 0
        const zeroInDegreeQueue: number[] = [];
        for (let i = 0; i < inDegree.length; i++) {
            if (inDegree[i] === 0) {
                zeroInDegreeQueue.push(i);
            }
        }

        // Process nodes with in-degree 0
        while (zeroInDegreeQueue.length > 0) {
            const node = zeroInDegreeQueue.shift()!;
            result.push(node);

            const neighbors = this.adjList.get(node) || [];
            for (const neighbor of neighbors) {
                inDegree[neighbor]--;
                if (inDegree[neighbor] === 0) {
                    zeroInDegreeQueue.push(neighbor);
                }
            }
        }

        // Ensure we have a valid topological sort (check if all nodes are processed)
        if (result.length !== this.adjList.size) {
            throw new Error('Graph has at least one cycle, topological sort not possible');
        }

        return result;
    }
}

// Example Usage
const graphKahn = new GraphKahn();
graphKahn.addEdge(5, 2);
graphKahn.addEdge(5, 0);
graphKahn.addEdge(4, 0);
graphKahn.addEdge(4, 1);
graphKahn.addEdge(2, 3);
graphKahn.addEdge(3, 1);

const sortedOrderKahn = graphKahn.topologicalSort();
console.log("Topological Sort (Kahn's Algorithm): ", sortedOrderKahn);
