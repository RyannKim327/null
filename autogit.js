def depth_limited_search(state, depth_limit):
    if is_goal_state(state):
        return state
    
    if depth_limit == 0:
        return None
    
    for next_state in generate_next_states(state):
        result = depth_limited_search(next_state, depth_limit - 1)
        if result is not None:
            return result
    
    return None
