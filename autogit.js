function tarjanSCC(adjList) {
  const result = [];
  const stack = [];
  const visited = [];
  const disc = [];
  const low = [];
  let time = 0;

  function strongConnect(v) {
    visited[v] = true;
    stack.push(v);
    disc[v] = time;
    low[v] = time;
    time++;

    for (const t of adjList[v]) {
      if (!visited[t]) {
        strongConnect(t);
        low[v] = Math.min(low[v], low[t]);
      } else if (stack.includes(t)) {
        low[v] = Math.min(low[v], disc[t]);
      }
    }

    if (low[v] === disc[v]) {
      const scc = [];
      let x;
      do {
        x = stack.pop();
        scc.push(x);
      } while (x !== v);
      result.push(scc);
    }
  }

  for (let i = 0; i < adjList.length; i++) {
    if (!visited[i]) {
      strongConnect(i);
    }
  }

  return result;
}
