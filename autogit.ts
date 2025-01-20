interface Node<T> {
  value: T;
  children: Node<T>[];
}

function dfs<T>(root: Node<T>, callback: (node: Node<T>) => void): void {
  const stack: Node<T>[] = [root];

  while (stack.length > 0) {
    const node = stack.pop();
    callback(node);

    for (const child of node.children) {
      stack.push(child);
    }
  }
}
const nodeA = {
  value: 'A',
  children: [
    {
      value: 'B',
      children: [
        {
          value: 'D',
          children: [],
        },
        {
          value: 'E',
          children: [],
        },
      ],
    },
    {
      value: 'C',
      children: [
        {
          value: 'F',
          children: [],
        },
      ],
    },
  ],
};

dfs(nodeA, (node) => {
  console.log(node.value);
});
A
B
D
E
C
F
function dfsRecursive<T>(node: Node<T>, callback: (node: Node<T>) => void): void {
  callback(node);

  for (const child of node.children) {
    dfsRecursive(child, callback);
  }
}
dfsRecursive(nodeA, (node) => {
  console.log(node.value);
});
