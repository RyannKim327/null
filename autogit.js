def depth_limited_search_iterative(problem, limit):
    stack = [(problem.get_start_state(), 0)]
    
    while stack:
        state, depth = stack.pop()
        
        if problem.is_goal_state(state):
            return state
        
        if depth < limit:
            successors = problem.get_successors(state)
            for successor in successors:
                stack.append((successor, depth + 1))
    
    return None
