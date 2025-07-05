// Represents an edge label via indices, instead of actual substrings for efficiency
interface Edge {
  start: number;
  end: number;
  targetNode: SuffixTreeNode;
}

class SuffixTreeNode {
  // Map from character to outgoing edge
  children: Map<string, Edge> = new Map();
  suffixLink: SuffixTreeNode | null = null;

  // For debugging or traversal
  parent?: SuffixTreeNode;
  edgeChar?: string;
}
class SuffixTree {
  root: SuffixTreeNode;
  text: string;

  // Active point
  activeNode: SuffixTreeNode;
  activeEdge: number;
  activeLength: number;

  remainingSuffixCount: number;
  lastCreatedInternalNode: SuffixTreeNode | null = null;

  // End index for current suffix
  leafEnd: number;

  constructor(text: string) {
    this.text = text + "$"; // Add unique termination symbol
    this.root = new SuffixTreeNode();
    this.activeNode = this.root;
    this.activeEdge = -1;
    this.activeLength = 0;
    this.remainingSuffixCount = 0;
    this.leafEnd = -1;
    this.build();
  }

  private build() {
    for (let i = 0; i < this.text.length; i++) {
      this.extend(i);
    }
  }

  private extend(pos: number) {
    this.leafEnd = pos;
    this.remainingSuffixCount++;
    this.lastCreatedInternalNode = null;

    while (this.remainingSuffixCount > 0) {
      if (this.activeLength === 0) this.activeEdge = pos;

      const activeEdgeChar = this.text[this.activeEdge];
      
      if (!this.activeNode.children.has(activeEdgeChar)) {
        // No edge starting with activeEdgeChar, create a new leaf
        const leafNode = new SuffixTreeNode();
        this.activeNode.children.set(activeEdgeChar, {
          start: pos,
          end: this.leafEnd,
          targetNode: leafNode
        });
        leafNode.parent = this.activeNode;

        if (this.lastCreatedInternalNode) {
          this.lastCreatedInternalNode.suffixLink = this.activeNode;
          this.lastCreatedInternalNode = null;
        }
      } else {
        // Edge exists; walk down
        const edge = this.activeNode.children.get(activeEdgeChar)!;
        const edgeLength = edge.end - edge.start + 1;

        if (this.activeLength >= edgeLength) {
          this.activeEdge += edgeLength;
          this.activeLength -= edgeLength;
          this.activeNode = edge.targetNode;
          continue;
        }

        // Check if next char matches
        const nextChar = this.text[edge.start + this.activeLength];
        if (nextChar === this.text[pos]) {
          // Next character matches; increase active length
          this.activeLength++;
          if (this.lastCreatedInternalNode) {
            this.lastCreatedInternalNode.suffixLink = this.activeNode;
            this.lastCreatedInternalNode = null;
          }
          break;
        }

        // Split edge
        const splitNode = new SuffixTreeNode();

        const newEdge: Edge = {
          start: edge.start,
          end: edge.start + this.activeLength - 1,
          targetNode: splitNode
        };

        this.activeNode.children.set(activeEdgeChar, newEdge);
        // Create leaf from split node
        const leafNode = new SuffixTreeNode();
        leafNode.parent = splitNode;

        splitNode.children.set(this.text[pos], {
          start: pos,
          end: this.leafEnd,
          targetNode: leafNode
        });

        // Adjust original edge
        edge.start += this.activeLength;
        splitNode.children.set(this.text[edge.start], edge);
        edge.targetNode.parent = splitNode;

        if (this.lastCreatedInternalNode) {
          this.lastCreatedInternalNode.suffixLink = splitNode;
        }

        this.lastCreatedInternalNode = splitNode;
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

  // Traversal or search functions can be added here
}
const text = "banana";
const suffixTree = new SuffixTree(text);

// You can now implement pattern search, substring checks, etc.
