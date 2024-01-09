function beamSearch(startNode, beamWidth, maxDepth) {
  let beam = [startNode];
  let nextBeam = [];
  let depth = 0;

  while (depth < maxDepth && beam.length > 0) {
    depth++;
    nextBeam = [];

    for (const node of beam) {
      const childNodes = expandNode(node);

      for (const childNode of childNodes) {
        nextBeam.push(childNode);
      }
    }

    // Sort nextBeam based on scoring function to keep only the top beamWidth nodes
    nextBeam.sort((a, b) => evaluateNode(b) - evaluateNode(a));
    beam = nextBeam.slice(0, beamWidth);
  }

  return beam[0];
}

// Example helper functions
function expandNode(node) {
  // Generate child nodes for the given node
  // ...
}

function evaluateNode(node) {
  // Evaluate the given node based on some scoring criterion
  // ...
}
