interface Node {
  state: any; // replace 'any' with your specific state type
}

function depthLimitedSearch(
  startNode: Node,
  goalTest: (node: Node) => boolean,
  expandNode: (node: Node) => Node[],
  limit: number
): Node | null {
  // Stack holds objects with node and current depth
  const stack: { node: Node; depth: number }[] = [{ node: startNode, depth: 0 }];

  while (stack.length > 0) {
    const { node, depth } = stack.pop()!; // non-null assertion since loop condition ensures stack not empty
    
    // Check if we've reached target
    if (goalTest(node)) {
      return node;
    }

    // If we're within depth limit, expand
    if (depth < limit) {
      const children = expandNode(node);
      // Push children with incremented depth
      for (const child of children) {
        stack.push({ node: child, depth: depth + 1 });
      }
    }
  }

  // Goal not found within depth limit
  return null;
}
const result = depthLimitedSearch(start, node => node.state === targetState, node => expand(node), 10);
if (result) {
  console.log("Found goal node:", result);
} else {
  console.log("Goal not found within depth limit");
}
