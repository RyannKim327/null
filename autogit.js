class Node {
  constructor(value, parent, score) {
    this.value = value;
    this.parent = parent;
    this.score = score;
  }
}

function beamSearch(root, beamWidth, maxDepth, evaluate) {
  let candidates = [root];

  for (let depth = 0; depth < maxDepth; depth++) {
    let newCandidates = [];

    for (let candidate of candidates) {
      if (depth === maxDepth - 1 || candidate.value === 'goal') {
        return candidate;
      }

      let children = expand(candidate, evaluate);
      newCandidates.push(...children);
    }

    newCandidates.sort((a, b) => b.score - a.score);
    candidates = newCandidates.slice(0, beamWidth);
  }

  return null;
}

function expand(node, evaluate) {
  // Simulating expansion of the current node
  const children = [];
  for (let i = 0; i < 3; i++) {
    let childValue = Math.random() > 0.5 ? 'good' : 'bad';
    let childScore = evaluate(childValue);
    children.push(new Node(childValue, node, childScore));
  }
  return children;
}

// Example usage:
const root = new Node('start', null, 0);
const beamWidth = 2;
const maxDepth = 3;
const evaluate = (value) => (value === 'good' ? 1 : 0);

const result = beamSearch(root, beamWidth, maxDepth, evaluate);
console.log(result);
