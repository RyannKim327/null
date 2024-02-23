// Suffix Tree Node
class Node {
    constructor() {
        this.children = {};
    }
}

// Suffix Tree
class SuffixTree {
    constructor(inputString) {
        this.root = new Node();
        this.END_CHAR = '$';

        for (let i = 0; i < inputString.length; i++) {
            this.addSuffix(inputString.substring(i) + this.END_CHAR);
        }
    }

    addSuffix(suffix) {
        let currentNode = this.root;

        for (let i = 0; i < suffix.length; i++) {
            let currentChar = suffix[i];

            if (!currentNode.children[currentChar]) {
                currentNode.children[currentChar] = new Node();
            }

            currentNode = currentNode.children[currentChar];
        }
    }

    searchPattern(pattern) {
        let currentNode = this.root;

        for (let i = 0; i < pattern.length; i++) {
            let currentChar = pattern[i];

            if (!currentNode.children[currentChar]) {
                return false;
            }

            currentNode = currentNode.children[currentChar];
        }

        return true;
    }
}

// Example Usage
const suffixTree = new SuffixTree("banana");
console.log(suffixTree.searchPattern("ana")); // Output: true
console.log(suffixTree.searchPattern("abc")); // Output: false
