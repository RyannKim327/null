class Node {
    constructor(start, end) {
        this.start = start;
        this.end = end;
        this.children = new Map();
        this.suffixLink = null;
    }
}

class SuffixTree {
    constructor(text) {
        this.root = new Node(-1, -1);
        this.text = text;
        this.activeNode = this.root;
        this.activeEdge = 0;
        this.activeLength = 0;
        this.remainingSuffixCount = 0;
        this.end = -1;
        this.splitEnd = null;
        this.size = 0;

        this.buildSuffixTree();
    }

    buildSuffixTree() {
        for (let i = 0; i < this.text.length; i++) {
            this.extendSuffixTree(i);
        }
    }

    extendSuffixTree(pos) {
        this.end = pos;
        this.remainingSuffixCount++;
        this.splitEnd = null;

        while (this.remainingSuffixCount > 0) {
            if (this.activeLength === 0) {
                this.activeEdge = pos;
            }

            if (!this.activeNode.children.has(this.text[this.activeEdge])) {
                this.activeNode.children.set(this.text[this.activeEdge], new Node(pos, this.text.length));
                if (this.lastCreatedNode !== null) {
                    this.lastCreatedNode.suffixLink = this.activeNode;
                    this.lastCreatedNode = null;
                }
            } else {
                let next = this.activeNode.children.get(this.text[this.activeEdge]);
                if (this.walkDown(next)) {
                    continue;
                }

                if (this.text[next.start + this.activeLength] === this.text[pos]) {
                    if (this.splitEnd !== null && this.activeNode !== this.root) {
                        this.splitEnd.end = next.start + this.activeLength - 1;
                        this.splitEnd.children.set(this.text[pos], new Node(pos, this.text.length));
                        next.start += this.activeLength;
                        this.splitEnd.children.set(this.text[next.start], next);
                    }

                    if (this.lastCreatedNode !== null) {
                        this.lastCreatedNode.suffixLink = this.activeNode;
                        this.lastCreatedNode = null;
                    }

                    this.activeLength++;
                    break;
                }

                this.splitEnd = new Node(next.start, next.start + this.activeLength - 1);
                this.activeNode.children.set(this.text[this.activeEdge], this.splitEnd);
                this.splitEnd.children.set(this.text[pos], new Node(pos, this.text.length));
                next.start += this.activeLength;
                this.splitEnd.children.set(this.text[next.start], next);

                if (this.lastCreatedNode !== null) {
                    this.lastCreatedNode.suffixLink = this.splitEnd;
                }

                this.lastCreatedNode = this.splitEnd;
            }

            this.remainingSuffixCount--;
            if (this.activeNode === this.root && this.activeLength > 0) {
                this.activeLength--;
                this.activeEdge = pos - this.remainingSuffixCount + 1;
            } else if (this.activeNode !== this.root) {
                this.activeNode = this.activeNode.suffixLink ? this.activeNode.suffixLink : this.root;
            }
        }
    }

    walkDown(node) {
        if (this.activeLength >= node.end - node.start) {
            this.activeEdge += node.end - node.start;
            this.activeLength -= node.end - node.start;
            this.activeNode = node;
            return true;
        }
        return false;
    }
}

// Usage
const text = "banana";
const suffixTree = new SuffixTree(text);
