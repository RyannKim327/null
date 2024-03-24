// Suffix tree node
class Node {
    constructor() {
        this.children = {};
    }
}

// Suffix tree
class SuffixTree {
    constructor() {
        this.root = new Node();
    }

    // Function to insert a suffix into the tree
    insertSuffix(suffix) {
        let node = this.root;
        for (let i = 0; i < suffix.length; i++) {
            const char = suffix[i];
            if (!node.children[char]) {
                node.children[char] = new Node();
            }
            node = node.children[char];
        }
    }

    // Function to build the suffix tree from a given string
    buildSuffixTree(inputString) {
        for (let i = 0; i < inputString.length; i++) {
            this.insertSuffix(inputString.substring(i));
        }
    }

    // Function to search for a suffix in the tree
    search(suffix) {
        let node = this.root;
        for (let i = 0; i < suffix.length; i++) {
            const char = suffix[i];
            if (!node.children[char]) {
                return false;
            }
            node = node.children[char];
        }
        return true;
    }
}

// Example usage
const suffixTree = new SuffixTree();
const inputString = "banana";
suffixTree.buildSuffixTree(inputString);

console.log(suffixTree.search("ana")); // Output: true
console.log(suffixTree.search("nan")); // Output: false
console.log(suffixTree.search("xyz")); // Output: false
