function astar_search(start):
    add start to open list
    while open list is not empty:
        current = node from open list with the lowest f
        
        if current is goal node:
            return reconstruct_path(current)
        
        remove current from open list
        add current to closed list
        
        for each neighbor of current:
            if neighbor is in closed list:
                continue
            
            new_cost = current.g + distance(current, neighbor)
            if neighbor is not in open list or new_cost < neighbor.g:
                neighbor.g = new_cost
                neighbor.h = heuristic(neighbor)
                neighbor.f = neighbor.g + neighbor.h
                neighbor.parent = current
                
                if neighbor is not in open list:
                    add neighbor to open list
    
    return failure

function reconstruct_path(node):
    path = []
    while node is not null:
        add node to path
        node = node.parent
    reverse path
    return path
