function tarjansAlgorithm(graph) {
    const indexMap = new Map(); // To store the index of each node
    const lowLinkMap = new Map(); // To store the low-link value of each node
    const onStack = new Set(); // To track whether a node is currently on the stack
    const stack = []; // The stack used for DFS traversal
    const result = []; // To store the strongly connected components
  
    let index = 0; // Index counter
  
    // Function to perform DFS traversal
    function dfs(u) {
        indexMap.set(u, index);
        lowLinkMap.set(u, index);
        index++;
        stack.push(u);
        onStack.add(u);
  
        for (const v of graph[u]) {
            if (!indexMap.has(v)) {
                dfs(v);
                lowLinkMap.set(u, Math.min(lowLinkMap.get(u), lowLinkMap.get(v)));
            } else if (onStack.has(v)) {
                lowLinkMap.set(u, Math.min(lowLinkMap.get(u), indexMap.get(v)));
            }
        }
  
        if (lowLinkMap.get(u) === indexMap.get(u)) {
            const component = [];
            let w;
  
            do {
                w = stack.pop();
                onStack.delete(w);
                component.push(w);
            } while (w !== u);
  
            result.push(component);
        }
    }
  
    // Perform DFS traversal for each unvisited node
    for (const u of Object.keys(graph)) {
        if (!indexMap.has(u)) {
            dfs(u);
        }
    }
  
    return result;
}
const graph = {
    A: ['B'],
    B: ['C', 'E', 'F'],
    C: ['A', 'D'],
    D: ['G'],
    E: ['D', 'F'],
    F: ['C', 'I'],
    G: ['E'],
    H: ['B', 'G'],
    I: ['H'],
};

const result = tarjansAlgorithm(graph);
console.log(result);
[ [ 'G', 'D' ], [ 'I', 'H', 'B', 'E' ], [ 'F', 'C', 'A' ] ]
