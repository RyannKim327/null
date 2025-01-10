import sys

def bellman_ford(graph, source):
    """
    Finds shortest paths from a source vertex to all other vertices in a graph.

    Parameters:
    graph: A dictionary representing the graph, where each key is a vertex and each value is a list of (weight, destination) tuples.
    source: The source vertex.

    Returns:
    A dictionary of shortest paths, where each key is a destination vertex and each value is the shortest path from the source to that vertex.
    """

    # Initialize distances to infinity for all vertices except the source.
    distances = {vertex: sys.maxsize for vertex in graph}
    distances[source] = 0

    # Relax all edges |V| - 1 times. A simple shortest path from source to any other
    # vertex can have at most |V| - 1 edges
    for _ in range(len(graph) - 1):
        for vertex in graph:
            for weight, destination in graph[vertex]:
                if distances[destination] > distances[vertex] + weight:
                    distances[destination] = distances[vertex] + weight

    # Check for negative weight cycles. If there are negative weight cycles,
    # the algorithm will not terminate and we will get a runtime error.
    for vertex in graph:
        for weight, destination in graph[vertex]:
            if distances[destination] > distances[vertex] + weight:
                raise ValueError("Graph contains a negative weight cycle.")

    return distances
#include <vector>
#include <limits>

using namespace std;

struct Edge {
    int weight;
    int destination;
};

vector<int> bellman_ford(const vector<vector<Edge>>& graph, int source) {
    // Initialize distances to infinity for all vertices except the source.
    int num_vertices = graph.size();
    vector<int> distances(num_vertices, numeric_limits<int>::max());
    distances[source] = 0;

    // Relax all edges |V| - 1 times. A simple shortest path from source to any other
    // vertex can have at most |V| - 1 edges
    for (int i = 0; i < num_vertices - 1; i++) {
        for (int vertex = 0; vertex < num_vertices; vertex++) {
            for (const Edge& edge : graph[vertex]) {
                if (distances[edge.destination] > distances[vertex] + edge.weight) {
                    distances[edge.destination] = distances[vertex] + edge.weight;
                }
            }
        }
    }

    // Check for negative weight cycles. If there are negative weight cycles,
    // the algorithm will not terminate and we will get a runtime error.
    for (int vertex = 0; vertex < num_vertices; vertex++) {
        for (const Edge& edge : graph[vertex]) {
            if (distances[edge.destination] > distances[vertex] + edge.weight) {
                throw runtime_error("Graph contains a negative weight cycle.");
            }
        }
    }

    return distances;
}
import java.util.*;

public class BellmanFord {

    public static Map<Integer, Integer> bellmanFord(Map<Integer, List<Edge>> graph, int source) {
        // Initialize distances to infinity for all vertices except the source.
        int numVertices = graph.size();
        Map<Integer, Integer> distances = new HashMap<>();
        for (int vertex : graph.keySet()) {
            distances.put(vertex, Integer.MAX_VALUE);
        }
        distances.put(source, 0);

        // Relax all edges |V| - 1 times. A simple shortest path from source to any other
        // vertex can have at most |V| - 1 edges
        for (int i = 0; i < numVertices - 1; i++) {
            for (int vertex : graph.keySet()) {
                for (Edge edge : graph.get(vertex)) {
                    if (distances.get(edge.destination) > distances.get(vertex) + edge.weight) {
                        distances.put(edge.destination, distances.get(vertex) + edge.weight);
                    }
                }
            }
        }

        // Check for negative weight cycles. If there are negative weight cycles,
        // the algorithm will not terminate and we will get a runtime error.
        for (int vertex : graph.keySet()) {
            for (Edge edge : graph.get(vertex)) {
                if (distances.get(edge.destination) > distances.get(vertex) + edge.weight) {
                    throw new RuntimeException("Graph contains a negative weight cycle.");
                }
            }
        }

        return distances;
    }

    public static class Edge {
        int weight;
        int destination;

        public Edge(int weight, int destination) {
            this.weight = weight;
            this.destination = destination;
        }
    }
}
