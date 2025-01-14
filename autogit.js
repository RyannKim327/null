function TopologicalSort(graph):
    visited = set()
    ordering = []

    for node in graph:
        if node not in visited:
            DFS(node, visited, ordering)

    return ordering

function DFS(node, visited, ordering):
    visited.add(node)

    for neighbor in graph[node]:
        if neighbor not in visited:
            DFS(neighbor, visited, ordering)

    ordering.insert(0, node)
def topological_sort(graph):
    visited = set()
    ordering = []

    def dfs(node):
        visited.add(node)
        for neighbor in graph[node]:
            if neighbor not in visited:
                dfs(neighbor)
        ordering.insert(0, node)

    for node in graph:
        if node not in visited:
            dfs(node)

    return ordering

# Example usage:
graph = {
    'A': ['B', 'C'],
    'B': ['D', 'E'],
    'C': ['F'],
    'D': [],
    'E': ['F'],
    'F': []
}

ordering = topological_sort(graph)
print(ordering)  # Output: ['A', 'C', 'B', 'E', 'F', 'D']
import java.util.*;

public class TopologicalSort {
    public static List<String> topologicalSort(Map<String, List<String>> graph) {
        Set<String> visited = new HashSet<>();
        List<String> ordering = new ArrayList<>();

        for (String node : graph.keySet()) {
            if (!visited.contains(node)) {
                dfs(node, graph, visited, ordering);
            }
        }

        return ordering;
    }

    private static void dfs(String node, Map<String, List<String>> graph, Set<String> visited, List<String> ordering) {
        visited.add(node);

        for (String neighbor : graph.get(node)) {
            if (!visited.contains(neighbor)) {
                dfs(neighbor, graph, visited, ordering);
            }
        }

        ordering.add(0, node);
    }

    public static void main(String[] args) {
        Map<String, List<String>> graph = new HashMap<>();
        graph.put("A", Arrays.asList("B", "C"));
        graph.put("B", Arrays.asList("D", "E"));
        graph.put("C", Arrays.asList("F"));
        graph.put("D", new ArrayList<>());
        graph.put("E", Arrays.asList("F"));
        graph.put("F", new ArrayList<>());

        List<String> ordering = topologicalSort(graph);
        System.out.println(ordering);  // Output: [A, C, B, E, F, D]
    }
}
#include <iostream>
#include <vector>
#include <unordered_set>

using namespace std;

vector<string> topologicalSort(const unordered_map<string, vector<string>>& graph) {
    unordered_set<string> visited;
    vector<string> ordering;

    function<void(string)> dfs = [&graph, &visited, &ordering, &dfs](string node) {
        visited.insert(node);

        for (const string& neighbor : graph.at(node)) {
            if (visited.find(neighbor) == visited.end()) {
                dfs(neighbor);
            }
        }

        ordering.insert(ordering.begin(), node);
    };

    for (const auto& pair : graph) {
        if (visited.find(pair.first) == visited.end()) {
            dfs(pair.first);
        }
    }

    return ordering;
}

int main() {
    unordered_map<string, vector<string>> graph = {
        {"A", {"B", "C"}},
        {"B", {"D", "E"}},
        {"C", {"F"}},
        {"D", {}},
        {"E", {"F"}},
        {"F", {}}
    };

    vector<string> ordering = topologicalSort(graph);
    for (const string& node : ordering) {
        cout << node << " ";
    }
    cout << endl;  // Output: A C B E F D

    return 0;
}
function topologicalSort(graph) {
    const visited = new Set();
    const ordering = [];

    function dfs(node) {
        visited.add(node);

        for (const neighbor of graph[node]) {
            if (!visited.has(neighbor)) {
                dfs(neighbor);
            }
        }

        ordering.unshift(node);
    }

    for (const node in graph) {
        if (!visited.has(node)) {
            dfs(node);
        }
    }

    return ordering;
}

// Example usage:
const graph = {
    A: ['B
