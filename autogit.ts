class TrieNode {
    children: Map<string, TrieNode>;
    isEndOfWord: boolean;

    constructor() {
        this.children = new Map();
        this.isEndOfWord = false;
    }
}
class Trie {
    private root: TrieNode;

    constructor() {
        this.root = new TrieNode();
    }

    // Insert a word into the trie
    insert(word: string): void {
        let currentNode = this.root;
        for (const char of word) {
            if (!currentNode.children.has(char)) {
                currentNode.children.set(char, new TrieNode());
            }
            currentNode = currentNode.children.get(char)!;
        }
        currentNode.isEndOfWord = true;
    }

    // Search for a word in the trie
    search(word: string): boolean {
        const node = this.searchNode(word);
        return node !== null && node.isEndOfWord;
    }

    // Check if any word in the trie starts with the given prefix
    startsWith(prefix: string): boolean {
        return this.searchNode(prefix) !== null;
    }

    // Helper function to find the node corresponding to a given word or prefix
    private searchNode(word: string): TrieNode | null {
        let currentNode = this.root;
        for (const char of word) {
            if (!currentNode.children.has(char)) {
                return null;
            }
            currentNode = currentNode.children.get(char)!;
        }
        return currentNode;
    }
}
const trie = new Trie();
trie.insert("apple");
trie.insert("app");

console.log(trie.search("apple")); // true
console.log(trie.search("app"));   // true
console.log(trie.search("ap"));    // false
console.log(trie.startsWith("ap")); // true
console.log(trie.startsWith("appl")); // true
console.log(trie.startsWith("b")); // false
