class SuffixTreeNode {
    children: Map<string, SuffixTreeNode>;
    start: number;
    end: number | undefined; // Use undefined for leaf nodes
    suffixLink: SuffixTreeNode | null;

    constructor(start: number, end?: number) {
        this.children = new Map();
        this.start = start;
        this.end = end;
        this.suffixLink = null;
    }

    getEdgeLength(): number {
        return (this.end ?? -1) - this.start + 1;
    }
}

class SuffixTree {
    private root: SuffixTreeNode;
    private text: string;
    private activeNode: SuffixTreeNode;
    private activeEdge: number;
    private activeLength: number;
    private remaining: number;
    private lastNewNode: SuffixTreeNode | null;

    constructor(text: string) {
        this.text = text;
        this.root = new SuffixTreeNode(-1);
        this.activeNode = this.root;
        this.activeEdge = -1;
        this.activeLength = 0;
        this.remaining = 0;
        this.lastNewNode = null;

        this.buildSuffixTree();
    }

    private buildSuffixTree(): void {
        for (let i = 0; i < this.text.length; i++) {
            this.extendSuffixTree(i);
        }
    }

    private extendSuffixTree(pos: number): void {
        this.lastNewNode = null;
        this.remaining++;

        while (this.remaining > 0) {
            if (this.activeLength === 0) {
                this.activeEdge = pos;
            }

            const activeEdgeChar = this.text[this.activeEdge];
            if (!this.activeNode.children.has(activeEdgeChar)) {
                this.activeNode.children.set(activeEdgeChar, new SuffixTreeNode(pos));
                this.addSuffixLink(this.activeNode);
            } else {
                const nextNode = this.activeNode.children.get(activeEdgeChar)!;
                if (this.walkDown(nextNode)) {
                    continue;
                }

                if (this.text[nextNode.start + this.activeLength] === this.text[pos]) {
                    this.activeLength++;
                    this.addSuffixLink(this.activeNode);
                    break;
                }

                const splitEnd = nextNode.start + this.activeLength - 1;
                const splitNode = new SuffixTreeNode(nextNode.start, splitEnd);
                this.activeNode.children.set(activeEdgeChar, splitNode);

                const newNode = new SuffixTreeNode(pos);
                splitNode.children.set(this.text[pos], newNode);

                nextNode.start += this.activeLength;
                splitNode.children.set(this.text[nextNode.start], nextNode);

                this.addSuffixLink(splitNode);
            }

            this.remaining--;
            if (this.activeNode === this.root && this.activeLength > 0) {
                this.activeLength--;
                this.activeEdge = pos - this.remaining + 1;
            } else {
                this.activeNode = this.activeNode.suffixLink ?? this.root;
            }
        }
    }

    private walkDown(node: SuffixTreeNode): boolean {
        const edgeLength = node.getEdgeLength();
        if (this.activeLength >= edgeLength) {
            this.activeEdge += edgeLength;
            this.activeLength -= edgeLength;
            this.activeNode = node;
            return true;
        }
        return false;
    }

    private addSuffixLink(node: SuffixTreeNode): void {
        if (this.lastNewNode !== null) {
            this.lastNewNode.suffixLink = node;
        }
        this.lastNewNode = node;
    }

    public search(pattern: string): boolean {
        let currentNode = this.root;
        let currentEdgeIndex = 0;

        for (let i = 0; i < pattern.length; i++) {
            const char = pattern[i];
            if (!currentNode.children.has(char)) {
                return false;
            }

            const childNode = currentNode.children.get(char)!;
            const edgeLength = childNode.getEdgeLength();

            for (let j = childNode.start; j <= (childNode.end ?? this.text.length - 1); j++) {
                if (this.text[j] !== pattern[currentEdgeIndex]) {
                    return false;
                }
                currentEdgeIndex++;

                if (currentEdgeIndex === pattern.length) {
                    return true;
                }
            }

            currentNode = childNode;
        }

        return false;
    }
}

// Example Usage
const text = "banana";
const suffixTree = new SuffixTree(text);

console.log(suffixTree.search("ana")); // true
console.log(suffixTree.search("xyz")); // false
