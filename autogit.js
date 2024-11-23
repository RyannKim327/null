# Define a Node class representing each state in the search space
class Node:
    def __init__(self, state, parent=None, action=None, cost=0, heuristic=0):
        self.state = state         # State of the node
        self.parent = parent       # Parent node
        self.action = action       # Action that led to this node
        self.cost = cost           # Cost to reach this node from the initial state
        self.heuristic = heuristic # Heuristic value of the node

    def total_cost(self):
        return self.cost + self.heuristic

# A* search algorithm
def astar_search(initial_state, goal_test, successors, heuristic):
    open_list = [Node(initial_state, None, None, 0, heuristic(initial_state))]
    closed_list = []

    while open_list:
        current_node = min(open_list, key=lambda node: node.total_cost())
        open_list.remove(current_node)

        if goal_test(current_node.state):
            path = []
            while current_node:
                path.insert(0, (current_node.state, current_node.action))
                current_node = current_node.parent
            return path

        for action, successor_state, step_cost in successors(current_node.state):
            new_cost = current_node.cost + step_cost
            new_node = Node(successor_state, current_node, action, new_cost, heuristic(successor_state))

            if new_node in closed_list:
                continue

            if new_node not in open_list or new_node.total_cost() < [node.total_cost() for node in open_list if node == new_node][0]:
                open_list = [node for node in open_list if node != new_node]
                open_list.append(new_node)

        closed_list.append(current_node)

    return None
