function tarjansAlgorithm(graph) {
  let index = [];
  let lowlink = [];
  let onStack = [];
  let indexCounter = 0;
  let stack = [];
  let stronglyConnectedComponents = [];

  function strongConnect(v) {
    index[v] = indexCounter;
    lowlink[v] = indexCounter;
    indexCounter++;
    stack.push(v);
    onStack[v] = true;

    for (let w of graph[v]) {
      if (index[w] === undefined) {
        strongConnect(w);
        lowlink[v] = Math.min(lowlink[v], lowlink[w]);
      } else if (onStack[w]) {
        lowlink[v] = Math.min(lowlink[v], index[w]);
      }
    }

    if (lowlink[v] === index[v]) {
      let component = [];
      let w;
      do {
        w = stack.pop();
        onStack[w] = false;
        component.push(w);
      } while (w !== v);

      stronglyConnectedComponents.push(component);
    }
  }

  for (let v in graph) {
    if (index[v] === undefined) {
      strongConnect(v);
    }
  }

  return stronglyConnectedComponents;
}
