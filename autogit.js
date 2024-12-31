class SkipNode {
    int value;
    SkipNode[] next;

    public SkipNode(int value, int levels) {
        this.value = value;
        this.next = new SkipNode[levels];
    }
}
class SkipList {
    SkipNode head;
    int maxLevels;
    int size;

    public SkipList(int maxLevels) {
        this.head = new SkipNode(Integer.MIN_VALUE, maxLevels);
        this.maxLevels = maxLevels;
        this.size = 0;
    }

    // Implement insertion, deletion, and search methods here
}
