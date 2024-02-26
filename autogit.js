function beamSearch(startNode, beamWidth, maxDepth, getSuccessors, isGoal) {
    let beam = [startNode];
    
    for (let depth = 0; depth < maxDepth; depth++) {
        let newBeam = [];
        
        for (let node of beam) {
            let successors = getSuccessors(node);
            
            for (let successor of successors) {
                newBeam.push(successor);
            }
        }
        
        newBeam.sort((a, b) => a.cost - b.cost);
        newBeam = newBeam.slice(0, beamWidth);
        
        beam = newBeam;
        
        let found = beam.find(node => isGoal(node));
        if (found) {
            return found;
        }
    }
    
    return null;
}
