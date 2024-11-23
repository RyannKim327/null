def depth_limited_search_iterative(node, goal_state, max_depth):
    stack = [(node, 0)]
    
    while stack:
        current_node, depth = stack.pop()
        
        if current_node.state == goal_state:
            return current_node
        
        if depth < max_depth:
            children = current_node.expand()
            for child in reversed(children):
                stack.append((child, depth + 1))
    
    return None
