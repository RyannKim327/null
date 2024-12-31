import java.util.LinkedList;

public class HashTable {
    private static final int SIZE = 10;
    private LinkedList<Integer>[] table;

    public HashTable() {
        table = new LinkedList[SIZE];
        for (int i = 0; i < SIZE; i++) {
            table[i] = new LinkedList<>();
        }
    }

    private int hashFunction(int key) {
        return key % SIZE;
    }

    public void put(int key, int value) {
        int index = hashFunction(key);
        table[index].add(value);
    }

    public int get(int key) {
        int index = hashFunction(key);
        LinkedList<Integer> values = table[index];
        for (Integer value : values) {
            if (value == key) {
                return value;
            }
        }
        return -1;
    }

    public static void main(String[] args) {
        HashTable ht = new HashTable();
        ht.put(1, 10);
        ht.put(2, 20);
        ht.put(11, 110);
        
        System.out.println(ht.get(1)); // Output: 10
        System.out.println(ht.get(2)); // Output: 20
        System.out.println(ht.get(11)); // Output: 110
        System.out.println(ht.get(3)); // Output: -1
    }
}
