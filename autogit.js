class Node {
    constructor() {
        this.children = {};  // Map of child nodes
        this.isEndOfWord = false;  // Mark if the current node represents the end of a word
    }
}
class Trie {
    constructor() {
        this.root = new Node();  // Create the root node of the Trie
    }

    // Function to insert a word into the Trie
    insert(word) {
        let current = this.root;

        // Iterate through each character of the word
        for (let i = 0; i < word.length; i++) {
            const ch = word[i];

            // If the current character doesn't exist in the Trie, create a new node
            if (!current.children[ch]) {
                current.children[ch] = new Node();
            }

            current = current.children[ch];  // Move to the next node
        }

        current.isEndOfWord = true;  // Mark the end of the word
    }

    // Function to search for a word in the Trie
    search(word) {
        let current = this.root;

        // Iterate through each character of the word
        for (let i = 0; i < word.length; i++) {
            const ch = word[i];

            // Move to the next node if the character exists in the Trie
            if (current.children[ch]) {
                current = current.children[ch];
            } else {
                return false;  // Return false if the character is not found
            }
        }

        // Return true if the end of the word is reached and it's marked as the end of a valid word
        return current.isEndOfWord;
    }

    // Function to delete a word from the Trie
    delete(word) {
        this._delete(this.root, word, 0);
    }

    _delete(node, word, index) {
        if (index === word.length) {
            if (!node.isEndOfWord) {
                // Word doesn't exist in the Trie
                return false;
            }

            node.isEndOfWord = false;  // Mark the end of the word as false
            return Object.keys(node.children).length === 0;  // Return true if no children are left
        }

        const ch = word[index];
        if (!node.children[ch]) {
            // Word prefix doesn't exist in the Trie
            return false;
        }

        const shouldRemoveNode = this._delete(node.children[ch], word, index + 1);
        if (shouldRemoveNode) {
            delete node.children[ch];
            return Object.keys(node.children).length === 0;
        }

        return false;
    }
}
const trie = new Trie();

// Insert words into the Trie
trie.insert('apple');
trie.insert('banana');
trie.insert('app');
trie.insert('apricot');

// Search for words in the Trie
console.log(trie.search('banana'));  // true
console.log(trie.search('apples'));  // false

// Delete a word from the Trie
console.log(trie.delete('apple'));  // true
console.log(trie.search('apple'));  // false
