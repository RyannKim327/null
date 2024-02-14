function getNeighbors(node) {
  // return an array of neighboring nodes
}
function bidirectionalSearch(start, goal) {
   // set up data structures
   // create two queues/stacks for storing intermediate nodes
   let beginQueue = [start];
   let endQueue = [goal];
   // create two sets for storing visited nodes
   let beginVisited = new Set([start]);
   let endVisited = new Set([goal]);
   // create two dictionaries for storing parents of visited nodes
   let beginParents = new Map();
   let endParents = new Map();
  
   // search from both ends until queues are empty
   while (beginQueue.length > 0 && endQueue.length > 0) {
      // search from the start by expanding the front of the queue
      let currentBegin = beginQueue.shift();
      let neighborsBegin = getNeighbors(currentBegin);
  
      for (let neighbor of neighborsBegin) {
         if (!beginVisited.has(neighbor)) {
             beginQueue.push(neighbor);
             beginVisited.add(neighbor);
             beginParents.set(neighbor, currentBegin);
  
             // check if this node has been visited from the other end
             if (endVisited.has(neighbor)) {
               return getPath(neighbor, beginParents, endParents);
             }
         }
      }
  
      // search from the end by expanding the front of the queue
      let currentEnd = endQueue.shift();
      let neighborsEnd = getNeighbors(currentEnd);
  
      for (let neighbor of neighborsEnd) {
         if (!endVisited.has(neighbor)) {
             endQueue.push(neighbor);
             endVisited.add(neighbor);
             endParents.set(neighbor, currentEnd);
  
             // check if this node has been visited from the other end
             if (beginVisited.has(neighbor)) {
               return getPath(neighbor, beginParents, endParents);
             }
         }
      }
   }
  
   // no path found
   return null;
}
function getPath(intersectNode, beginParents, endParents) {
   let path = [];
  
   // trace path from start to intersection
   let current = intersectNode;
   while (current) {
      path.push(current);
      current = beginParents.get(current);
   }
  
   // reverse path from intersection to end
   current = endParents.get(intersectNode);
   while (current) {
      path.unshift(current);
      current = endParents.get(current);
   }
  
   return path;
}
let startNode = // define your start node
let goalNode = // define your goal node
let shortestPath = bidirectionalSearch(startNode, goalNode);
console.log(shortestPath);
