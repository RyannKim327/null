interface Node<T> {
  value: T;
  score: number;
  children: Node<T>[];
}

class BeamSearch<T> {
  private beamSize: number;

  constructor(beamSize: number) {
    this.beamSize = beamSize;
  }

  search(startNode: Node<T>, maxDepth: number): Node<T>[] {
    const queue: Node<T>[] = [startNode];
    const results: Node<T>[] = [];

    for (let depth = 0; depth < maxDepth; depth++) {
      const nextQueue: Node<T>[] = [];

      for (const node of queue) {
        for (const child of node.children) {
          child.score = calculateScore(child); // calculate the score of the child node
          nextQueue.push(child);
        }
      }

      // Select the top `beamSize` nodes with the highest scores
      queue = nextQueue.sort((a, b) => b.score - a.score).slice(0, this.beamSize);
      results.push(...queue);
    }

    return results;
  }
}

function calculateScore<T>(node: Node<T>): number {
  // implement your custom scoring function here
  // for example:
  return node.value.length; // score based on the length of the value
}
const startNode: Node<string> = {
  value: 'hello',
  score: 0,
  children: [
    { value: 'hello world', score: 0, children: [] },
    { value: 'hello again', score: 0, children: [] },
  ],
};

const beamSearch = new BeamSearch<string>(3);
const results = beamSearch.search(startNode, 2);

console.log(results); // output: an array of Node objects with the top 3 scores
