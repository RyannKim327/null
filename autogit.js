from collections import deque

def breadth_limited_search(start, goal, graph, limit):
    queue = deque([(start, 0)])  # (node, depth)
    visited = set()
    while queue:
        node, depth = queue.popleft()
        if node == goal:
            return True
        if depth > limit:
            continue
        visited.add(node)
        for neighbor in graph[node]:
            if neighbor not in visited:
                queue.append((neighbor, depth + 1))
    return False
import java.util.*;

public class BreadthLimitedSearch {
    public static boolean search(Node start, Node goal, Graph graph, int limit) {
        Queue<Node> queue = new LinkedList<>();
        queue.add(new NodeDepthPair(start, 0));
        Set<Node> visited = new HashSet<>();
        while (!queue.isEmpty()) {
            NodeDepthPair nodeDepthPair = queue.poll();
            Node node = nodeDepthPair.node;
            int depth = nodeDepthPair.depth;
            if (node.equals(goal)) {
                return true;
            }
            if (depth > limit) {
                continue;
            }
            visited.add(node);
            for (Node neighbor : graph.getNeighbors(node)) {
                if (!visited.contains(neighbor)) {
                    queue.add(new NodeDepthPair(neighbor, depth + 1));
                }
            }
        }
        return false;
    }

    static class NodeDepthPair {
        Node node;
        int depth;

        public NodeDepthPair(Node node, int depth) {
            this.node = node;
            this.depth = depth;
        }
    }
}
#include <queue>
#include <unordered_set>
#include <vector>

using namespace std;

bool breadthLimitedSearch(Node* start, Node* goal, Graph* graph, int limit) {
    queue<pair<Node*, int>> queue;
    queue.push(make_pair(start, 0));
    unordered_set<Node*> visited;
    while (!queue.empty()) {
        Node* node = queue.front().first;
        int depth = queue.front().second;
        queue.pop();
        if (node == goal) {
            return true;
        }
        if (depth > limit) {
            continue;
        }
        visited.insert(node);
        for (Node* neighbor : graph->getNeighbors(node)) {
            if (visited.find(neighbor) == visited.end()) {
                queue.push(make_pair(neighbor, depth + 1));
            }
        }
    }
    return false;
}
function breadthLimitedSearch(start, goal, graph, limit) {
    const queue = [{ node: start, depth: 0 }];
    const visited = new Set();
    while (queue.length > 0) {
        const { node, depth } = queue.shift();
        if (node === goal) {
            return true;
        }
        if (depth > limit) {
            continue;
        }
        visited.add(node);
        for (const neighbor of graph.getNeighbors(node)) {
            if (!visited.has(neighbor)) {
                queue.push({ node: neighbor, depth: depth + 1 });
            }
        }
    }
    return false;
}
