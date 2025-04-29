class SuffixTreeNode {
  // Edges: Map from first character of edge label to child node
  children: Map<string, SuffixTreeEdge> = new Map();
  // For leaf nodes, suffixIndex will be set.
  suffixIndex?: number;

  constructor() {}
}

class SuffixTreeEdge {
  // Start and end indices (inclusive) on the input text for the edge label
  start: number;
  end: number;
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
    this.text = text + "$"; // Append unique terminal symbol to ensure suffix uniqueness
    this.root = new SuffixTreeNode();
    this.buildSuffixTree();
  }

  buildSuffixTree() {
    // Naive approach: insert all suffixes explicitly
    for (let i = 0; i < this.text.length; i++) {
      this.insertSuffix(i);
    }
  }

  insertSuffix(startIndex: number) {
    let currentNode = this.root;
    let currentIndex = startIndex;

    while (currentIndex < this.text.length) {
      const currentChar = this.text[currentIndex];
      const edge = currentNode.children.get(currentChar);
      
      if (!edge) {
        // No edge starting with currentChar, just add a new edge for the suffix
        const leafNode = new SuffixTreeNode();
        leafNode.suffixIndex = startIndex;
        currentNode.children.set(
          currentChar,
          new SuffixTreeEdge(currentIndex, this.text.length - 1, leafNode)
        );
        return;
      }

      // Edge exists, need to walk along the edge characters
      const labelStart = edge.start;
      const labelEnd = edge.end;
      const labelLength = labelEnd - labelStart + 1;

      let i = 0;
      while (
        i < labelLength &&
        this.text[labelStart + i] === this.text[currentIndex + i]
      ) {
        i++;
      }

      if (i === labelLength) {
        // Full edge matches, continue down the tree
        currentNode = edge.node;
        currentIndex += i;
      } else {
        // Mismatch - split the edge
        const splitNode = new SuffixTreeNode();

        // Existing edge gets shortened
        const oldEdgeNode = edge.node;

        // New edge for the suffix part after split
        const leafNode = new SuffixTreeNode();
        leafNode.suffixIndex = startIndex;

        // Replace old edge with split edge
        currentNode.children.set(
          currentChar,
          new SuffixTreeEdge(labelStart, labelStart + i - 1, splitNode)
        );

        // Edge from split node to old edge node
        splitNode.children.set(
          this.text[labelStart + i],
          new SuffixTreeEdge(labelStart + i, labelEnd, oldEdgeNode)
        );

        // Edge from split node to new leaf for suffix
        splitNode.children.set(
          this.text[currentIndex + i],
          new SuffixTreeEdge(currentIndex + i, this.text.length - 1, leafNode)
        );

        return; // Insert done
      }
    }
  }

  // Optional utility: traverse the tree and print edges for debugging
  printTree(node: SuffixTreeNode = this.root, indent: string = "") {
    for (const [key, edge] of node.children) {
      const label = this.text.slice(edge.start, edge.end + 1);
      console.log(`${indent}${key} -> "${label}"`);
      this.printTree(edge.node, indent + "  ");
    }
    if (node.suffixIndex !== undefined) {
      console.log(`${indent}(leaf) suffix index: ${node.suffixIndex}`);
    }
  }
}
const text = "banana";
const tree = new SuffixTree(text);
tree.printTree();
