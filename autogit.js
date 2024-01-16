function findStronglyConnectedComponents(graph) {
  let index = 0;
  const stack = [];
  const result = [];

  function tarjanDFS(vertex) {
    vertex.index = index;
    vertex.lowLink = index;
    index += 1;
    stack.push(vertex);
    vertex.onStack = true;

    for (const adjacentVertex of graph[vertex]) {
      if (adjacentVertex.index === undefined) {
        tarjanDFS(adjacentVertex);
        vertex.lowLink = Math.min(vertex.lowLink, adjacentVertex.lowLink);
      } else if (adjacentVertex.onStack) {
        vertex.lowLink = Math.min(vertex.lowLink, adjacentVertex.index);
      }
    }

    if (vertex.lowLink === vertex.index) {
      const component = [];
      let v;
      do {
        v = stack.pop();
        v.onStack = false;
        component.push(v);
      } while (v !== vertex);
      result.push(component);
    }
  }

  for (const vertex of Object.keys(graph)) {
    if (graph[vertex].index === undefined) {
      tarjanDFS(graph[vertex]);
    }
  }

  return result;
}

// Example usage:
const graph = {
  A: ['B', 'C'],
  B: ['D'],
  C: ['D', 'E'],
  D: ['A'],
  E: ['F'],
  F: ['G'],
  G: ['E', 'H'],
  H: ['I'],
  I: ['J'],
  J: ['H'],
};

const components = findStronglyConnectedComponents(graph);
console.log(components);
