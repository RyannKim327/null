class BeamSearch {
  constructor(beamWidth) {
    this.beamWidth = beamWidth;
  }

  search(initialState, generateSuccessors, evaluate) {
    let beam = [initialState];
    
    for (let i = 0; i < 3; i++) {
      let newBeam = [];
      
      for (let state of beam) {
        let successors = generateSuccessors(state);
        
        for (let successor of successors) {
          let score = evaluate(successor);
          newBeam.push({ state: successor, score: score });
        }
      }
      
      newBeam.sort((a, b) => b.score - a.score);
      beam = newBeam.slice(0, this.beamWidth);
    }

    return beam;
  }
}

// Example usage
const beamSearch = new BeamSearch(3);

// Define a sample scoring function
function evaluate(state) {
  return state * state; // Simple scoring based on the square of the state
}

// Define a sample function to generate successors
function generateSuccessors(state) {
  return [state - 1, state + 1]; // Simple generation of successor states
}

// Define the initial state
const initialState = 0;

// Perform beam search
const results = beamSearch.search(initialState, generateSuccessors, evaluate);

results.forEach(result => console.log(result.state, result.score));
