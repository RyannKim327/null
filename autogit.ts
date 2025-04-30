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

    // Insert a word into the Trie
    insert(word: string): void {
        let currentNode = this.root;

        for (const char of word) {
            // If the character is not yet in the current node's children, add it
            if (!currentNode.children.has(char)) {
                currentNode.children.set(char, new TrieNode());
            }
            // Move to the child node
            currentNode = currentNode.children.get(char)!;
        }
        // Mark the end of the word
        currentNode.isEndOfWord = true;
    }

    // Search for a word in the Trie
    search(word: string): boolean {
        const node = this.findNode(word);
        return node !== null && node.isEndOfWord;
    }

    // Check if there is any word in the Trie that starts with the given prefix
    startsWith(prefix: string): boolean {
        return this.findNode(prefix) !== null;
    }

    // Helper function to find a node in the Trie that represents the end of the word
    private findNode(word: string): TrieNode | null {
        let currentNode = this.root;

        for (const char of word) {
            if (!currentNode.children.has(char)) {
                return null; // character not found
            }
            currentNode = currentNode.children.get(char)!;
        }
        return currentNode;
    }
}
const trie = new Trie();
trie.insert("apple");
trie.insert("app");

console.log(trie.search("app")); // true
console.log(trie.search("apple")); // true
console.log(trie.search("apricot")); // false
console.log(trie.startsWith("ap")); // true
console.log(trie.startsWith("apr")); // false
