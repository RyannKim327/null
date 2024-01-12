function tarjanSCC(graph) {
  let index = 0;
  const stack = [];
  const scc = [];
  const indices = new Array(graph.length).fill(-1);
  const lowLinks = new Array(graph.length).fill(-1);
  const visited = new Array(graph.length).fill(false);

  function strongconnect(v) {
    indices[v] = index;
    lowLinks[v] = index;
    index++;
    stack.push(v);
    visited[v] = true;

    for (let w of graph[v]) {
      if (indices[w] === -1) {
        strongconnect(w);
        lowLinks[v] = Math.min(lowLinks[v], lowLinks[w]);
      } else if (visited[w]) {
        lowLinks[v] = Math.min(lowLinks[v], indices[w]);
      }
    }

    if (lowLinks[v] === indices[v]) {
      const component = [];
      let w;
      do {
        w = stack.pop();
        visited[w] = false;
        component.push(w);
      } while (w !== v);

      scc.push(component);
    }
  }

  for (let v = 0; v < graph.length; v++) {
    if (indices[v] === -1) {
      strongconnect(v);
    }
  }

  return scc;
}
const graph = [
  [1],
  [2, 4],
  [3, 6],
  [2, 7],
  [0, 5],
  [6],
  [5],
  [3, 6],
];

const stronglyConnectedComponents = tarjanSCC(graph);
console.log(stronglyConnectedComponents);
[
  [6, 5],
  [7, 3, 2],
  [4, 1],
  [0]
]
