function beamSearch(initialState, beamWidth, maxDepth) {
  let beam = [{ state: initialState, score: 0 }];
  
  for (let depth = 0; depth < maxDepth; depth++) {
    let newBeam = [];
    
    for (let i = 0; i < beam.length; i++) {
      let { state, score } = beam[i];
      
      // Generate possible next states from current state
      let nextStates = generateNextStates(state);
      
      for (let j = 0; j < nextStates.length; j++) {
        let nextState = nextStates[j];
        let nextScore = scoreFunction(nextState);
        newBeam.push({ state: nextState, score: nextScore });
      }
    }
    
    // Sort the new beam by score
    newBeam.sort((a, b) => b.score - a.score);
    
    // Truncate the beam to the top-scoring solutions
    beam = newBeam.slice(0, beamWidth);
  }
  
  return beam[0].state; // Return the best solution found
}
