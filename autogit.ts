class SuffixTreeNode {
  children: Map<string, SuffixTreeEdge>;
  suffixLink: SuffixTreeNode | null;

  constructor() {
    this.children = new Map();
    this.suffixLink = null;
  }
}

class SuffixTreeEdge {
  start: number;
  end: { value: number }; // end is an object to allow global updates on leaf edges
  dest: SuffixTreeNode;

  constructor(start: number, end: { value: number }, dest: SuffixTreeNode) {
    this.start = start;
    this.end = end;
    this.dest = dest;
  }

  length(pos: number) {
    return Math.min(this.end.value, pos + 1) - this.start;
  }
}

class SuffixTree {
  text: string;
  root: SuffixTreeNode;
  activeNode: SuffixTreeNode;
  activeEdge: number;   // index in text
  activeLength: number;
  remainingSuffixCount: number;
  leafEnd: { value: number };
  size: number;

  constructor(text: string) {
    this.text = text;
    this.root = new SuffixTreeNode();
    this.activeNode = this.root;
    this.activeEdge = -1;
    this.activeLength = 0;
    this.remainingSuffixCount = 0;
    this.leafEnd = { value: -1 };
    this.size = text.length;

    this.build();
  }

  private edgeChar(index: number): string {
    return this.text[index];
  }

  private build() {
    for (let i = 0; i < this.size; i++) {
      this.leafEnd.value = i;
      this.remainingSuffixCount++;
      let lastNewNode: SuffixTreeNode | null = null;

      while (this.remainingSuffixCount > 0) {
        if (this.activeLength === 0) {
          this.activeEdge = i;
        }
        let activeEdgeChar = this.edgeChar(this.activeEdge);

        if (!this.activeNode.children.has(activeEdgeChar)) {
          // Rule 2 (new leaf edge)
          let leafNode = new SuffixTreeNode();
          this.activeNode.children.set(
            activeEdgeChar,
            new SuffixTreeEdge(i, this.leafEnd, leafNode)
          );

          if (lastNewNode !== null) {
            lastNewNode.suffixLink = this.activeNode;
            lastNewNode = null;
          }
        } else {
          let nextEdge = this.activeNode.children.get(activeEdgeChar)!;
          let edgeLength = nextEdge.length(i);

          if (this.activeLength >= edgeLength) {
            this.activeEdge += edgeLength;
            this.activeLength -= edgeLength;
            this.activeNode = nextEdge.dest;
            continue;
          }

          if (
            this.text[nextEdge.start + this.activeLength] ===
            this.text[i]
          ) {
            // Rule 3 (current character is on the edge)
            this.activeLength++;
            if (lastNewNode !== null) {
              lastNewNode.suffixLink = this.activeNode;
              lastNewNode = null;
            }
            break;
          }

          // Rule 2 (split edge)
          let splitEnd = { value: nextEdge.start + this.activeLength - 1 };
          let splitNode = new SuffixTreeNode();
          this.activeNode.children.set(
            activeEdgeChar,
            new SuffixTreeEdge(nextEdge.start, splitEnd, splitNode)
          );
          splitNode.children.set(
            this.text[i],
            new SuffixTreeEdge(i, this.leafEnd, new SuffixTreeNode())
          );

          nextEdge.start += this.activeLength;
          splitNode.children.set(
            this.text[nextEdge.start],
            nextEdge
          );

          if (lastNewNode !== null) {
            lastNewNode.suffixLink = splitNode;
          }
          lastNewNode = splitNode;
        }

        this.remainingSuffixCount--;

        if (this.activeNode === this.root && this.activeLength > 0) {
          this.activeLength--;
          this.activeEdge = i - this.remainingSuffixCount + 1;
        } else if (this.activeNode !== this.root) {
          this.activeNode = this.activeNode.suffixLink || this.root;
        }
      }
    }
  }

  // Example search function: returns true if pattern exists
  search(pattern: string): boolean {
    let currentNode = this.root;
    let index = 0;

    while (index < pattern.length) {
      let edge = currentNode.children.get(pattern[index]);
      if (!edge) return false;

      let edgeLength = edge.end.value - edge.start + 1;
      let subStr = this.text.substring(edge.start, edge.end.value + 1);

      for (let i = 0; i < edgeLength && index < pattern.length; i++, index++) {
        if (subStr[i] !== pattern[index]) return false;
      }
      currentNode = edge.dest;
    }
    return true;
  }
}

// Usage
const st = new SuffixTree("bananas$");
console.log(st.search("ana")); // true
console.log(st.search("apple")); // false
