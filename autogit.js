let index = 0; // Global index counter
const stack = []; // Stack to keep track of visited nodes in current SCC
const onStack = new Set(); // Set to keep track of which nodes are currently on the stack
const indices = new Map(); // Map to store the index of each node
const lowLinks = new Map(); // Map to store the low-link values of nodes
const result = []; // Array to store the final SCCs
function tarjan(node, adjacencyList) {
  indices.set(node, index);
  lowLinks.set(node, index);
  index++;
  stack.push(node);
  onStack.add(node);

  // Explore adjacent nodes
  for (const neighbor of adjacencyList[node]) {
    if (!indices.has(neighbor)) {
      tarjan(neighbor, adjacencyList);
      lowLinks.set(node, Math.min(lowLinks.get(node), lowLinks.get(neighbor)));
    } else if (onStack.has(neighbor)) {
      lowLinks.set(node, Math.min(lowLinks.get(node), indices.get(neighbor)));
    }
  }

  // Check if a strongly connected component has been found
  if (lowLinks.get(node) === indices.get(node)) {
    const component = [];
    let member;
    do {
      member = stack.pop();
      onStack.delete(member);
      component.push(member);
    } while (member !== node);
    result.push(component);
  }
}
const adjacencyList = new Map();
// Fill adjacencyList with your graph's edges
adjacencyList.set(0, [1]);
adjacencyList.set(1, [2, 4]);
adjacencyList.set(2, [3]);
adjacencyList.set(3, [0]);
adjacencyList.set(4, [2, 5]);
adjacencyList.set(5, [6]);
adjacencyList.set(6, [4, 7]);
adjacencyList.set(7, [8]);
adjacencyList.set(8, []);
for (const node of adjacencyList.keys()) {
  if (!indices.has(node)) {
    tarjan(node, adjacencyList);
  }
}
console.log(result);
