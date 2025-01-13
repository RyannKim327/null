#include <iostream>
#include <vector>
#include <limits>

using namespace std;

void bellmanFord(vector<vector<pair<int, int>>> graph, int src, int V, int E) {
    vector<int> dist(V, numeric_limits<int>::max());
    dist[src] = 0;

    for (int i = 1; i <= V - 1; i++) {
        for (int j = 0; j < E; j++) {
            int u = graph[j][0].first;
            int v = graph[j][0].second;
            int w = graph[j][1];

            if (dist[u] != numeric_limits<int>::max() && dist[u] + w < dist[v])
                dist[v] = dist[u] + w;
        }
    }

    // Check for negative-weight cycles
    for (int j = 0; j < E; j++) {
        int u = graph[j][0].first;
        int v = graph[j][0].second;
        int w = graph[j][1];

        if (dist[u] != numeric_limits<int>::max() && dist[u] + w < dist[v])
            cout << "Graph contains negative-weight cycle" << endl;
    }

    // Print shortest distances
    cout << "Vertex\tDistance from Source" << endl;
    for (int i = 0; i < V; i++)
        cout << i << "\t" << dist[i] << endl;
}

int main() {
    int V = 5; // Number of vertices
    int E = 8; // Number of edges
    vector<vector<pair<int, int>>> graph = {{{0, 1}, 5}, {{0, 2}, 3}, {{1, 3}, 6}, {{1, 2}, 2},
                                          {{2, 4}, 4}, {{2, 1}, 1}, {{2, 3}, 7}, {{3, 4}, -1}};

    bellmanFord(graph, 0, V, E);

    return 0;
}
from typing import List, Tuple

def bellman_ford(graph: List[Tuple[int, int, int]], src: int, V: int) -> None:
    dist = [float('inf')] * V
    dist[src] = 0

    for _ in range(V - 1):
        for u, v, w in graph:
            if dist[u] != float('inf') and dist[u] + w < dist[v]:
                dist[v] = dist[u] + w

    # Check for negative-weight cycles
    for u, v, w in graph:
        if dist[u] != float('inf') and dist[u] + w < dist[v]:
            print("Graph contains negative-weight cycle")
            return

    # Print shortest distances
    print("Vertex\tDistance from Source")
    for i, d in enumerate(dist):
        print(f"{i}\t{d}")

if __name__ == "__main__":
    V = 5  # Number of vertices
    graph = [(0, 1, 5), (0, 2, 3), (1, 3, 6), (1, 2, 2),
             (2, 4, 4), (2, 1, 1), (2, 3, 7), (3, 4, -1)]

    bellman_ford(graph, 0, V)
import java.util.*;

public class BellmanFord {
    static class Edge {
        int src, dest, weight;
        Edge(int s, int d, int w) {
            src = s;
            dest = d;
            weight = w;
        }
    }

    static void bellmanFord(List<Edge> edges, int V, int E, int src) {
        int[] dist = new int[V];
        Arrays.fill(dist, Integer.MAX_VALUE);
        dist[src] = 0;

        for (int i = 1; i <= V - 1; i++) {
            for (Edge edge : edges) {
                int u = edge.src;
                int v = edge.dest;
                int w = edge.weight;

                if (dist[u] != Integer.MAX_VALUE && dist[u] + w < dist[v])
                    dist[v] = dist[u] + w;
            }
        }

        // Check for negative-weight cycles
        for (Edge edge : edges) {
            int u = edge.src;
            int v = edge.dest;
            int w = edge.weight;

            if (dist[u] != Integer.MAX_VALUE && dist[u] + w < dist[v]) {
                System.out.println
