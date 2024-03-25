function bellmanFord(edges, N, start) {
    let dist = Array(N).fill(Infinity);
    dist[start] = 0;

    for (let i = 0; i < N - 1; i++) {
        for (const edge of edges) {
            const [src, dest, weight] = edge;
            if (dist[src] + weight < dist[dest]) {
                dist[dest] = dist[src] + weight;
            }
        }
    }

    for (const edge of edges) {
        const [src, dest, weight] = edge;
        if (dist[src] + weight < dist[dest]) {
            return "Graph contains negative weight cycle";
        }
    }

    return dist;
}

// Example
const edges = [
    [0, 1, -1],
    [0, 2, 4],
    [1, 2, 3],
    [1, 3, 2],
    [1, 4, 2],
    [3, 2, 5],
    [3, 1, 1],
    [4, 3, -3]
];
const N = 5;
const start = 0;

const shortestPaths = bellmanFord(edges, N, start);
console.log(shortestPaths);
