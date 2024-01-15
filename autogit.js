function depthLimitedSearch(startNode, targetValue, depthLimit) {
  const stack = [];
  stack.push({ node: startNode, depth: 0 });
  // Rest of the code goes here...
}
while (stack.length > 0) {
  const { node, depth } = stack.pop();
  // Rest of the code goes here...
}
if (node.value === targetValue) {
  console.log(`Found target value ${targetValue} at depth ${depth}`);
  return node;
}
if (depth === depthLimit) {
  continue;
}
if (node.children) {
  for (const childNode of node.children) {
    stack.push({ node: childNode, depth: depth + 1 });
  }
}
function depthLimitedSearch(startNode, targetValue, depthLimit) {
  const stack = [];
  stack.push({ node: startNode, depth: 0 });

  while (stack.length > 0) {
    const { node, depth } = stack.pop();

    if (node.value === targetValue) {
      console.log(`Found target value ${targetValue} at depth ${depth}`);
      return node;
    }

    if (depth === depthLimit) {
      continue;
    }

    if (node.children) {
      for (const childNode of node.children) {
        stack.push({ node: childNode, depth: depth + 1 });
      }
    }
  }

  console.log(`Could not find target value ${targetValue} within depth limit`);
  return null;
}
