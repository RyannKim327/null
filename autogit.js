class HashTable:
    def __init__(self, size):
        self.table = [[] for _ in range(size)]
        self.size = size
    
    def hash(self, key):
        return key % self.size

    def insert(self, key, value):
        hash_key = self.hash(key)
        self.table[hash_key].append((key, value))
    
    def search(self, key):
        hash_key = self.hash(key)
        for k, v in self.table[hash_key]:
            if k == key:
                return v
        return None
import java.util.HashMap;

public class HashTable {
    private HashMap<Integer, Integer> table;
    private int size;

    public HashTable(int size) {
        this.table = new HashMap<>(size);
        this.size = size;
    }
    
    private int hash(int key) {
        return key % size;
    }

    public void insert(int key, int value) {
        int hash_key = hash(key);
        table.put(hash_key, value);
    }
    
    public int search(int key) {
        int hash_key = hash(key);
        return table.getOrDefault(hash_key, -1);
    }
}
#include <unordered_map>

class HashTable {
    private:
        std::unordered_map<int, int> table;
        int size;
    public:
        HashTable(int size) : size(size) {}

        int hash(int key) {
            return key % size;
        }

        void insert(int key, int value) {
            int hash_key = hash(key);
            table[hash_key] = value;
        }
    
        int search(int key) {
            int hash_key = hash(key);
            return table[hash_key];
        }
};
#include <stdlib.h>

typedef struct node {
    int key;
    int value;
    struct node *next;
} Node;

typedef struct hashtable {
    int size;
    Node **table;
} HashTable;

HashTable *create_hashtable(int size) {
    HashTable *hashtable = (HashTable *) malloc(sizeof(HashTable));
    hashtable->size = size;
    hashtable->table = (Node **) malloc(size * sizeof(Node *));
    for (int i = 0; i < size; i++) {
        hashtable->table[i] = NULL;
    }

    return hashtable;
}

void insert_hashtable(HashTable *hashtable, int key, int value) {
    int hash_key = key % hashtable->size;
    Node *new_node = (Node *) malloc(sizeof(Node));
    new_node->key = key;
    new_node->value = value;
    new_node->next = hashtable->table[hash_key];
    hashtable->table[hash_key] = new_node;
}

int search_hashtable(HashTable *hashtable, int key) {
    int hash_key = key % hashtable->size;
    Node *node = hashtable->table[hash_key];
    while (node) {
        if (node->key == key) {
            return node->value;
        }
        node = node->next;
    }

    return -1;
}
class HashTable {
    constructor(size) {
        this.table = new Array(size);
        this.size = size;
    }
    
    hash(key) {
        return key % this.size;
    }

    insert(key, value) {
        const hash_key = this.hash(key);
        if (!this.table[hash_key]) {
            this.table[hash_key] = [];
        }
        this.table[hash_key].push([key, value]);
    }
    
    search(key) {
        const hash_key = this.hash(key);
        const bucket = this.table[hash_key];
        if (!bucket) {
            return null;
        }

        for (let i = 0; i < bucket.length; i++) {
            const [k, v] = bucket[i];
            if (k === key) {
                return v;
            }
        }

        return null;
    }
}
