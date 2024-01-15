let index = 0; // Global index counter
let stack = []; // Stack to keep track of visited nodes
let scc = []; // Array to store the strongly connected components
let lowLink = []; // Array to store the low link value of each node
let onStack = []; // Array to track if a node is currently on the stack
function tarjan(node) {
  // Set the low link value and index of the current node
  lowLink[node] = index;
  index++;
  stack.push(node);
  onStack[node] = true;

  // Explore each neighbor of the current node
  for (let neighbor of graph[node]) {
    if (lowLink[neighbor] === undefined) {
      // Neighbor has not been visited yet, recurse on it
      tarjan(neighbor);
      lowLink[node] = Math.min(lowLink[node], lowLink[neighbor]);
    } else if (onStack[neighbor]) {
      // Neighbor is on the stack and therefore in the current SCC
      lowLink[node] = Math.min(lowLink[node], lowLink[neighbor]);
    }
  }

  // If node is a root node, pop the stack and generate a new SCC
  if (lowLink[node] === index - 1) {
    let component = [];
    let top = null;
    do {
      top = stack.pop();
      onStack[top] = false;
      component.push(top);
    } while (top != node);
    scc.push(component);
  }
}
for (let node = 0; node < graph.length; node++) {
  if (lowLink[node] === undefined) {
    tarjan(node);
  }
}
return scc;
let graph = [
  [1, 3],
  [2],
  [0],
  [4],
  [3],
  [5, 7],
  [6],
  [5]
];

let result = tarjanSCC(graph);
console.log(result);
[[4, 3], [2, 1, 0], [7, 6, 5]]
