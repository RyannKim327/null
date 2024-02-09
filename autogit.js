function beamSearch(starting_candidates, beam_width, max_iterations) {
  let beam = starting_candidates;
  
  for (let iteration = 1; iteration <= max_iterations; iteration++) {
    let next_beam = [];
    
    for (let candidate of beam) {
      let next_candidates = generateNextCandidates(candidate);
      
      for (let next_candidate of next_candidates) {
        next_candidate.score = scoreFunction(next_candidate);
        next_beam.push(next_candidate);
      }
    }
    
    next_beam.sort((a, b) => b.score - a.score); // Sort candidates by score descending
    
    beam = next_beam.slice(0, beam_width); // Keep only the top candidates
    
    if (terminationConditionMet(beam)) {
      break;
    }
  }
  
  return beam[0]; // Return the best candidate
}
