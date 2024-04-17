function tarjanSCC(graph) {
    // Initialize the variables
    let index = 0;
    let stack = [];
    let indices = {};
    let lowlinks = {};
    let onStack = {};
    let SCCs = [];

    // Recursive function to find SCCs
    function strongConnect(v) {
        indices[v] = index;
        lowlinks[v] = index;
        index++;
        stack.push(v);
        onStack[v] = true;

        graph[v].forEach(w => {
            if (indices[w] === undefined) {
                strongConnect(w);
                lowlinks[v] = Math.min(lowlinks[v], lowlinks[w]);
            } else if (onStack[w]) {
                lowlinks[v] = Math.min(lowlinks[v], indices[w]);
            }
        });

        if (lowlinks[v] === indices[v]) {
            let SCC = [];
            let w;
            do {
                w = stack.pop();
                onStack[w] = false;
                SCC.push(w);
            } while (w !== v);

            SCCs.push(SCC);
        }
    }

    // Iterate over all vertices to find SCCs
    graph.forEach((_, i) => {
        if (indices[i] === undefined) {
            strongConnect(i);
        }
    });

    return SCCs;
}

// Example usage
const graph = [
    [1],     // Vertex 0 has an edge to vertex 1
    [2, 3],  // Vertex 1 has edges to vertices 2 and 3
    [0],     // Vertex 2 has an edge to vertex 0
    [4],     // Vertex 3 has an edge to vertex 4
    [3]      // Vertex 4 has an edge to vertex 3
];

const SCCs = tarjanSCC(graph);
console.log(SCCs);
