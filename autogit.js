let graph = {
  A: { B: 4, C: 2 },
  B: { A: 4, C: 1, D: 5 },
  C: { A: 2, B: 1, D: 8 },
  D: { B: 5, C: 8 }
};
let path = shortestPath(graph, 'A', 'D');
console.log(path);  // Output: ['A', 'C', 'D']
