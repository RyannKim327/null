def depth_limited_search(node, goal, depth_limit):
    return recursive_dls(node, goal, depth_limit)

def recursive_dls(node, goal, depth_limit):
    if node.state == goal:
        return node
    elif depth_limit == 0:
        return 'cutoff'
    else:
        cutoff_occurred = False
        for child in node.expand():
            result = recursive_dls(child, goal, depth_limit - 1)
            if result == 'cutoff':
                cutoff_occurred = True
            elif result is not None:
                return result
        if cutoff_occurred:
            return 'cutoff'
        else:
            return None
