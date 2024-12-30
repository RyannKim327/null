def depth_limited_search(root, depth_limit):
    stack = [(root, 0)]

    while stack:
        node, depth = stack.pop()

        if depth > depth_limit:
            continue

        # Check if the node meets the search criteria
        if node_is_goal(node):
            return node

        # Generate child nodes and add them to the stack
        for child in generate_child_nodes(node):
            stack.append((child, depth + 1))

    return None
