class SuffixTreeNode {
  edges: Map<string, SuffixTreeEdge>;
  suffixIndex?: number; // Only for leaves

  constructor() {
    this.edges = new Map();
    this.suffixIndex = undefined;
  }
}

class SuffixTreeEdge {
  start: number; // start index of substring in original string
  end: number;   // end index (inclusive)
  node: SuffixTreeNode;

  constructor(start: number, end: number, node: SuffixTreeNode) {
    this.start = start;
    this.end = end;
    this.node = node;
  }
}

class SuffixTree {
  root: SuffixTreeNode;
  text: string;

  constructor(text: string) {
    this.text = text + "$";  // append unique terminal symbol
    this.root = new SuffixTreeNode();
    this.buildNaive();
  }

  private buildNaive() {
    for (let i = 0; i < this.text.length; i++) {
      this.insertSuffix(i);
    }
  }

  // Insert suffix starting at pos
  private insertSuffix(pos: number) {
    let currentNode = this.root;
    let currentPos = pos;

    while (currentPos < this.text.length) {
      const char = this.text[currentPos];
      if (!currentNode.edges.has(char)) {
        // No edge starting with char, create a new leaf edge
        const leaf = new SuffixTreeNode();
        leaf.suffixIndex = pos;
        currentNode.edges.set(char, new SuffixTreeEdge(currentPos, this.text.length - 1, leaf));
        return;
      }

      // Walk along the edge
      const edge = currentNode.edges.get(char)!;
      const labelStart = edge.start;
      const labelEnd = edge.end;

      let labelIndex = labelStart;
      let suffixIndex = currentPos;

      // Walk while characters match
      while (labelIndex <= labelEnd && this.text[labelIndex] === this.text[suffixIndex]) {
        labelIndex++;
        suffixIndex++;
      }

      if (labelIndex > labelEnd) {
        // Entire edge label matches, go down to next node
        currentNode = edge.node;
        currentPos = suffixIndex;
        continue;
      }

      // Mismatch found, need to split the edge
      const existingChar = this.text[labelIndex];
      const newChar = this.text[suffixIndex];

      // Create a new intermediate node
      const splitNode = new SuffixTreeNode();

      // Create edge from split node to existing child node
      const oldEdge = new SuffixTreeEdge(labelIndex, labelEnd, edge.node);
      // Update current edge to end at split position
      edge.end = labelIndex - 1;
      edge.node = splitNode;

      // Attach old edge starting at labelIndex now connected to splitNode
      splitNode.edges.set(existingChar, oldEdge);

      // Create a new leaf for the new suffix part
      const leaf = new SuffixTreeNode();
      leaf.suffixIndex = pos;
      const newEdge = new SuffixTreeEdge(suffixIndex, this.text.length - 1, leaf);
      splitNode.edges.set(newChar, newEdge);

      return;
    }
  }

  // Optional - method to visualize tree (example: print all suffixes)
  collectSuffixes() {
    const results: { suffix: string; index: number }[] = [];

    const dfs = (node: SuffixTreeNode, path: string) => {
      if (node.suffixIndex !== undefined) {
        results.push({ suffix: this.text.substring(node.suffixIndex), index: node.suffixIndex });
      }
      for (const [char, edge] of node.edges) {
        const edgeLabel = this.text.substring(edge.start, edge.end + 1);
        dfs(edge.node, path + edgeLabel);
      }
    };

    dfs(this.root, "");
    return results;
  }
}

// Example usage:
const tree = new SuffixTree("banana");
console.log(tree.collectSuffixes());
