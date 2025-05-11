class SuffixTreeNode {
  edges: Map<string, SuffixTreeNode>;
  start: number | null;
  end: number | null;
  suffixIndex: number | null;

  constructor(start: number | null = null, end: number | null = null) {
    this.edges = new Map();
    this.start = start;
    this.end = end;
    this.suffixIndex = null; // Leaf nodes carry suffix index
  }
}

class SuffixTree {
  text: string;
  root: SuffixTreeNode;

  constructor(text: string) {
    this.text = text;
    this.root = new SuffixTreeNode();
    this.buildNaive();
  }

  // Build suffix tree in O(n^2) time for simplicity
  buildNaive() {
    for (let i = 0; i < this.text.length; i++) {
      this.insertSuffix(i);
    }
  }

  insertSuffix(startIndex: number) {
    let currentNode = this.root;
    let currentSuffix = this.text.slice(startIndex);

    let idx = 0;
    while (idx < currentSuffix.length) {
      const ch = currentSuffix[idx];
      if (!currentNode.edges.has(ch)) {
        // Insert new edge for remaining suffix
        const newNode = new SuffixTreeNode(startIndex + idx, this.text.length - 1);
        newNode.suffixIndex = startIndex;
        currentNode.edges.set(ch, newNode);
        return;
      }

      // Walk existing edge, compare characters
      const nextNode = currentNode.edges.get(ch)!;
      const edgeStart = nextNode.start!;
      const edgeEnd = nextNode.end!;
      const edgeLength = edgeEnd - edgeStart + 1;

      let splitIndex = 0;
      while (
        splitIndex < edgeLength &&
        idx + splitIndex < currentSuffix.length &&
        this.text[edgeStart + splitIndex] === currentSuffix[idx + splitIndex]
      ) {
        splitIndex++;
      }

      if (splitIndex === edgeLength) {
        // Edge is fully matched; go deeper
        currentNode = nextNode;
        idx += splitIndex;
      } else {
        // Need to split edge
        const existingChar = this.text[edgeStart + splitIndex];
        const newChar = currentSuffix[idx + splitIndex];

        // Create split node
        const splitNode = new SuffixTreeNode(edgeStart, edgeStart + splitIndex - 1);

        // Assign existing edge to splitNode
        splitNode.edges.set(existingChar, nextNode);

        // Update nextNode's edge start index
        nextNode.start = edgeStart + splitIndex;

        // Insert new leaf for remaining suffix part
        const leaf = new SuffixTreeNode(startIndex + idx + splitIndex, this.text.length - 1);
        leaf.suffixIndex = startIndex;
        splitNode.edges.set(newChar, leaf);

        // Replace edge from currentNode with splitNode
        currentNode.edges.set(ch, splitNode);
        return;
      }
    }
  }

  // Utility to display the suffix tree edges (for debugging)
  printEdges(node: SuffixTreeNode = this.root, indent = "") {
    for (const [ch, edgeNode] of node.edges) {
      const label = this.text.substring(edgeNode.start!, edgeNode.end! + 1);
      console.log(`${indent}${ch} -> "${label}" [${edgeNode.suffixIndex ?? '-'}]`);
      this.printEdges(edgeNode, indent + "  ");
    }
  }
}

// Example usage
const st = new SuffixTree("banana$");
st.printEdges();
