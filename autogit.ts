class SuffixTreeNode {
  character: string;
  children: { [key: string]: SuffixTreeNode };
  suffixLinks: SuffixTreeNode[];
  isLeaf: boolean;

  constructor(character: string) {
    this.character = character;
    this.children = {};
    this.suffixLinks = [];
    this.isLeaf = false;
  }
}

class SuffixTree {
  private root: SuffixTreeNode;
  private text: string;

  constructor(text: string) {
    this.root = new SuffixTreeNode('');
    this.text = text;
    this.buildTree();
  }

  private buildTree() {
    for (let i = 0; i < this.text.length; i++) {
      let currentNode = this.root;
      let suffix = this.text.substring(i);
      for (let j = 0; j < suffix.length; j++) {
        let char = suffix[j];
        if (!currentNode.children[char]) {
          currentNode.children[char] = new SuffixTreeNode(char);
        }
        currentNode = currentNode.children[char];
      }
      currentNode.isLeaf = true;
    }
  }

  public search(pattern: string): boolean {
    let currentNode = this.root;
    for (let i = 0; i < pattern.length; i++) {
      let char = pattern[i];
      if (!currentNode.children[char]) {
        return false;
      }
      currentNode = currentNode.children[char];
    }
    return true;
  }

  public getSuffixes(): string[] {
    const suffixes: string[] = [];
    this.traverse(this.root, '');
    return suffixes;

    function traverse(node: SuffixTreeNode, suffix: string) {
      if (node.isLeaf) {
        suffixes.push(suffix);
      }
      for (const child in node.children) {
        traverse(node.children[child], suffix + child);
      }
    }
  }
}

// Example usage
const suffixTree = new SuffixTree('banana');
console.log(suffixTree.search('ana')); // true
console.log(suffixTree.search(' Hello')); // false
console.log(suffixTree.getSuffixes()); // ['a', 'ana', 'anana', 'banana', 'na', 'nana']
