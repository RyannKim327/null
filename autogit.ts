type Node = any; // define your node type
type State = Node; // maybe your node is just a state
type StackItem = { node: State; depth: number; parent?: StackItem }; // for optional path tracking

function depthLimitedSearch(
  start: State,
  isGoal: (node: State) => boolean,
  getChildren: (node: State) => State[],
  limit: number
): State | null {
  const stack: StackItem[] = [{ node: start, depth: 0 }];

  while (stack.length > 0) {
    const { node, depth } = stack.pop()!;
    
    if (isGoal(node)) {
      // Optionally, reconstruct path here if needed
      return node;
    }

    if (depth < limit) {
      const children = getChildren(node);
      for (const child of children) {
        stack.push({ node: child, depth: depth + 1 });
      }
    }
  }
  
  return null; // no solution within depth limit
}
const startNode = { value: 'start', neighbors: [...] }; // your initial node
const isGoal = (node: { value: string }) => node.value === 'target';

const getChildren = (node: { value: string, neighbors?: any[] }) => {
  // your logic to get neighbors
  return node.neighbors || [];
};

const result = depthLimitedSearch(startNode, isGoal, getChildren, 3);
console.log(result);
