function Node(value) {
  this.value = value;
  this.children = [];
}

// Recursive function for Depth-First Search
function dfs(node, target) {
  // Create a stack and push the root node onto it
  const stack = [node];

  // Traverse the tree until the stack is empty
  while (stack.length > 0) {
    // Pop the top node from the stack
    const current = stack.pop();

    // Check if the current node matches the target
    if (current.value === target) {
      return current;
    }

    // Push the children of the current node onto the stack (in reverse order)
    for (let i = current.children.length - 1; i >= 0; i--) {
      stack.push(current.children[i]);
    }
  }

  // Target not found
  return null;
}

// Create a sample tree
const root = new Node(1);
const node2 = new Node(2);
const node3 = new Node(3);
const node4 = new Node(4);
const node5 = new Node(5);

root.children.push(node2, node3);
node2.children.push(node4, node5);

// Test the DFS algorithm
console.log(dfs(root, 4)); // Output: Node { value: 4, children: [] }
console.log(dfs(root, 6)); // Output: null
function Node(value) {
  this.value = value;
  this.children = [];
}

// Recursive function for Depth-First Search
function dfs(node, target) {
  // Check if the current node matches the target
  if (node.value === target) {
    return node;
  }

  // Traverse the children of the current node recursively
  for (const child of node.children) {
    const result = dfs(child, target);
    if (result !== null) {
      return result;
    }
  }

  // Target not found
  return null;
}

// Create a sample tree
const root = new Node(1);
const node2 = new Node(2);
const node3 = new Node(3);
const node4 = new Node(4);
const node5 = new Node(5);

root.children.push(node2, node3);
node2.children.push(node4, node5);

// Test the DFS algorithm
console.log(dfs(root, 4)); // Output: Node { value: 4, children: [] }
console.log(dfs(root, 6)); // Output: null
