function bidirectionalSearch(graph, start, goal) {
   const forwardFrontierSet = new Set();
   const backwardFrontierSet = new Set();
   const forwardExpandedSet = new Set();
   const backwardExpandedSet = new Set();
   const forwardParentMap = new Map();
   const backwardParentMap = new Map();
   const forwardFrontierQueue = [];
   const backwardFrontierQueue = [];
 
   forwardFrontierQueue.push(start);
   backwardFrontierQueue.push(goal);
   forwardFrontierSet.add(start);
   backwardFrontierSet.add(goal);
 
   while (forwardFrontierQueue.length > 0 && backwardFrontierQueue.length > 0) {
   const forwardNode = forwardFrontierQueue.shift();
   forwardFrontierSet.delete(forwardNode);
   forwardExpandedSet.add(forwardNode);
 
   // Expand the forward node and check for intersection
   // with the backward expanded set
 
   const backwardNode = backwardFrontierQueue.shift();
   backwardFrontierSet.delete(backwardNode);
   backwardExpandedSet.add(backwardNode);
 
   // Expand the backward node and check for intersection
   // with the forward expanded set
 
   if (isIntersecting(forwardExpandedSet, backwardExpandedSet)) {
      const intersection = getIntersection(forwardExpandedSet, backwardExpandedSet);
      return getPath(forwardParentMap, backwardParentMap, intersection);
   }
   }
 
   return null; // No path found
}
