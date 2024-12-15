def depth_limited_search_iterative(problem, depth_limit):
    for depth in range(1, depth_limit + 1):
        result = depth_limited_search(problem, depth)
        if result is not None:
            return result
    return None

def depth_limited_search(problem, depth):
    return recursive_dls(problem, problem.get_start_state(), depth)

def recursive_dls(problem, node, depth):
    if problem.is_goal(node):
        return node
    elif depth == 0:
        return None
    else:
        for action in problem.get_actions(node):
            child_node = problem.get_child_node(node, action)
            result = recursive_dls(problem, child_node, depth - 1)
            if result is not None:
                return result
    return None
