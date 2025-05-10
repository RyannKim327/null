interface Node {
  value: any;
  children: Node[];
}

function depthLimitedSearch(root: Node, goal: any, limit: number): Node | null {
  function recursiveDLS(node: Node, depth: number): Node | null {
    if (node.value === goal) {
      return node;
    }
    if (depth === 0) {
      return null; // limit reached, no further search
    }
    for (const child of node.children) {
      const found = recursiveDLS(child, depth - 1);
      if (found !== null) {
        return found;
      }
    }
    return null;
  }
  
  return recursiveDLS(root, limit);
}
