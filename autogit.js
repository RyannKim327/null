function beamSearch(problem, beamWidth) {
  let currentBeam = [problem.initialState];

  while (!terminateConditionMet()) {
    let successors = [];

    for (let i = 0; i < currentBeam.length; i++) {
      let partialSolution = currentBeam[i];
      let partialSuccessors = problem.getSuccessors(partialSolution);

      successors.push(...partialSuccessors);
    }

    successors.sort((a, b) => problem.evaluate(a) - problem.evaluate(b));

    currentBeam = successors.slice(0, beamWidth);
  }

  return currentBeam[0]; // Best solution found
}

// Usage example
const problem = {
  initialState: [1, 2, 3],
  getSuccessors(state) {
    // Generate and return successors based on current state
    // Implement this according to your problem's specifics
    // Each successor should be a potential next step in the solution
  },
  evaluate(state) {
    // Evaluate the state's desirability based on the problem's objective
    // Assign a score or cost to the state
  },
};

const beamWidth = 3; // Adjust the beam width as desired
const bestSolution = beamSearch(problem, beamWidth);
console.log(bestSolution);
