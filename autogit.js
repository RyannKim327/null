class Node {
  constructor(value, parent, f, g, h) {
    this.value = value;
    this.parent = parent;
    this.f = f;  // Total estimated cost
    this.g = g;  // Cost from start node to current node
    this.h = h;  // Heuristic cost from current node to goal node
  }
}

function beamSearch(initialState, goalState, getNeighbors, beamWidth) {
  let openList = [new Node(initialState, null, 0, 0, heuristic(initialState, goalState))];
  
  while (openList.length > 0) {
    openList.sort((a, b) => a.f - b.f);
    let newOpenList = [];
    
    for (let i = 0; i < Math.min(beamWidth, openList.length); i++) {
      let currentNode = openList[i];
      
      if (currentNode.value === goalState) {
        let path = [];
        while (currentNode !== null) {
          path.unshift(currentNode.value);
          currentNode = currentNode.parent;
        }
        return path;
      }
      
      let neighbors = getNeighbors(currentNode.value);
      for (let neighbor of neighbors) {
        let g = currentNode.g + 1;
        let h = heuristic(neighbor, goalState);
        let f = g + h;
        
        newOpenList.push(new Node(neighbor, currentNode, f, g, h));
      }
    }
    
    openList = newOpenList;
  }
  
  return null; // No path found
}

// Example heuristic function (you can replace this with your own)
function heuristic(state, goalState) {
  return Math.abs(state - goalState);
}

// Example usage
let initialState = 1;
let goalState = 10;

function getNeighbors(state) {
  return [state + 1, state + 2]; // Define the possible next states from a given state
}

let beamWidth = 3;
let path = beamSearch(initialState, goalState, getNeighbors, beamWidth);

console.log(path);
