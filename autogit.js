// Node class to represent the nodes in the search tree
class Node {
  constructor(value, parent, score) {
    this.value = value; // Value of the node
    this.parent = parent; // Parent node
    this.score = score; // Score of the node
  }
}

// Beam search algorithm function
function beamSearch(root, beamWidth, maxDepth, heuristic) {
  let beam = [new Node(root, null, 0)]; // Initialize the beam with the root node
  let finalNodes = []; // Array to store the final nodes

  for (let depth = 0; depth < maxDepth; depth++) {
    let newBeam = []; // Create a new beam for the current depth

    for (let node of beam) {
      if (node.value == null) {
        continue;
      }

      if (node.value === "goal") {
        finalNodes.push(node); // Add the goal node to the final nodes
        continue;
      }

      let children = expand(node.value); // Generate child nodes
      
      children.forEach(child => {
        let score = node.score + heuristic(child);
        newBeam.push(new Node(child, node, score)); // Add the child nodes to the new beam
      });
    }

    // Sort the new beam based on the score in decreasing order
    newBeam.sort((a, b) => b.score - a.score);

    // Select the top `beamWidth` nodes from the new beam
    beam = newBeam.slice(0, beamWidth);
  }

  return finalNodes;
}

// Function to expand a node - can be replaced with your own logic
function expand(node) {
  // Generate child nodes - In this example, we just add some random nodes
  return ["node1", "node2", "node3"];
}

// Heuristic function - can be replaced with your own heuristic
function heuristic(node) {
  // Simple heuristic that returns a random number
  return Math.random();
}

// Example usage
let root = "start";
let beamWidth = 2;
let maxDepth = 3;
let finalNodes = beamSearch(root, beamWidth, maxDepth, heuristic);

console.log("Final nodes found:");
finalNodes.forEach(node => {
  console.log(node.value);
});
