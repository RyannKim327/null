type Graph = Map<number, number[]>; // Adjacency list representation

function tarjan(graph: Graph): number[][] {
    const indices: number[] = [];
    const lowlink: number[] = [];
    const stack: number[] = [];
    const onStack: boolean[] = [];
    const result: number[][] = [];
    let index = 0;

    // Initialize the indices and lowlink arrays
    for (let i = 0; i < graph.size; i++) {
        indices[i] = -1;
        lowlink[i] = -1;
        onStack[i] = false;
    }

    const strongconnect = (v: number) => {
        // Set the depth index for v to the smallest unused index
        indices[v] = index;
        lowlink[v] = index;
        index++;
        stack.push(v);
        onStack[v] = true;

        // Consider successors of v
        for (const w of (graph.get(v) || [])) {
            if (indices[w] === -1) {
                // Successor w has not yet been visited; recurse on it
                strongconnect(w);
                lowlink[v] = Math.min(lowlink[v], lowlink[w]);
            } else if (onStack[w]) {
                // Successor w is in stack and hence in the current SCC
                lowlink[v] = Math.min(lowlink[v], indices[w]);
            }
        }

        // If v is a root node, pop the stack and generate an SCC
        if (lowlink[v] === indices[v]) {
            const scc: number[] = [];
            let w: number;
            do {
                w = stack.pop()!;
                onStack[w] = false;
                scc.push(w);
            } while (w !== v);
            result.push(scc);
        }
    };

    // Start with each vertex if it has not been visited
    for (const v of graph.keys()) {
        if (indices[v] === -1) {
            strongconnect(v);
        }
    }

    return result;
}

// Example usage:
const graph: Graph = new Map([
    [0, [1]],
    [1, [2]],
    [2, [0, 3]],
    [3, [4]],
    [4, [5]],
    [5, [3]],
    [6, [5]]
]);

const sccs = tarjan(graph);
console.log(sccs); // Output the strongly connected components
