function dijkstra(graph, startNode) {
    const distances = {};
    const previous = {};
    const priorityQueue = new PriorityQueue();

    // Initialize distances and previous nodes
    for (let node in graph) {
        distances[node] = node === startNode ? 0 : Infinity;
        previous[node] = null;
        priorityQueue.enqueue(node, distances[node]);
    }

    while (!priorityQueue.isEmpty()) {
        const currentNode = priorityQueue.dequeue();

        for (let neighbor in graph[currentNode]) {
            let distance = distances[currentNode] + graph[currentNode][neighbor];
            if (distance < distances[neighbor]) {
                distances[neighbor] = distance;
                previous[neighbor] = currentNode;
                priorityQueue.enqueue(neighbor, distance);
            }
        }
    }

    return { distances, previous };
}

function shortestPath(graph, startNode, endNode) {
    const { distances, previous } = dijkstra(graph, startNode);
    const path = [endNode];
    let previousNode = previous[endNode];
    
    while (previousNode) {
        path.unshift(previousNode);
        previousNode = previous[previousNode];
    }

    return path;
}
