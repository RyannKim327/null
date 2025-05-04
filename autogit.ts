type Graph = {
    [key: string]: string[];
};

function breadthFirstSearch(graph: Graph, startNode: string): string[] {
    const result: string[] = []; // To keep track of the nodes we've visited
    const queue: string[] = [startNode]; // Our queue for BFS
    const visited: Set<string> = new Set([startNode]); // Using a set to track visited nodes

    while (queue.length > 0) {
        const node = queue.shift()!; // Get the first node from the queue
        result.push(node); // Visit the node

        // Get the neighbors of the current node
        const neighbors = graph[node] || [];
        
        for (const neighbor of neighbors) {
            // If we haven't visited this neighbor yet
            if (!visited.has(neighbor)) {
                visited.add(neighbor); // Mark it as visited
                queue.push(neighbor); // Add to the queue
            }
        }
    }

    return result;
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

const traversalOrder = breadthFirstSearch(graph, 'A');
console.log(traversalOrder); // Output: [ 'A', 'B', 'C', 'D', 'E', 'F' ]
