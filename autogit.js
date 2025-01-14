function A*(start, goal, graph)
    // Create an open set (priority queue) and a closed set
    open_set = PriorityQueue()
    closed_set = {}

    // Initialize the start node
    node = Node(start, 0, heuristic(start, goal))
    open_set.enqueue(node)

    while open_set is not empty
        // Get the node with the lowest f-score (estimated total cost)
        node = open_set.dequeue()

        // If we've reached the goal, construct the path
        if node.state == goal
            path = []
            while node.parent is not None
                path.append(node.state)
                node = node.parent
            return path.reverse()

        // Mark the node as explored
        closed_set[node.state] = true

        // Expand the node
        for neighbor in graph.neighbors(node.state)
            // Calculate the cost to reach the neighbor
            cost = node.cost + graph.edge_cost(node.state, neighbor)

            // Calculate the heuristic cost to reach the goal from the neighbor
            heuristic_cost = heuristic(neighbor, goal)

            // Calculate the f-score (estimated total cost)
            f_score = cost + heuristic_cost

            // Check if the neighbor is already explored
            if neighbor not in closed_set
                // Create a new node
                new_node = Node(neighbor, cost, f_score)
                new_node.parent = node

                // Enqueue the new node
                open_set.enqueue(new_node)

    // If the goal is not reachable, return failure
    return None
#include <queue>
#include <unordered_map>
#include <vector>

struct Node {
    State state;
    double cost;
    double f_score;
    Node* parent;
};

std::vector<State> AStar(State start, State goal, Graph graph) {
    std::priority_queue<Node> open_set;
    std::unordered_map<State, bool> closed_set;

    Node node(start, 0, heuristic(start, goal));
    open_set.push(node);

    while (!open_set.empty()) {
        node = open_set.top();
        open_set.pop();

        if (node.state == goal) {
            std::vector<State> path;
            while (node.parent != nullptr) {
                path.push_back(node.state);
                node = node.parent;
            }
            return path;
        }

        closed_set[node.state] = true;

        for (State neighbor : graph.neighbors(node.state)) {
            double cost = node.cost + graph.edge_cost(node.state, neighbor);
            double f_score = cost + heuristic(neighbor, goal);

            Node new_node(neighbor, cost, f_score);
            new_node.parent = &node;

            open_set.push(new_node);
        }
    }

    return {}; // failure
}
import java.util.PriorityQueue;
import java.util.HashMap;
import java.util.ArrayList;

class Node {
    State state;
    double cost;
    double fScore;
    Node parent;

    Node(State state, double cost, double fScore) {
        this.state = state;
        this.cost = cost;
        this.fScore = fScore;
    }
}

public class AStar {
    public static ArrayList<State> aStar(State start, State goal, Graph graph) {
        PriorityQueue<Node> openSet = new PriorityQueue<>();
        HashMap<State, Boolean> closedSet = new HashMap<>();

        Node node = new Node(start, 0, heuristic(start, goal));
        openSet.add(node);

        while (!openSet.isEmpty()) {
            node = openSet.poll();

            if (node.state.equals(goal)) {
                ArrayList<State> path = new ArrayList<>();
                while (node.parent != null) {
                    path.add(node.state);
                    node = node.parent;
                }
                return path;
            }

            closedSet.put(node.state, true);

            for (State neighbor : graph.getNeighbors(node.state)) {
                double cost = node.cost + graph.getEdgeCost(node.state, neighbor);
                double fScore = cost + heuristic(neighbor, goal);

                Node newNode = new Node(neighbor, cost, fScore);
                newNode.parent = node;

                openSet.add(newNode);
            }
        }

        return new ArrayList<>(); // failure
    }
}
import heapq

class Node:
    def __init__(self, state, cost, f_score):
        self.state = state
        self.cost = cost
        self.f_score = f_score
        self.parent = None

def a_star(start, goal, graph):
    open_set = []
    closed_set = {}

    node = Node(start, 0, heuristic(start, goal))
    heapq.heappush(open_set, node)

    while open_set:
        node = heapq.heappop(open_set)

        if node.state
