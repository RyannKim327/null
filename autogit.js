function beamSearch(candidateGenerator, beamSize, stoppingCondition) {
  let beam = []; // Initialize the beam

  while (!stoppingCondition()) {
    let newPartialSolutions = [];
    
    // Expand the current partial solutions
    for (let i = 0; i < beam.length; i++) {
      let currentPartialSolution = beam[i].solution;
      
      // Generate next possible partial solutions
      let nextPartialSolutions = candidateGenerator(currentPartialSolution);
      newPartialSolutions = newPartialSolutions.concat(nextPartialSolutions);
    }
    
    // Score the new partial solutions
    newPartialSolutions.forEach(partialSolution => {
      partialSolution.score = evaluate(partialSolution);
    });
    
    // Sort the new partial solutions by score
    newPartialSolutions.sort((a, b) => b.score - a.score);
    
    // Update the beam by selecting top-k partial solutions
    beam = newPartialSolutions.slice(0, beamSize);
  }
  
  // Return the best solution found in the beam
  return beam[0].solution;
}
