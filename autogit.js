def depth_limited_search_iterative(start_node, depth_limit):
    stack = [(start_node, 0)]
    
    while stack:
        node, depth = stack.pop()
        
        if depth > depth_limit:
            continue
        
        if is_goal_state(node):
            return node
        
        # Generate child nodes
        for child in expand_node(node):
            stack.append((child, depth + 1))
    
    return None  # Goal state not found within depth limit
