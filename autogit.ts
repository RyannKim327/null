interface Node<T> {
  value: T;
  children: Node<T>[];
}

function dfs<T>(root: Node<T>, callback: (node: Node<T>) => void) {
  const stack: Node<T>[] = [root];

  while (stack.length > 0) {
    const node = stack.pop();
    callback(node);

    for (const child of node.children) {
      stack.push(child);
    }
  }
}

// Example usage:
interface TreeNode {
  value: string;
  children: TreeNode[];
}

const tree: TreeNode = {
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
