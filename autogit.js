class BeamSearch {
    constructor(beamWidth) {
        this.beamWidth = beamWidth;
    }

    search(startNode, maxDepth, goalTest, successorFn, heuristicFn) {
        let currentBeam = [startNode];
        let nextBeam = [];

        for (let depth = 0; depth < maxDepth; depth++) {
            for (let node of currentBeam) {
                if (goalTest(node)) {
                    return node;
                }

                let successors = successorFn(node);
                for (let successor of successors) {
                    successor.f = node.f + heuristicFn(successor);
                    nextBeam.push(successor);
                }
            }

            nextBeam.sort((a, b) => a.f - b.f);
            currentBeam = nextBeam.slice(0, this.beamWidth);
            nextBeam = [];
        }

        return null;
    }
}

// Usage example
const beamSearch = new BeamSearch(3);

function goalTest(node) {
    return node === 5;
}

function successorFn(node) {
    return [node + 1, node + 2, node + 3];
}

function heuristicFn(node) {
    return Math.abs(node - 5);
}

const result = beamSearch.search(0, 10, goalTest, successorFn, heuristicFn);
console.log(result);
