function beamSearch(problem, width, maxIterations) {
  let beam = [problem.initialSolution()];

  for (let iteration = 0; iteration < maxIterations; iteration++) {
    let successors = [];

    for (let solution of beam) {
      let newSuccessors = problem.generateSuccessors(solution);
      successors.push(...newSuccessors);
    }

    successors.sort((a, b) => problem.evaluate(a) - problem.evaluate(b));
    beam = successors.slice(0, width);

    if (problem.isTermination(beam[0])) {
      break;
    }
  }

  return beam[0];
}

// Example usage

const problem = {
  initialSolution: () => [0], // Your initial solution representation
  generateSuccessors: (solution) => [solution.concat([1]), solution.concat([2])], // Generate successors based on current solution
  evaluate: (solution) => solution.reduce((a, b) => a + b), // Your evaluation function, higher is better
  isTermination: (solution) => solution.length === 5 // Terminate search when solution length is 5
};

const width = 2; // Width of the beam, top-k solutions to keep
const maxIterations = 10; // Maximum iterations before terminating

const optimalSolution = beamSearch(problem, width, maxIterations);
console.log("Optimal solution:", optimalSolution);
