class SuffixTree {
    constructor(str) {
        this.root = {};
        for (let i = 0; i < str.length; i++) {
            this.addSuffix(str.substring(i), i);
        }
    }

    addSuffix(suffix, index) {
        let currentNode = this.root;
        for (let i = 0; i < suffix.length; i++) {
            let char = suffix[i];
            if (!currentNode[char]) {
                currentNode[char] = {};
            }
            currentNode = currentNode[char];
        }
        currentNode['$'] = index;
    }

    search(pattern) {
        let currentNode = this.root;
        for (let i = 0; i < pattern.length; i++) {
            let char = pattern[i];
            if (!currentNode[char]) {
                return null;
            }
            currentNode = currentNode[char];
        }
        return currentNode['$'];
    }
}

// Example usage
let text = 'banana';
let suffixTree = new SuffixTree(text);
console.log(suffixTree.search('na')); // Outputs 4
