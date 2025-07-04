class Graph {
    private adjacencyList: Map<number, number[]> = new Map();

    addVertex(vertex: number): void {
        this.adjacencyList.set(vertex, []);
    }

    addEdge(vertex1: number, vertex2: number): void {
        this.adjacencyList.get(vertex1)?.push(vertex2);
        this.adjacencyList.get(vertex2)?.push(vertex1); // For undirected graph
    }

    getVertices(): number[] {
        return Array.from(this.adjacencyList.keys());
    }
}
class Graph {
    // ... (previous code)

    dfsRecursive(start: number, visited: Set<number> = new Set()): void {
        visited.add(start);
        console.log(start); // Process the node

        const neighbors = this.adjacencyList.get(start) || [];
        for (const neighbor of neighbors) {
            if (!visited.has(neighbor)) {
                this.dfsRecursive(neighbor, visited);
            }
        }
    }
}
class Graph {
    // ... (previous code)

    dfsIterative(start: number): void {
        const stack: number[] = [start];
        const visited = new Set<number>();

        while (stack.length > 0) {
            const vertex = stack.pop()!;
            if (!visited.has(vertex)) {
                visited.add(vertex);
                console.log(vertex); // Process the node

                const neighbors = this.adjacencyList.get(vertex) || [];
                for (const neighbor of neighbors) {
                    if (!visited.has(neighbor)) {
                        stack.push(neighbor);
                    }
                }
            }
        }
    }
}
const graph = new Graph();
graph.addVertex(0);
graph.addVertex(1);
graph.addVertex(2);
graph.addVertex(3);
graph.addVertex(4);
graph.addEdge(0, 1);
graph.addEdge(0, 2);
graph.addEdge(1, 3);
graph.addEdge(1, 4);
graph.addEdge(2, 4);

// Perform DFS
console.log("DFS Recursive:");
graph.dfsRecursive(0);

console.log("DFS Iterative:");
graph.dfsIterative(0);
class TreeNode {
    value: number;
    left: TreeNode | null = null;
    right: TreeNode | null = null;

    constructor(value: number) {
        this.value = value;
    }
}
function dfsTree(node: TreeNode | null): void {
    if (node === null) return;

    console.log(node.value); // Process the node
    dfsTree(node.left);
    dfsTree(node.right);
}
const root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);

// Perform DFS
console.log("DFS on Tree:");
dfsTree(root);
