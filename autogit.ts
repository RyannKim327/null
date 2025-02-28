function topologicalSortKahn(vertices: number, edges: [number, number][]): number[] | null {
    const inDegree: number[] = Array(vertices).fill(0);
    const adjList: Map<number, number[]> = new Map();

    // Create the adjacency list and fill in-degree
    edges.forEach(([u, v]) => {
        if (!adjList.has(u)) adjList.set(u, []);
        adjList.get(u)!.push(v);
        inDegree[v]++;
    });

    const queue: number[] = [];
    
    // Enqueue nodes with in-degree of 0
    for (let i = 0; i < vertices; i++) {
        if (inDegree[i] === 0) {
            queue.push(i);
        }
    }

    const result: number[] = [];
    
    while (queue.length > 0) {
        const node = queue.shift()!;
        result.push(node);

        if (adjList.has(node)) {
            for (const neighbour of adjList.get(node)!) {
                inDegree[neighbour]--;
                if (inDegree[neighbour] === 0) {
                    queue.push(neighbour);
                }
            }
        }
    }

    // Check if there was a cycle
    if (result.length !== vertices) {
        return null; // graph has a cycle
    }
    
    return result;
}

// Example usage:
const edges: [number, number][] = [[5, 2], [5, 0], [4, 0], [4, 1], [2, 3], [3, 1]];
const numberOfVertices = 6;
const result = topologicalSortKahn(numberOfVertices, edges);
console.log(result); // Output could be [5, 4, 2, 3, 1, 0] or any valid topological order
function topologicalSortDFS(vertices: number, edges: [number, number][]): number[] | null {
    const adjList: Map<number, number[]> = new Map();
    for (const [u, v] of edges) {
        if (!adjList.has(u)) adjList.set(u, []);
        adjList.get(u)!.push(v);
    }

    const visited: boolean[] = Array(vertices).fill(false);
    const result: number[] = [];
    const tempStack: boolean[] = Array(vertices).fill(false);
    
    const dfs = (node: number): boolean => {
        if (tempStack[node]) return false; // cycle found
        if (visited[node]) return true; // already processed

        tempStack[node] = true;

        if (adjList.has(node)) {
            for (const neighbour of adjList.get(node)!) {
                if (!dfs(neighbour)) return false;
            }
        }

        visited[node] = true;
        tempStack[node] = false;
        result.push(node);
        return true;
    };

    for (let i = 0; i < vertices; i++) {
        if (!visited[i]) {
            if (!dfs(i)) return null; // graph has a cycle
        }
    }

    return result.reverse(); // reverse to get the correct order
}

// Example usage:
const edgesDFS: [number, number][] = [[5, 2], [5, 0], [4, 0], [4, 1], [2, 3], [3, 1]];
const resultDFS = topologicalSortDFS(numberOfVertices, edgesDFS);
console.log(resultDFS); // Output could be [0, 1, 3, 2, 4, 5] or any valid topological order
