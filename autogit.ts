interface TreeNode {
  value: number;
  left: TreeNode | null;
  right: TreeNode | null;
}

function sumTreeNodes(node: TreeNode | null): number {
  if (node === null) {
    return 0;
  }

  return node.value + sumTreeNodes(node.left) + sumTreeNodes(node.right);
}
const tree: TreeNode = {
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

const sum = sumTreeNodes(tree); // returns 28
function sumTreeNodesIterative(node: TreeNode | null): number {
  let sum = 0;
  const stack: TreeNode[] = [node];

  while (stack.length > 0) {
    const currentNode = stack.pop()!;
    sum += currentNode.value;

    if (currentNode.right) {
      stack.push(currentNode.right);
    }
    if (currentNode.left) {
      stack.push(currentNode.left);
    }
  }

  return sum;
}
