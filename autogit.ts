type Node<T> = {
  state: T;
  depth: number;
};

function breadthLimitedSearch<T>(
  start: T,
  isGoal: (state: T) => boolean,
  getNeighbors: (state: T) => T[],
  limit: number
): T | null {
  const queue: Node<T>[] = [{ state: start, depth: 0 }];
  const visited: Set<string> = new Set();

  while (queue.length > 0) {
    const currentNode = queue.shift()!;
    const { state, depth } = currentNode;

    // Consider stringifying state if it's not a primitive for correct Set behavior
    const stateKey = JSON.stringify(state);
    if (visited.has(stateKey)) continue;
    visited.add(stateKey);

    if (isGoal(state)) return state;

    if (depth < limit) {
      for (const neighbor of getNeighbors(state)) {
        queue.push({ state: neighbor, depth: depth + 1 });
      }
    }
  }

  return null; // no solution found within depth limit
}
