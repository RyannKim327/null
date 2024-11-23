from suffix_tree import Tree

# Create an instance of the Suffix Tree
tree = Tree("banana")

# Search for a substring in the Suffix Tree
indexes = tree.search('na')
print("Substring 'na' found at indexes:", indexes)
