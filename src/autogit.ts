class SuffixTreeNode {
    children: Map<string, SuffixTreeNode>;
    start: number;
    end: number | (() => number); // End can be dynamic (used for active points)
    suffixLink: SuffixTreeNode | null;

    constructor(start: number, end: number | (() => number)) {
        this.children = new Map();
        this.start = start;
        this.end = end;
        this.suffixLink = null;
    }

    getEdgeLength(): number {
        return typeof this.end === 'function' ? this.end() - this.start : this.end - this.start;
    }
}
class SuffixTree {
    private root: SuffixTreeNode;
    private text: string;
    private activeNode: SuffixTreeNode;
    private activeEdge: number;
    private activeLength: number;
    private remainingSuffixCount: number;
    private lastNewNode: SuffixTreeNode | null;

    constructor(text: string) {
        this.text = text;
        this.root = new SuffixTreeNode(-1, -1);
        this.activeNode = this.root;
        this.activeEdge = -1;
        this.activeLength = 0;
        this.remainingSuffixCount = 0;
        this.lastNewNode = null;

        this.buildSuffixTree();
    }

    private buildSuffixTree(): void {
        let n = this.text.length;
        let end = () => n - 1; // Dynamic end for leaf nodes

        for (let i = 0; i < n; i++) {
            this.extendSuffixTree(i, end);
        }
    }

    private extendSuffixTree(pos: number, end: () => number): void {
        this.lastNewNode = null;
        this.remainingSuffixCount++;

        while (this.remainingSuffixCount > 0) {
            if (this.activeLength === 0) {
                this.activeEdge = pos;
            }

            let activeEdgeChar = this.activeEdge < this.text.length ? this.text[this.activeEdge] : '#';
            if (!this.activeNode.children.has(activeEdgeChar)) {
                this.activeNode.children.set(activeEdgeChar, new SuffixTreeNode(pos, end));
                this.addSuffixLink(this.activeNode);
            } else {
                let next = this.activeNode.children.get(activeEdgeChar)!;
                if (this.walkDown(next)) continue;

                if (this.text[next.start + this.activeLength] === this.text[pos]) {
                    this.activeLength++;
                    this.addSuffixLink(this.activeNode);
                    break;
                }

                let splitEnd = next.start + this.activeLength - 1;
                let split = new SuffixTreeNode(next.start, splitEnd);
                this.activeNode.children.set(activeEdgeChar, split);

                split.children.set(this.text[pos], new SuffixTreeNode(pos, end));
                next.start += this.activeLength;
                split.children.set(this.text[next.start], next);

                this.addSuffixLink(split);
            }

            this.remainingSuffixCount--;
            if (this.activeNode === this.root && this.activeLength > 0) {
                this.activeLength--;
                this.activeEdge = pos - this.remainingSuffixCount + 1;
            } else {
                this.activeNode = this.activeNode.suffixLink || this.root;
            }
        }
    }

    private walkDown(next: SuffixTreeNode): boolean {
        if (this.activeLength >= next.getEdgeLength()) {
            this.activeEdge += next.getEdgeLength();
            this.activeLength -= next.getEdgeLength();
            this.activeNode = next;
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

    public printTree(node: SuffixTreeNode = this.root, prefix: string = ""): void {
        for (let [char, child] of node.children) {
            console.log(`${prefix}${char}: ${this.text.slice(child.start, typeof child.end === 'function' ? child.end() : child.end)}`);
            this.printTree(child, prefix + "  ");
        }
    }
}

// Example Usage
const text = "banana$";
const suffixTree = new SuffixTree(text);
suffixTree.printTree();
b: banana$
  a: anana$
    n: nana$
      a: ana$
        n: na$
          a: a$
            $: $
n: nana$
  a: ana$
    n: na$
      a: a$
        $: $
a: ana$
  n: na$
    a: a$
      $: $
$: $
