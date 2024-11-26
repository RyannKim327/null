text = "hello world hello"
word = "hello"
count = text.count(word)
print(count)
text = "hello world hello"
word = "hello"
count = 0
for w in text.split():
    if w == word:
        count += 1
print(count)
