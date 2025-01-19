interface Node<T> {
  value: T;
  children: Node<T>[];
  depth: number;
}

function breadthLimitedSearch<T>(root: Node<T>, maxDepth: number, callback: (node: Node<T>) => boolean): boolean {
  const queue: Node<T>[] = [root];
  let currentDepth = 0;

  while (queue.length > 0) {
    const currentNode = queue.shift()!;
    if (callback(currentNode)) return true;

    if (currentNode.depth < maxDepth) {
      for (const child of currentNode.children) {
        child.depth = currentNode.depth + 1;
        queue.push(child);
      }
    }
  }

  return false;
}
const root: Node<string> = {
  value: 'A',
  children: [
    { value: 'B', children: [], depth: 0 },
    { value: 'C', children: [], depth: 0 },
  ],
  depth: 0,
};

const maxDepth = 2;
const found = breadthLimitedSearch(root, maxDepth, (node) => node.value === 'D');
console.log(found); // false

const found2 = breadthLimitedSearch(root, maxDepth, (node) => node.value === 'C');
console.log(found2); // true
