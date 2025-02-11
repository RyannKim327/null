type Graph = { [key: string]: string[] };

function topologicalSortKahn(graph: Graph): string[] | null {
    const indegree: { [key: string]: number } = {};
    const result: string[] = [];
    const queue: string[] = [];
    
    // Step 1: Calculate indegrees
    for (const node in graph) {
        indegree[node] = 0; // Initialize indegree for each node
    }

    for (const node in graph) {
        for (const neighbor of graph[node]) {
            indegree[neighbor] = (indegree[neighbor] || 0) + 1; // Count the indegrees
        }
    }

    // Step 2: Initialize the queue with nodes having indegree of zero
    for (const node in indegree) {
        if (indegree[node] === 0) {
            queue.push(node);
        }
    }

    // Step 3: Process the queue
    while (queue.length > 0) {
        const currentNode = queue.shift();
        if (currentNode) {
            result.push(currentNode); // Add to topological sort
            for (const neighbor of graph[currentNode]) {
                indegree[neighbor]--; // Remove the edge from currentNode to neighbor
                if (indegree[neighbor] === 0) {
                    queue.push(neighbor); // Add it to the queue if indegree becomes zero
                }
            }
        }
    }

    // Step 4: Check if topological sort is possible (i.e., no cycle)
    if (result.length === Object.keys(graph).length) {
        return result;
    } else {
        return null; // Graph has a cycle
    }
}

// Example usage
const graph: Graph = {
    'A': ['B', 'C'],
    'B': ['D'],
    'C': ['D'],
    'D': ['E'],
    'E': []
};

const sorted = topologicalSortKahn(graph);
console.log(sorted); // Output may vary, e.g., ['A', 'B', 'C', 'D', 'E']
type GraphDFS = { [key: string]: string[] };

function topologicalSortDFS(graph: GraphDFS): string[] | null {
    const visited: { [key: string]: boolean } = {};
    const stack: string[] = [];
    const result: string[] = [];
    let hasCycle = false;

    function dfs(node: string): void {
        if (hasCycle) return; // Stop if cycle is detected

        visited[node] = true; // Mark the current node as visited

        if (graph[node]) {
            for (const neighbor of graph[node]) {
                if (!visited[neighbor]) {
                    dfs(neighbor);
                } else if (result.includes(neighbor) && !stack.includes(neighbor)) {
                    hasCycle = true; // Cycle detected
                    return;
                }
            }
        }

        stack.push(node); // Put the node in the stack after exploring its neighbors
    }

    // Start DFS from each node
    for (const node in graph) {
        if (!visited[node]) {
            dfs(node);
        }
    }

    // Reverse stack to get the correct order
    while (stack.length > 0) {
        result.push(stack.pop()!);
    }

    // If cycle detected, return null
    return hasCycle ? null : result;
}

// Example usage
const graphDFS: GraphDFS = {
    'A': ['B', 'C'],
    'B': ['D'],
    'C': ['D'],
    'D': ['E'],
    'E': []
};

const sortedDFS = topologicalSortDFS(graphDFS);
console.log(sortedDFS); // Output may vary, e.g., ['A', 'C', 'B', 'D', 'E']
