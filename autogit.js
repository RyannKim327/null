class Node {
    constructor(start, end) {
        this.start = start;
        this.end = end;
        this.children = {};
        this.suffixLink = null;
    }
}

class SuffixTree {
    constructor(str) {
        this.root = new Node(-1, -1);
        this.activeNode = this.root;
        this.activeEdge = 0;
        this.activeLength = 0;
        this.remainingSuffixCount = 0;
        this.end = -1;
        this.str = str;

        this.buildSuffixTree();
    }

    buildSuffixTree() {
        for (let i = 0; i < this.str.length; i++) {
            this.extendSuffixTree(i);
        }
    }

    extendSuffixTree(pos) {
        this.end = pos;

        this.remainingSuffixCount++;
        let lastCreatedNode = null;

        while (this.remainingSuffixCount > 0) {
            if (this.activeLength === 0) {
                this.activeEdge = pos;
            }

            if (!this.activeNode.children[this.str[this.activeEdge]]) {
                this.activeNode.children[this.str[this.activeEdge]] = new Node(pos, this.end);
                if (lastCreatedNode !== null) {
                    lastCreatedNode.suffixLink = this.activeNode;
                    lastCreatedNode = null;
                }
            } else {
                let next = this.activeNode.children[this.str[this.activeEdge]];
                if (this.walkDown(next)) {
                    continue;
                }

                if (this.str[next.start + this.activeLength] == this.str[pos]) {
                    if (lastCreatedNode !== null && this.activeNode !== this.root) {
                        lastCreatedNode.suffixLink = this.activeNode;
                        lastCreatedNode = null;
                    }

                    this.activeLength++;
                    break;
                }

                let splitEnd = next.start + this.activeLength - 1;
                let splitNode = new Node(next.start, splitEnd);
                this.activeNode.children[this.str[this.activeEdge]] = splitNode;
                splitNode.children[this.str[pos]] = new Node(pos, this.end);
                next.start += this.activeLength;
                splitNode.children[this.str[next.start]] = next;

                if (lastCreatedNode !== null) {
                    lastCreatedNode.suffixLink = splitNode;
                }

                lastCreatedNode = splitNode;
            }

            this.remainingSuffixCount--;

            if (this.activeNode === this.root && this.activeLength > 0) {
                this.activeLength--;
                this.activeEdge = pos - this.remainingSuffixCount + 1;
            } else if (this.activeNode !== this.root) {
                this.activeNode = this.activeNode.suffixLink || this.root;
            }
        }
    }

    walkDown(next) {
        if (this.activeLength >= next.end - next.start + 1) {
            this.activeEdge += next.end - next.start + 1;
            this.activeLength -= next.end - next.start + 1;
            this.activeNode = next;
            return true;
        }
        return false;
    }
}

// Example usage
const suffixTree = new SuffixTree("banana");
