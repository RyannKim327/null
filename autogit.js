let index = 0;
let stack = [];
let discovered = [];
let lowLink = [];
let visited = [];
let adjacencyList = []; // Assuming this is your graph representation, where adjacencyList[u] returns an array of neighbors of vertex u.
let result = [];
function tarjanAlgorithm() {
  for (let i = 0; i < adjacencyList.length; i++) {
    if (!discovered[i]) {
      tarjanDFS(i);
    }
  }
}

function tarjanDFS(v) {
  discovered[v] = index;
  lowLink[v] = index;
  index++;
  stack.push(v);
  visited[v] = true;

  for (let i = 0; i < adjacencyList[v].length; i++) {
    let neighbor = adjacencyList[v][i];
    if (!discovered[neighbor]) {
      tarjanDFS(neighbor);
      lowLink[v] = Math.min(lowLink[v], lowLink[neighbor]);
    } else if (visited[neighbor]) {
      lowLink[v] = Math.min(lowLink[v], discovered[neighbor]);
    }
  }

  if (lowLink[v] === discovered[v]) {
    let component = [];
    let w;
    do {
      w = stack.pop();
      visited[w] = false;
      component.push(w);
    } while (w !== v);
    result.push(component);
  }
}
tarjanAlgorithm();
