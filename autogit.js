procedure A*(start, goal)
    openList := {start}
    closedList := {}
    
    while openList is not empty
        current := node in openList with the lowest f_cost
        
        if current == goal
            return reconstruct_path(current)
        
        remove current from openList
        add current to closedList
        
        foreach neighbor of current
            if neighbor in closedList
                continue
            
            tentative_g_cost := current.g_cost + movement_cost(current, neighbor)
            
            if neighbor not in openList or tentative_g_cost < neighbor.g_cost
                neighbor.parent := current
                neighbor.g_cost := tentative_g_cost
                neighbor.h_cost := heuristic_cost(neighbor, goal)
                neighbor.f_cost := neighbor.g_cost + neighbor.h_cost
                
                if neighbor not in openList
                    add neighbor to openList
    
    return failure
