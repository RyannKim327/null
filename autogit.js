def depth_limited_search(state, goal, actions, result, depth_limit):
    if state == goal:
        return [state]
    if depth_limit == 0:
        return None

    for action in actions(state):
        next_state = result(state, action)
        path = depth_limited_search(next_state, goal, actions, result, depth_limit - 1)
        if path is not None:
            return [state] + path

    return None

# Example usage
def actions(state):
    return ['left', 'right']

def result(state, action):
    if action == 'left':
        return state - 1
    elif action == 'right':
        return state + 1

start_state = 0
goal_state = 5
depth_limit = 3

path = depth_limited_search(start_state, goal_state, actions, result, depth_limit)
if path is not None:
    print("Path found:", path)
else:
    print("Path not found within depth limit.")
