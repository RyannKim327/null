type Node<T> = {
  state: T;
  // you might want parent or other info here depending on your problem
  // parent?: Node<T>;
};

type ExpandFunction<T> = (node: Node<T>) => Node<T>[];

// breadth-limited search
function breadthLimitedSearch<T>(
  start: T,
  expand: ExpandFunction<T>,
  goalTest: (state: T) => boolean,
  maxDepth: number
): Node<T> | null {
  type QueueItem = { node: Node<T>; depth: number };
  
  const startNode: Node<T> = { state: start };
  const queue: QueueItem[] = [{ node: startNode, depth: 0 }];

  while (queue.length > 0) {
    const { node, depth } = queue.shift()!;

    if (goalTest(node.state)) {
      return node;
    }

    if (depth < maxDepth) {
      const children = expand(node);
      for (const child of children) {
        queue.push({ node: child, depth: depth + 1 });
      }
    }
  }

  return null; // not found within depth limit
}
const graph = {
  A: ['B', 'C'],
  B: ['D', 'E'],
  C: ['F'],
  D: [],
  E: ['F'],
  F: []
};

const expand = (node: Node<string>) => {
  const neighbors = graph[node.state] || [];
  return neighbors.map(s => ({ state: s }));
};

const goalTest = (state: string) => state === 'F';

const result = breadthLimitedSearch('A', expand, goalTest, 2);
if (result) {
  console.log('Found:', result.state);
} else {
  console.log('Not found within depth limit');
}
