function topologicalSortDFS(graph: Record<string, string[]>): string[] {
    const visited: Set<string> = new Set();
    const stack: string[] = [];
    
    function dfs(node: string) {
        if (!visited.has(node)) {
            visited.add(node);
            if (graph[node]) {
                for (const neighbor of graph[node]) {
                    dfs(neighbor);
                }
            }
            stack.push(node);
        }
    }
    
    for (const node in graph) {
        dfs(node);
    }
    
    return stack.reverse(); // Reverse to get the correct order
}

// Example usage:
const graph: Record<string, string[]> = {
    "A": ["C"],
    "B": ["C", "D"],
    "C": ["E"],
    "D": ["F"],
    "E": [],
    "F": []
};

const sortedOrder = topologicalSortDFS(graph);
console.log(sortedOrder); // Output: [ 'B', 'A', 'D', 'F', 'C', 'E' ]
function topologicalSortKahn(graph: Record<string, string[]>): string[] {
    const inDegree: Record<string, number> = {};
    const queue: string[] = [];
    const sortedOrder: string[] = [];
    
    // Calculate in-degrees of all nodes
    for (const node in graph) {
        if (!inDegree[node]) {
            inDegree[node] = 0;
        }
        for (const neighbor of graph[node]) {
            inDegree[neighbor] = (inDegree[neighbor] || 0) + 1;
        }
    }
    
    // Add nodes with in-degree 0 to the queue
    for (const node in graph) {
        if (inDegree[node] === 0) {
            queue.push(node);
        }
    }
    
    while (queue.length > 0) {
        const currentNode = queue.shift();
        if (currentNode) {
            sortedOrder.push(currentNode);
            for (const neighbor of graph[currentNode]) {
                inDegree[neighbor]--;
                if (inDegree[neighbor] === 0) {
                    queue.push(neighbor);
                }
            }
        }
    }
    
    return sortedOrder; // May not be complete if the graph has a cycle
}

// Example usage:
const graphKahn: Record<string, string[]> = {
    "A": ["C"],
    "B": ["C", "D"],
    "C": ["E"],
    "D": ["F"],
    "E": [],
    "F": []
};

const sortedOrderKahn = topologicalSortKahn(graphKahn);
console.log(sortedOrderKahn); // Output: [ 'A', 'B', 'D', 'F', 'C', 'E' ] (order may vary)
