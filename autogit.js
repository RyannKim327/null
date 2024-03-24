class Node {
    constructor() {
        this.children = {};
    }
}

class SuffixTree {
    constructor(str) {
        this.root = new Node();
        this.buildSuffixTree(str);
    }

    buildSuffixTree(str) {
        for (let i = 0; i < str.length; i++) {
            this.addSuffix(str.substring(i));
        }
    }

    addSuffix(suffix) {
        let node = this.root;
        for (let i = 0; i < suffix.length; i++) {
            let char = suffix[i];
            if (!node.children[char]) {
                node.children[char] = new Node();
            }
            node = node.children[char];
        }
    }

    search(pattern) {
        let node = this.root;
        let i = 0;

        while (i < pattern.length) {
            let char = pattern[i];
            if (node.children[char]) {
                node = node.children[char];
                i++;
            } else {
                return false;
            }
        }

        return true;
    }
}

// Example usage
const suffixTree = new SuffixTree("banana");
console.log(suffixTree.search("ana")); // Output: true
console.log(suffixTree.search("xyz")); // Output: false
