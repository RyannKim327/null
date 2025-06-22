type Graph = { [key: string]: string[] };

function dfsRecursive(graph: Graph, startNode: string, visited: Set<string> = new Set()): void {
    // Mark the current node as visited
    console.log(startNode); // Process the node (e.g., print it)
    visited.add(startNode);

    // Recur for all adjacent nodes
    for (const neighbor of graph[startNode] || []) {
        if (!visited.has(neighbor)) {
            dfsRecursive(graph, neighbor, visited);
        }
    }
}

// Example usage:
const graph: Graph = {
    A: ['B', 'C'],
    B: ['A', 'D', 'E'],
    C: ['A', 'F'],
    D: ['B'],
    E: ['B', 'F'],
    F: ['C', 'E']
};

console.log("DFS Recursive:");
dfsRecursive(graph, 'A');
function dfsIterative(graph: Graph, startNode: string): void {
    const stack: string[] = [startNode]; // Initialize stack with the start node
    const visited: Set<string> = new Set(); // Track visited nodes

    while (stack.length > 0) {
        const currentNode = stack.pop()!; // Pop the top node from the stack

        if (!visited.has(currentNode)) {
            console.log(currentNode); // Process the node (e.g., print it)
            visited.add(currentNode);

            // Push unvisited neighbors onto the stack (in reverse order for correct DFS order)
            const neighbors = graph[currentNode] || [];
            for (let i = neighbors.length - 1; i >= 0; i--) {
                const neighbor = neighbors[i];
                if (!visited.has(neighbor)) {
                    stack.push(neighbor);
                }
            }
        }
    }
}

// Example usage:
console.log("DFS Iterative:");
dfsIterative(graph, 'A');
type Graph = { [key: string]: string[] };

// Recursive DFS
function dfsRecursive(graph: Graph, startNode: string, visited: Set<string> = new Set()): void {
    console.log(startNode);
    visited.add(startNode);
    for (const neighbor of graph[startNode] || []) {
        if (!visited.has(neighbor)) {
            dfsRecursive(graph, neighbor, visited);
        }
    }
}

// Iterative DFS
function dfsIterative(graph: Graph, startNode: string): void {
    const stack: string[] = [startNode];
    const visited: Set<string> = new Set();
    while (stack.length > 0) {
        const currentNode = stack.pop()!;
        if (!visited.has(currentNode)) {
            console.log(currentNode);
            visited.add(currentNode);
            const neighbors = graph[currentNode] || [];
            for (let i = neighbors.length - 1; i >= 0; i--) {
                const neighbor = neighbors[i];
                if (!visited.has(neighbor)) {
                    stack.push(neighbor);
                }
            }
        }
    }
}

// Example graph
const graph: Graph = {
    A: ['B', 'C'],
    B: ['A', 'D', 'E'],
    C: ['A', 'F'],
    D: ['B'],
    E: ['B', 'F'],
    F: ['C', 'E']
};

console.log("DFS Recursive:");
dfsRecursive(graph, 'A');

console.log("DFS Iterative:");
dfsIterative(graph, 'A');
