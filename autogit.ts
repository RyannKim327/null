interface Node<T> {
  value: T;
  children: Node<T>[];
}

function dfs<T>(root: Node<T>, visit: (node: Node<T>) => void) {
  const stack: Node<T>[] = [root];

  while (stack.length > 0) {
    const node = stack.pop();
    visit(node);

    for (const child of node.children) {
      stack.push(child);
    }
  }
}
const tree: Node<string> = {
  value: 'A',
  children: [
    {
      value: 'B',
      children: [
        {
          value: 'D',
          children: []
        },
        {
          value: 'E',
          children: []
        }
      ]
    },
    {
      value: 'C',
      children: [
        {
          value: 'F',
          children: []
        }
      ]
    }
  ]
};

dfs(tree, (node) => {
  console.log(node.value);
});
A
B
D
E
C
F
function dfsRecursive<T>(node: Node<T>, visit: (node: Node<T>) => void) {
  visit(node);

  for (const child of node.children) {
    dfsRecursive(child, visit);
  }
}
function dfs<T>(root: Node<T>, visit: (node: Node<T>) => void) {
  const visited: Set<Node<T>> = new Set();

  function traverse(node: Node<T>) {
    if (visited.has(node)) return;
    visited.add(node);

    visit(node);

    for (const child of node.children) {
      traverse(child);
    }
  }

  traverse(root);
}
function* dfs<T>(root: Node<T>) {
  const stack: Node<T>[] = [root];

  while (stack.length > 0) {
    const node = stack.pop();
    yield node;

    for (const child of node.children) {
      stack.push(child);
    }
  }
}
for (const node of dfs(tree)) {
  console.log(node.value);
}
