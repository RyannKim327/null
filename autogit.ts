class SuffixTreeNode {
  private children: { [key: string]: SuffixTreeNode } = {};
  private suffixLink: SuffixTreeNode | null = null;
  private substring: string = '';

  constructor(private parent: SuffixTreeNode | null, private character: string) {}

  addChild(node: SuffixTreeNode): void {
    this.children[node.character] = node;
  }

  getChild(character: string): SuffixTreeNode | undefined {
    return this.children[character];
  }

  setSuffixLink(node: SuffixTreeNode): void {
    this.suffixLink = node;
  }

  getSuffixLink(): SuffixTreeNode | null {
    return this.suffixLink;
  }

  setSubstring(substring: string): void {
    this.substring = substring;
  }

  getSubstring(): string {
    return this.substring;
  }
}

class SuffixTree {
  private root: SuffixTreeNode;

  constructor(private text: string) {
    this.root = new SuffixTreeNode(null, '');
    this.buildTree();
  }

  private buildTree(): void {
    for (let i = 0; i < this.text.length; i++) {
      this.insertSuffix(this.text.substring(i));
    }
  }

  private insertSuffix(suffix: string): void {
    let currentNode = this.root;
    for (let j = 0; j < suffix.length; j++) {
      const character = suffix[j];
      if (!currentNode.getChild(character)) {
        currentNode.addChild(new SuffixTreeNode(currentNode, character));
      }
      currentNode = currentNode.getChild(character) as SuffixTreeNode;
    }
    currentNode.setSubstring(suffix);
  }

  public search(pattern: string): string[] {
    const result: string[] = [];
    this.searchHelper(this.root, pattern, result);
    return result;
  }

  private searchHelper(node: SuffixTreeNode, pattern: string, result: string[]): void {
    if (node.getSubstring().includes(pattern)) {
      result.push(node.getSubstring());
    }
    for (const child of Object.values(node.children)) {
      this.searchHelper(child, pattern, result);
    }
  }
}

// Example usage:
const text = 'banana';
const suffixTree = new SuffixTree(text);
const result = suffixTree.search('ana');
console.log(result); // Output: ["banana", "anana", "ana"]
