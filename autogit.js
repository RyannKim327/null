function depthLimitedSearch(node, depthLimit)
    return recursiveDLS(node, depthLimit)

function recursiveDLS(node, depthLimit)
    if node is a goal state
        return node
    else if depthLimit is 0
        return "cutoff"
    else
        cutoffOccurred = false
        for each child of node
            result = recursiveDLS(child, depthLimit - 1)
            if result is "cutoff"
                cutoffOccurred = true
            else if result is not "failure"
                return result
        
        if cutoffOccurred
            return "cutoff"
        else
            return "failure"
