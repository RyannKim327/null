def bi_directional_search(start, goal):
    # Initialize the forward and backward queues with the initial and goal states
    forward_queue = [start]
    backward_queue = [goal]
    
    # Dictionary to keep track of visited states from both directions
    visited_forward = {start: None}
    visited_backward = {goal: None}
    
    # Bi-directional search loop
    while forward_queue and backward_queue:
        # Expand states from the forward queue
        current_forward = forward_queue.pop(0)
        neighbors_forward = expand_state(current_forward)
        for neighbor in neighbors_forward:
            if neighbor not in visited_forward:
                visited_forward[neighbor] = current_forward
                forward_queue.append(neighbor)
            
        # Check for a common state
        for state in backward_queue:
            if state in visited_forward:
                path = []
                while state:
                    path.append(state)
                    state = visited_forward[state]
                path.reverse()
                state = visited_forward[path[-1]]
                while state:
                    path.append(state)
                    state = visited_forward[state]
                return path
        
        # Expand states from the backward queue
        current_backward = backward_queue.pop(0)
        neighbors_backward = expand_state(current_backward)
        for neighbor in neighbors_backward:
            if neighbor not in visited_backward:
                visited_backward[neighbor] = current_backward
                backward_queue.append(neighbor)
            
        # Check for a common state
        for state in forward_queue:
            if state in visited_backward:
                path = []
                while state:
                    path.append(state)
                    state = visited_backward[state]
                path.reverse()
                state = visited_backward[path[-1]]
                while state:
                    path.append(state)
                    state = visited_backward[state]
                return path
    
    return None

# Helper function to expand a state (Replace this with your own implementation)
def expand_state(state):
    return [state + 1, state - 1]
    
# Example usage
start_state = 0
goal_state = 10
path = bi_directional_search(start_state, goal_state)
print("Optimal path:", path)
