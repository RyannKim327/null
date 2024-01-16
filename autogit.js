function beamSearch(initialSolutions, beamSize, evaluateFunc, terminationCondition) {
  let beam = initialSolutions;

  while (!terminationCondition()) {
    const expandedBeam = [];

    for (const solution of beam) {
      const neighbors = generateNeighbors(solution);

      for (const neighbor of neighbors) {
        const score = evaluateFunc(neighbor);
        expandedBeam.push({ solution: neighbor, score });
      }
    }

    expandedBeam.sort((a, b) => b.score - a.score);
    beam = expandedBeam.slice(0, beamSize);
  }

  return beam[0].solution; // Return the best solution
}

// Example usage:
const initialSolutions = [initialSolution1, initialSolution2, ...];
const beamSize = 5;

function evaluateFunc(solution) {
  // Calculate the score or cost of the solution
  // ...

  return score;
}

function terminationCondition() {
  // Check some termination condition, e.g., maximum iterations or solution found
  // ...

  return conditionMet;
}

const bestSolution = beamSearch(initialSolutions, beamSize, evaluateFunc, terminationCondition);
