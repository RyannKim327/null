interface Node {
  value: number;
  left: Node | null;
  right: Node | null;
}

function diameterOfBinaryTree(root: Node | null): number {
  let maxDiameter = 0;

  function depth(node: Node | null): number {
    if (!node) return 0;
    const leftDepth = depth(node.left);
    const rightDepth = depth(node.right);
    maxDiameter = Math.max(maxDiameter, leftDepth + rightDepth);
    return Math.max(leftDepth, rightDepth) + 1;
  }

  depth(root);
  return maxDiameter;
}
const tree: Node = {
  value: 1,
  left: {
    value: 2,
    left: {
      value: 4,
      left: null,
      right: null
    },
    right: {
      value: 5,
      left: null,
      right: null
    }
  },
  right: {
    value: 3,
    left: {
      value: 6,
      left: null,
      right: null
    },
    right: {
      value: 7,
      left: null,
      right: null
    }
  }
};

console.log(diameterOfBinaryTree(tree)); // Output: 5
