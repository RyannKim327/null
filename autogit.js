# Define Node class
class Node:
    def __init__(self, state, parent=None, cost=0, heuristic=0):
        self.state = state
        self.parent = parent
        self.cost = cost
        self.heuristic = heuristic

# A* search function
def astar_search(start_state, goal_state, heuristic_func):
    start_node = Node(start_state)
    start_node.heuristic = heuristic_func(start_state, goal_state)
    
    open_list = [start_node]
    closed_list = []
    
    while open_list:
        current_node = min(open_list, key=lambda x: x.cost + x.heuristic)
        open_list.remove(current_node)
        closed_list.append(current_node)
        
        if current_node.state == goal_state:
            path = []
            while current_node:
                path.insert(0, current_node.state)
                current_node = current_node.parent
            return path
        
        for neighbor_state in get_neighbors(current_node.state):
            neighbor_node = Node(neighbor_state, parent=current_node)
            neighbor_node_cost = current_node.cost + cost_func(current_node.state, neighbor_state)
            neighbor_node.heuristic = heuristic_func(neighbor_state, goal_state)
            
            if any(node for node in open_list if node.state == neighbor_state and node.cost <= neighbor_node_cost):
                continue
            
            if any(node for node in closed_list if node.state == neighbor_state and node.cost <= neighbor_node_cost):
                continue
            
            open_list.append(neighbor_node)
    
    return None
