def astar(start, goal):
    open_list = [start]  # nodes to be evaluated
    closed_list = []  # nodes already evaluated
    
    while open_list:
        current_node = min(open_list, key=lambda node: node.f)
        open_list.remove(current_node)
        
        if current_node == goal:
            return reconstruct_path(current_node)
        
        closed_list.append(current_node)
        
        for neighbor in get_neighbors(current_node):
            if neighbor in closed_list:
                continue

            neighbor.g = current_node.g + distance(current_node, neighbor)
            neighbor.h = heuristic(neighbor, goal)
            neighbor.f = neighbor.g + neighbor.h

            if neighbor in open_list:
                existing_neighbor = open_list[open_list.index(neighbor)]
                if neighbor.g >= existing_neighbor.g:
                    continue

            open_list.append(neighbor)
    
    return None  # No path found

def reconstruct_path(node):
    path = [node]
    while node.parent:
        node = node.parent
        path.insert(0, node)
    return path
