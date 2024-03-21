class Node {
    constructor() {
        this.children = {};
    }
}

class SuffixTree {
    constructor() {
        this.root = new Node();
        this.activeNode = this.root;
        this.activeEdge = 0;
        this.activeLength = 0;
        this.remainingSuffixCount = 0;
        this.end = -1;
        this.splitEnd = null;
        this.size = -1;
        this.rootEnd = null;
        this.position = -1;
    }

    extendSuffixTree(pos) {
        this.end = pos;
        this.remainingSuffixCount++;
        this.lastNewNode = null;

        while (this.remainingSuffixCount > 0) {
            if (this.activeLength === 0) {
                this.activeEdge = pos;
            }

            if (!this.activeNode.children[this.activeEdge]) {
                this.activeNode.children[this.activeEdge] = new Node();
                if (this.lastNewNode !== null) {
                    this.lastNewNode.suffixLink = this.activeNode;
                    this.lastNewNode = null;
                }
            } else {
                let nextNode = this.activeNode.children[this.activeEdge];
                if (this.doTraversal(nextNode)) {
                    continue;
                }
                if (this.input[nextNode.start + this.activeLength] === this.input[pos]) {
                    if (this.lastNewNode !== null && this.activeNode !== this.root) {
                        this.lastNewNode.suffixLink = this.activeNode;
                        this.lastNewNode = null;
                    }
                    this.activeLength++;
                    break;
                }
                
                this.splitEnd = nextNode.start + this.activeLength - 1;
                const splitNode = new Node();
                splitNode.start = nextNode.start;
                splitNode.end = this.splitEnd;
                this.activeNode.children[this.activeEdge] = splitNode;
    
                splitNode.children[this.input[pos]] = new Node();
                nextNode.start += this.activeLength;
                splitNode.children[this.input[nextNode.start]] = nextNode;
    
                if (this.lastNewNode !== null) {
                    this.lastNewNode.suffixLink = splitNode;
                }
    
                this.lastNewNode = splitNode;
            }

            this.remainingSuffixCount--;
            if (this.activeNode === this.root && this.activeLength > 0) {
                this.activeLength--;
                this.activeEdge = pos - this.remainingSuffixCount + 1;
            } else if (this.activeNode !== this.root) {
                this.activeNode = this.activeNode.suffixLink;
            }
        }
    }

    doTraversal(next) {
        const edgeLength = next.end - next.start + 1;
        if (this.activeLength >= edgeLength) {
            this.activeEdge += edgeLength;
            this.activeLength -= edgeLength;
            this.activeNode = next;
            return true;
        }
        return false;
    }

    buildSuffixTree(input) {
        this.input = input;
        this.size = input.length;

        for (let i = 0; i < this.size; i++) {
            this.extendSuffixTree(i);
        }
    }
}

// Example usage
const suffixTree = new SuffixTree();
suffixTree.buildSuffixTree("banana");
console.log(suffixTree);
