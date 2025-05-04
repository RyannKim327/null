// Define a generic Node type (example: string path and a score)
type Node = {
  state: string;    // the current state or path representation
  score: number;    // the path's score (higher is better)
};

/**
 * Expands a node to possible next nodes.
 * @param node current node
 * @returns array of possible next nodes
 *
 * This is a placeholder and must be implemented for your problem.
 */
function expand(node: Node): Node[] {
  // Example: append letters 'a', 'b', 'c' with some scoring rule
  const expansions = ['a', 'b', 'c'].map((char) => ({
    state: node.state + char,
    score: node.score + Math.random(), // example: increment score randomly
  }));

  return expansions;
}

/**
 * Beam search implementation
 * @param initial starting node
 * @param beamWidth width of the beam
 * @param maxSteps max depth to explore
 * @returns best node found
 */
function beamSearch(initial: Node, beamWidth: number, maxSteps: number): Node {
  let beam: Node[] = [initial];

  for (let step = 0; step < maxSteps; step++) {
    // Expand all nodes in the beam
    let candidates: Node[] = [];
    for (const node of beam) {
      candidates.push(...expand(node));
    }

    // Sort candidates by descending score and pick top beamWidth
    candidates.sort((a, b) => b.score - a.score);
    beam = candidates.slice(0, beamWidth);

    // Optional: Log progress
    console.log(`Step ${step + 1}: Best score = ${beam[0].score.toFixed(3)}, State = ${beam[0].state}`);
  }

  // Return the best node in the final beam
  return beam[0];
}

// Example usage
const startNode: Node = { state: '', score: 0 };
const bestNode = beamSearch(startNode, 3, 5);
console.log('Best result:', bestNode);
