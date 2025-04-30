type Graph = Map<number, number[]>;

function tarjanSCC(graph: Graph): number[][] {
    let index = 0;                         // To assign indices to nodes
    const stack: number[] = [];            // Stack for current DFS path
    const indices = new Map<number, number>();  // Index of each node
    const lowLink = new Map<number, number>();  // Lowest index reachable
    const onStack = new Set<number>();           // Nodes on stack
    const sccs: number[][] = [];           // Result: list of SCCs

    function strongConnect(v: number) {
        indices.set(v, index);
        lowLink.set(v, index);
        index++;
        stack.push(v);
        onStack.add(v);

        for (const w of graph.get(v) || []) {
            if (!indices.has(w)) {
                // Not yet visited, recurse
                strongConnect(w);
                lowLink.set(v, Math.min(lowLink.get(v)!, lowLink.get(w)!));
            } else if (onStack.has(w)) {
                // Node in stack -> update lowLink[v]
                lowLink.set(v, Math.min(lowLink.get(v)!, indices.get(w)!));
            }
        }

        // If v is root of SCC
        if (lowLink.get(v) === indices.get(v)) {
            const scc: number[] = [];
            let w: number;
            do {
                w = stack.pop()!;
                onStack.delete(w);
                scc.push(w);
            } while (w !== v);
            sccs.push(scc);
        }
    }

    // Run DFS for each node
    for (const v of graph.keys()) {
        if (!indices.has(v)) {
            strongConnect(v);
        }
    }

    return sccs;
}

// Usage example:
const graph: Graph = new Map([
    [0, [1]],
    [1, [2]],
    [2, [0, 3]],
    [3, [4]],
    [4, [5, 7]],
    [5, [6]],
    [6, [4]],
    [7, []]
]);

console.log(tarjanSCC(graph));
// Output: strongly connected components like [[0,1,2], [3], [4,5,6], [7]]
