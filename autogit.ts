interfaceBeamSearchParams<T> {
  // The function to score each hypothesis
  scoreFunction: (hypothesis: T) => number;

  // The beam size (number of hypotheses to keep at each step)
  beamSize: number;

  // The maximum length of the sequence to generate
  maxLen: number;

  // The starting hypotheses (usually a single starting symbol)
  start: T[];
}

class BeamSearch<T> {
  private scoreFunction: (hypothesis: T) => number;
  private beamSize: number;
  private maxLen: number;
  private hypotheses: T[];

  constructor(params: BeamSearchParams<T>) {
    this.scoreFunction = params.scoreFunction;
    this.beamSize = params.beamSize;
    this.maxLen = params.maxLen;
    this.hypotheses = params.start;
  }

  search(): T[] {
    for (let len = 0; len < this.maxLen; len++) {
      const newHypotheses: T[] = [];

      // Loop through each current hypothesis
      for (const hypothesis of this.hypotheses) {
        // Get the next possible extensions of this hypothesis
        const extensions = this.getNextExtensions(hypothesis);

        // Loop through each extension
        for (const extension of extensions) {
          // Calculate the score of this extension
          const score = this.scoreFunction(extension);

          // Add the extension to the new hypotheses with its score
          newHypotheses.push({ hypothesis: extension, score });
        }
      }

      // Sort the new hypotheses by score (highest score first)
      newHypotheses.sort((a, b) => b.score - a.score);

      // Keep only the top beamSize hypotheses
      this.hypotheses = newHypotheses.slice(0, this.beamSize);
    }

    return this.hypotheses.map(h => h.hypothesis);
  }

  private getNextExtensions(hypothesis: T): T[] {
    // This function should return the next possible extensions of the given hypothesis
    // For example, in a language model, this might return the next possible words
    throw new Error("getNextExtensions must be implemented");
  }
}
interface Sentence {
  words: string[];
  score: number;
}

const beamSearchParams: BeamSearchParams<Sentence> = {
  scoreFunction: (sentence: Sentence) => sentence.score,
  beamSize: 5,
  maxLen: 10,
  start: [{ words: [], score: 0 }]
};

constbeamSearch = new BeamSearch(beamSearchParams);

const nextWords = (sentence: Sentence) => {
  // Return the next possible words based on the current sentence
  if (sentence.words.length === 0) {
    return [{ words: ["hello", "world"], score: 1 }, { words: ["foo", "bar"], score: 0.5 }];
  } else {
    return [{ words: [...sentence.words, " foo"], score: 0.8 }, { words: [...sentence.words, " bar"], score: 0.2 }];
  }
};

beamSearch.getNextExtensions = nextWords;

const results = beamSearch.search();
console.log(results); // [{ words: ["hello", "world", "foo"], score: 1.8 }, ...]
