class Node<T> {
  value: T;
  children: Node<T>[] = [];

  constructor(value: T) {
    this.value = value;
  }
}

function breadthLimitedSearch<T>(root: Node<T>, target: T, maxDepth: number): Node<T> | null {
  const queue: Node<T>[] = [root];
  const visited: Set<Node<T>> = new Set();
  let currentDepth = 0;

  while (queue.length > 0) {
    const levelSize = queue.length;

    for (let i = 0; i < levelSize; i++) {
      const currentNode = queue.shift()!;

      if (currentNode.value === target) {
        return currentNode;
      }

      if (currentDepth < maxDepth) {
        for (const child of currentNode.children) {
          if (!visited.has(child)) {
            visited.add(child);
            queue.push(child);
          }
        }
      }
    }

    currentDepth++;
  }

  return null;
}

// Example usage
const root = new Node(1);
const node2 = new Node(2);
const node3 = new Node(3);
const node4 = new Node(4);
const node5 = new Node(5);
const node6 = new Node(6);

root.children.push(node2, node3);
node2.children.push(node4, node5);
node3.children.push(node6);

const targetNode = breadthLimitedSearch(root, 6, 2);
if (targetNode) {
  console.log(`Found target node: ${targetNode.value}`);
} else {
  console.log('Target node not found');
}
