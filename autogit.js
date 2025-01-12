class TrieNode {
public:
    char c;
    bool is_end_of_word;
    unordered_map<char, TrieNode*> children;

    TrieNode(char c) : c(c), is_end_of_word(false) {}
};

class Trie {
private:
    TrieNode* root;

public:
    Trie() : root(new TrieNode('\0')) {}

    void insert(const string& word) {
        TrieNode* current = root;
        for (char c : word) {
            if (current->children.find(c) == current->children.end()) {
                current->children[c] = new TrieNode(c);
            }
            current = current->children[c];
        }
        current->is_end_of_word = true;
    }

    bool search(const string& word) {
        TrieNode* current = root;
        for (char c : word) {
            if (current->children.find(c) == current->children.end()) {
                return false;
            }
            current = current->children[c];
        }
        return current->is_end_of_word;
    }
};
class TrieNode {
    char c;
    boolean isEndOfWord;
    Map<Character, TrieNode> children;

    TrieNode(char c) {
        this.c = c;
        isEndOfWord = false;
        children = new HashMap<>();
    }
}

public class Trie {
    private TrieNode root;

    public Trie() {
        root = new TrieNode('\0');
    }

    public void insert(String word) {
        TrieNode current = root;
        for (char c : word.toCharArray()) {
            if (!current.children.containsKey(c)) {
                current.children.put(c, new TrieNode(c));
            }
            current = current.children.get(c);
        }
        current.isEndOfWord = true;
    }

    public boolean search(String word) {
        TrieNode current = root;
        for (char c : word.toCharArray()) {
            if (!current.children.containsKey(c)) {
                return false;
            }
            current = current.children.get(c);
        }
        return current.isEndOfWord;
    }
}
class TrieNode:
    def __init__(self, c):
        self.c = c
        self.is_end_of_word = False
        self.children = {}

class Trie:
    def __init__(self):
        self.root = TrieNode('\0')

    def insert(self, word):
        current = self.root
        for c in word:
            if c not in current.children:
                current.children[c] = TrieNode(c)
            current = current.children[c]
        current.is_end_of_word = True

    def search(self, word):
        current = self.root
        for c in word:
            if c not in current.children:
                return False
            current = current.children[c]
        return current.is_end_of_word
class TrieNode {
    constructor(c) {
        this.c = c;
        this.isEndOfWord = false;
        this.children = {};
    }
}

class Trie {
    constructor() {
        this.root = new TrieNode('\0');
    }

    insert(word) {
        let current = this.root;
        for (let c of word) {
            if (!current.children[c]) {
                current.children[c] = new TrieNode(c);
            }
            current = current.children[c];
        }
        current.isEndOfWord = true;
    }

    search(word) {
        let current = this.root;
        for (let c of word) {
            if (!current.children[c]) {
                return false;
            }
            current = current.children[c];
        }
        return current.isEndOfWord;
    }
}
type TrieNode struct {
    c           byte
    isEndOfWord bool
    children    map[byte]*TrieNode
}

type Trie struct {
    root *TrieNode
}

func NewTrie() *Trie {
    return &Trie{root: &TrieNode{c: '\0', children: make(map[byte]*TrieNode)}}
}

func (t *Trie) Insert(word string) {
    current := t.root
    for _, c := range word {
        if _, ok := current.children[byte(c)]; !ok {
            current.children[byte(c)] = &TrieNode{c: byte(c)}
        }
        current = current.children[byte(c)]
    }
    current.isEndOfWord = true
}

func (t *Trie) Search(word string) bool {
    current := t.root
    for _, c := range word {
        if _, ok := current.children[byte(c)]; !ok {
            return false
        }
        current = current.children[byte(c)]
    }
    return
