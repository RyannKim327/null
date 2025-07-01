class TreeNode {
  value: number;
  left: TreeNode | null;
  right: TreeNode | null;

  constructor(value: number) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}
function sumOfNodesRecursive(root: TreeNode | null): number {
  if (root === null) {
    return 0;
  }

  // Add the current node's value to the sum of its left and right subtrees
  return root.value + sumOfNodesRecursive(root.left) + sumOfNodesRecursive(root.right);
}
// Creating a sample binary tree:
//        1
//       / \
//      2   3
//     / \   \
//    4   5   6

const root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);
root.right.right = new TreeNode(6);

const totalSum = sumOfNodesRecursive(root);
console.log(`The sum of all nodes is: ${totalSum}`); // Output: The sum of all nodes is: 21
function sumOfNodesIterative(root: TreeNode | null): number {
  if (root === null) {
    return 0;
  }

  let sum = 0;
  const stack: TreeNode[] = [root];

  while (stack.length > 0) {
    const currentNode = stack.pop()!;
    sum += currentNode.value;

    if (currentNode.right !== null) {
      stack.push(currentNode.right);
    }
    if (currentNode.left !== null) {
      stack.push(currentNode.left);
    }
  }

  return sum;
}
const totalSumIterative = sumOfNodesIterative(root);
console.log(`The sum of all nodes (iterative) is: ${totalSumIterative}`); // Output: The sum of all nodes (iterative) is: 21
class TreeNode {
  value: number;
  left: TreeNode | null;
  right: TreeNode | null;

  constructor(value: number) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

// Recursive Sum Function
function sumOfNodesRecursive(root: TreeNode | null): number {
  if (root === null) {
    return 0;
  }
  return root.value + sumOfNodesRecursive(root.left) + sumOfNodesRecursive(root.right);
}

// Iterative Sum Function
function sumOfNodesIterative(root: TreeNode | null): number {
  if (root === null) {
    return 0;
  }

  let sum = 0;
  const stack: TreeNode[] = [root];

  while (stack.length > 0) {
    const currentNode = stack.pop()!;
    sum += currentNode.value;

    if (currentNode.right !== null) {
      stack.push(currentNode.right);
    }
    if (currentNode.left !== null) {
      stack.push(currentNode.left);
    }
  }

  return sum;
}

// Building the sample binary tree
const root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);
root.right.right = new TreeNode(6);

// Calculating sums
const totalSumRecursive = sumOfNodesRecursive(root);
const totalSumIterative = sumOfNodesIterative(root);

console.log(`The sum of all nodes (recursive) is: ${totalSumRecursive}`);
console.log(`The sum of all nodes (iterative) is: ${totalSumIterative}`);
The sum of all nodes (recursive) is: 21
The sum of all nodes (iterative) is: 21
