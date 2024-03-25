class SuffixTree {
    constructor(str) {
        this.root = {};
        this.buildSuffixTree(str);
    }

    buildSuffixTree(str) {
        for (let i = 0; i < str.length; i++) {
            this.addSuffix(str.slice(i), i);
        }
    }

    addSuffix(suffix, index) {
        let current = this.root;
        for (let i = 0; i < suffix.length; i++) {
            if (!current[suffix[i]]) {
                current[suffix[i]] = {};
            }
            current = current[suffix[i]];
        }
        current['*'] = index; // Mark end of suffix with *
    }

    search(query) {
        let current = this.root;
        for (let i = 0; i < query.length; i++) {
            if (!current[query[i]]) {
                return null;
            }
            current = current[query[i]];
        }
        return current['*'];
    }
}

// Example usage
const suffixTree = new SuffixTree("banana");
console.log(suffixTree.search("ana")); // Output: 1
console.log(suffixTree.search("ananas")); // Output: null
