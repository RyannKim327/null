function tarjanSCC(graph) {
  let index = 0;
  let stack = [];
  let id = 0;
  let ids = [];
  let lowLink = [];
  let onStack = [];
  let result = [];

  function dfs(node) {
    ids[node] = index;
    lowLink[node] = index;
    index++;
    stack.push(node);
    onStack[node] = true;

    for (let neighbor of graph[node]) {
      if (ids[neighbor] === undefined) {
        dfs(neighbor);
      }
      if (onStack[neighbor]) {
        lowLink[node] = Math.min(lowLink[node], lowLink[neighbor]);
      }
    }

    if (ids[node] === lowLink[node]) {
      let component = [];
      let currNode;
      do {
        currNode = stack.pop();
        onStack[currNode] = false;
        component.push(currNode);
      } while (currNode !== node);
      result.push(component);
    }
  }

  for (let node = 0; node < graph.length; node++) {
    if (ids[node] === undefined) {
      dfs(node);
    }
  }

  return result;
}
let graph = [
  [1],       // Node 0 is connected to Node 1
  [2],       // Node 1 is connected to Node 2
  [0, 3],    // Node 2 is connected to Node 0 and Node 3
  [4, 5],    // Node 3 is connected to Node 4 and Node 5
  [3],       // Node 4 is connected to Node 3
  [5, 6],    // Node 5 is connected to Node 5 and Node 6
  [6, 7],    // Node 6 is connected to Node 6, Node 7
  [7, 5],    // Node 7 is connected to Node 7 and Node 5
];

let components = tarjanSCC(graph);
console.log(components);
[
  [5, 6, 7],
  [3, 4],
  [0, 1, 2]
]
