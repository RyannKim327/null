class SuffixTreeNode {
    children: Map<string, SuffixTreeNode>;
    isEndOfWord: boolean;

    constructor() {
        this.children = new Map();
        this.isEndOfWord = false;
    }
}
class SuffixTree {
    private root: SuffixTreeNode;

    constructor() {
        this.root = new SuffixTreeNode();
    }

    public insertSuffix(suffix: string): void {
        let currentNode = this.root;
        
        for (let char of suffix) {
            if (!currentNode.children.has(char)) {
                currentNode.children.set(char, new SuffixTreeNode());
            }
            currentNode = currentNode.children.get(char)!;
        }
        
        currentNode.isEndOfWord = true;
    }

    public buildTree(text: string): void {
        for (let i = 0; i < text.length; i++) {
            this.insertSuffix(text.substring(i));
        }
    }

    public containSuffix(suffix: string): boolean {
        let currentNode = this.root;

        for (let char of suffix) {
            if (!currentNode.children.has(char)) {
                return false;
            }
            currentNode = currentNode.children.get(char)!;
        }

        return true; // Suffix exists in the tree
    }
}
const tree = new SuffixTree();
const text = "banana";
tree.buildTree(text);

console.log(tree.containSuffix("ana")); // true
console.log(tree.containSuffix("nana")); // true
console.log(tree.containSuffix("band")); // false
