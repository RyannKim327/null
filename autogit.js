function breadthLimitedSearch(graph, startNode, limit) {
    if (!graph || !startNode || limit <= 0) {
        return null;
    }

    let visited = new Set();
    let queue = [[startNode, 0]];

    while (queue.length > 0) {
        let [node, depth] = queue.shift();

        if (depth <= limit) {
            if (!visited.has(node)) {
                visited.add(node);
                console.log(`Visiting node: ${node}`);

                if (graph[node]) {
                    for (let neighbor of graph[node]) {
                        if (!visited.has(neighbor)) {
                            queue.push([neighbor, depth + 1]);
                        }
                    }
                }
            }
        }
    }
}

// Example graph
const graph = {
    A: ['B', 'C'],
    B: ['A', 'D', 'E'],
    C: ['A', 'F'],
    D: ['B'],
    E: ['B'],
    F: ['C']
};

// Perform breadth-limited search starting from node 'A' with limit 2
breadthLimitedSearch(graph, 'A', 2);
