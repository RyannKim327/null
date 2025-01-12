#include <stdio.h>
#include <stdlib.h>
#include <string.h>

#define HASH_TABLE_SIZE 128

typedef struct HashTable {
    int size;
    int *keys;
    int *values;
} HashTable;

HashTable *createHashTable() {
    HashTable *table = malloc(sizeof(HashTable));
    table->size = HASH_TABLE_SIZE;
    table->keys = malloc(table->size * sizeof(int));
    table->values = malloc(table->size * sizeof(int));
    return table;
}

int hashFunction(int key) {
    return key % HASH_TABLE_SIZE;
}

void insert(HashTable *table, int key, int value) {
    int index = hashFunction(key);
    while (table->keys[index] != 0) {
        index = (index + 1) % table->size;
    }
    table->keys[index] = key;
    table->values[index] = value;
}

int get(HashTable *table, int key) {
    int index = hashFunction(key);
    while (table->keys[index] != key) {
        index = (index + 1) % table->size;
        if (table->keys[index] == 0) {
            return -1; // key not found
        }
    }
    return table->values[index];
}

void freeHashTable(HashTable *table) {
    free(table->keys);
    free(table->values);
    free(table);
}

int main() {
    HashTable *table = createHashTable();
    insert(table, 1, 10);
    insert(table, 2, 20);
    insert(table, 3, 30);
    printf("%d\n", get(table, 1)); // 10
    printf("%d\n", get(table, 2)); // 20
    printf("%d\n", get(table, 3)); // 30
    freeHashTable(table);
    return 0;
}
public class HashTable {
    private int size;
    private int[] keys;
    private int[] values;

    public HashTable(int size) {
        this.size = size;
        keys = new int[size];
        values = new int[size];
    }

    private int hashFunction(int key) {
        return key % size;
    }

    public void insert(int key, int value) {
        int index = hashFunction(key);
        while (keys[index] != 0) {
            index = (index + 1) % size;
        }
        keys[index] = key;
        values[index] = value;
    }

    public int get(int key) {
        int index = hashFunction(key);
        while (keys[index] != key) {
            index = (index + 1) % size;
            if (keys[index] == 0) {
                return -1; // key not found
            }
        }
        return values[index];
    }

    public static void main(String[] args) {
        HashTable table = new HashTable(128);
        table.insert(1, 10);
        table.insert(2, 20);
        table.insert(3, 30);
        System.out.println(table.get(1)); // 10
        System.out.println(table.get(2)); // 20
        System.out.println(table.get(3)); // 30
    }
}
class HashTable:
    def __init__(self, size):
        self.size = size
        self.keys = [None] * size
        self.values = [None] * size

    def hash_function(self, key):
        return key % self.size

    def insert(self, key, value):
        index = self.hash_function(key)
        while self.keys[index] is not None:
            index = (index + 1) % self.size
        self.keys[index] = key
        self.values[index] = value

    def get(self, key):
        index = self.hash_function(key)
        while self.keys[index] != key:
            index = (index + 1) % self.size
            if self.keys[index] is None:
                return -1  # key not found
        return self.values[index]

table = HashTable(128)
table.insert(1, 10)
table.insert(2, 20)
table.insert(3, 30)
print(table.get(1))  # 10
print(table.get(2))  # 20
print(table.get(3))  # 30
#include <iostream>
#include <vector>

class HashTable {
public:
    HashTable(int size) : size(size), keys(size), values(size) {}

    int hashFunction(int key) {
        return key % size;
    }

    void insert(int key, int value)
