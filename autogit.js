class Node {
    constructor(startIndex, endIndex) {
        this.startIndex = startIndex;
        this.endIndex = endIndex;
        this.children = {};
    }
}
class SuffixTree {
    constructor(str) {
        this.root = new Node(-1, -1); // Root node with start and end indices -1
        this.buildSuffixTree(str);
    }

    buildSuffixTree(str) {
        // Implement the logic to build the suffix tree
    }

    // Implement other methods like search, insert, etc.
}
buildSuffixTree(str) {
    for (let i = 0; i < str.length; i++) {
        this.addSuffix(str.substring(i), i);
    }
}

addSuffix(suffix, index) {
    let currentNode = this.root;
    for (let i = 0; i < suffix.length; i++) {
        let char = suffix[i];
        if (!currentNode.children[char]) {
            currentNode.children[char] = new Node(index + i, Infinity); // Infinity for end index of leaf nodes
        }
        currentNode = currentNode.children[char];
    }
    currentNode.endIndex = index + suffix.length - 1;
}
