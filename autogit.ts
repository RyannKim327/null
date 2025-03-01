class TrieNode {
    children: Map<string, TrieNode>;
    isEndOfWord: boolean;

    constructor() {
        this.children = new Map<string, TrieNode>();
        this.isEndOfWord = false;
    }
}
class Trie {
    private root: TrieNode;

    constructor() {
        this.root = new TrieNode();
    }

    // Inserts a word into the trie
    insert(word: string): void {
        let currentNode = this.root;
        
        for (const char of word) {
            if (!currentNode.children.has(char)) {
                currentNode.children.set(char, new TrieNode());
            }
            currentNode = currentNode.children.get(char)!; // Use non-null assertion since we just checked for existence
        }
        currentNode.isEndOfWord = true;
    }

    // Searches for a word in the trie
    search(word: string): boolean {
        let currentNode = this.root;

        for (const char of word) {
            if (!currentNode.children.has(char)) {
                return false;
            }
            currentNode = currentNode.children.get(char)!;
        }
        return currentNode.isEndOfWord;
    }

    // Checks if there is any word in the trie that starts with the given prefix
    startsWith(prefix: string): boolean {
        let currentNode = this.root;

        for (const char of prefix) {
            if (!currentNode.children.has(char)) {
                return false;
            }
            currentNode = currentNode.children.get(char)!;
        }
        return true;
    }

    // Optionally, you can implement a delete method if needed
    delete(word: string): boolean {
        const deleteHelper = (node: TrieNode, word: string, index: number): boolean => {
            if (index === word.length) {
                if (!node.isEndOfWord) {
                    return false; // Word not found
                }
                node.isEndOfWord = false; // Unmark the end of the word
                return node.children.size === 0; // True if no children, meaning this node can be deleted
            }
            
            const char = word[index];
            const childNode = node.children.get(char);
            if (!childNode) {
                return false; // Word not found
            }
            
            const shouldDeleteCurrentNode = deleteHelper(childNode, word, index + 1);
            if (shouldDeleteCurrentNode) {
                node.children.delete(char);
                return node.children.size === 0 && !node.isEndOfWord;
            }
            return false;
        };

        return deleteHelper(this.root, word, 0);
    }
}
const trie = new Trie();
trie.insert("apple");
trie.insert("app");

console.log(trie.search("apple")); // true
console.log(trie.search("app")); // true
console.log(trie.search("appl")); // false
console.log(trie.startsWith("ap")); // true
console.log(trie.startsWith("applet")); // false

trie.delete("apple");
console.log(trie.search("apple")); // false
console.log(trie.search("app")); // true
