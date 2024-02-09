function depthLimitedSearch(node, target, depthLimit) {
  if (node.value === target) {
    return node;
  }

  if (depthLimit === 0) {
    return null;
  }

  for (let i = 0; i < node.children.length; i++) {
    const result = depthLimitedSearch(node.children[i], target, depthLimit - 1);
    if (result) {
      return result;
    }
  }

  return null;
}
const rootNode = { value: 'A', children: [] }; // Replace with the actual tree structure

const result = depthLimitedSearch(rootNode, 'target', 3); // Replace 'target' with the actual target value and 3 with the desired depth limit

if (result) {
  console.log('Target found:', result);
} else {
  console.log('Target not found within depth limit');
}
