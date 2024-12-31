struct Node {
    int data;
    Node** forward; // Pointers to the next nodes at different levels
};
class SkipList {
private:
    int maxLevels; // Maximum number of levels in the skip list
    int level;
    Node* header; // Header node of the skip list

public:
    SkipList(int maxLevels);
    Node* createNode(int data, int level);
    int randomLevel();
    void insertElement(int data);
    void deleteElement(int data);
    void searchElement(int data);
};
SkipList::SkipList(int maxLevels) {
    this->maxLevels = maxLevels;
    this->level = 0;
    
    // Create the header node
    header = createNode(-1, maxLevels);
    
    // Initialize the forward pointers of the header node to NULL
    for (int i = 0; i < maxLevels; i++) {
        header->forward[i] = NULL;
    }
}
