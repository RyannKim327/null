def depth_limited_search(root, goal, limit):
    stack = [(root, 0)]  # Initialize stack with root node and depth 0

    while stack:
        node, depth = stack.pop()

        if node == goal:
            return node  # Return the goal node

        if depth < limit:
            children = get_children(node)  # Function to get children of a node
            for child in children:
                stack.append((child, depth + 1))

    return None  # Goal not found within the depth limit

# Example usage:
# result = depth_limited_search(start_node, goal_node, depth_limit)
