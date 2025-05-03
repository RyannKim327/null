class SuffixTreeNode {
  children: Map<string, SuffixTreeNode>;
  // Store edge label by start and end indices on the original text
  start: number | null;
  end: number | null;
  suffixIndex: number | null; // For leaf nodes, the start of the suffix in the text

  constructor(start: number | null = null, end: number | null = null) {
    this.children = new Map();
    this.start = start;
    this.end = end;
    this.suffixIndex = null;
  }
}

class SuffixTree {
  text: string;
  root: SuffixTreeNode;

  constructor(text: string) {
    this.text = text;
    this.root = new SuffixTreeNode();
    this.build();
  }

  private build() {
    // Naive approach: insert all suffixes one by one
    for (let i = 0; i < this.text.length; i++) {
      this.insertSuffix(i);
    }
  }

  private insertSuffix(startIndex: number) {
    let currentNode = this.root;
    let substring = this.text.substring(startIndex);

    for (let charIndex = 0; charIndex < substring.length; ) {
      const char = substring[charIndex];

      if (!currentNode.children.has(char)) {
        // Insert new leaf edge
        const leaf = new SuffixTreeNode(startIndex + charIndex, this.text.length);
        leaf.suffixIndex = startIndex;
        currentNode.children.set(char, leaf);
        return;
      }

      const child = currentNode.children.get(char)!;
      const labelStart = child.start!;
      const labelEnd = child.end!;
      const labelLength = labelEnd - labelStart;
      const label = this.text.substring(labelStart, labelEnd);

      // Find longest common prefix between label and remaining suffix to insert
      let k = 0;
      while (k < labelLength && charIndex + k < substring.length &&
             substring[charIndex + k] === label[k]) {
        k++;
      }

      if (k === labelLength) {
        // Current label fully matches, move down the edge
        currentNode = child;
        charIndex += labelLength;
      } else {
        // Split edge
        const oldChild = child;

        // New internal node for common part
        const internalNode = new SuffixTreeNode(labelStart, labelStart + k);
        currentNode.children.set(char, internalNode);

        // Adjust old child edge
        oldChild.start = labelStart + k;
        internalNode.children.set(this.text[oldChild.start], oldChild);

        // Add new leaf for remaining suffix part
        const leaf = new SuffixTreeNode(startIndex + charIndex + k, this.text.length);
        leaf.suffixIndex = startIndex;
        internalNode.children.set(substring[charIndex + k], leaf);
        return;
      }
    }
  }

  // Optional: Function to display tree for debugging
  printTree(node: SuffixTreeNode = this.root, indent: string = '') {
    for (const [char, child] of node.children.entries()) {
      const label = this.text.substring(child.start!, child.end!);
      if (child.suffixIndex !== null) {
        console.log(`${indent}${char} -> [${label}] (leaf: suffix starts at ${child.suffixIndex})`);
      } else {
        console.log(`${indent}${char} -> [${label}]`);
      }
      this.printTree(child, indent + '  ');
    }
  }
}
const st = new SuffixTree("banana$");
st.printTree();
