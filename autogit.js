class BeamSearch {
    constructor(beamWidth, maxSteps) {
        this.beamWidth = beamWidth;
        this.maxSteps = maxSteps;
    }

    search(startState, getNextStates, evaluate) {
        let beams = [{ state: startState, score: 0, path: [startState]}];

        for (let step = 0; step < this.maxSteps; step++) {
            let nextBeams = [];
            for (let beam of beams) {
                let nextStates = getNextStates(beam.state);
                for (let nextState of nextStates) {
                    let score = beam.score + evaluate(nextState);
                    nextBeams.push({ state: nextState, score: score, path: beam.path.concat([nextState]) });
                }
            }

            nextBeams.sort((a, b) => b.score - a.score);
            beams = nextBeams.slice(0, this.beamWidth);
        }

        return beams[0].path;
    }
}

// Usage example
const beamSearch = new BeamSearch(3, 5);

const startState = 1;
const getNextStates = (state) => [state + 1, state + 2];
const evaluate = (state) => -Math.abs(state - 10); // Example evaluation function that tries to get closer to 10

const resultPath = beamSearch.search(startState, getNextStates, evaluate);
console.log(resultPath);
