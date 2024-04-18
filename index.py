import json, os, random, requests, time

def code(q):
    r = requests.get(f"https://hercai.onrender.com/turbo-16k/hercai?question={q}")
    j = json.loads(r.text)
    return j

def main():
    print("----- Fetching -----")
    if os.system("git fetch"):
        print("----- Pulling -----")
        if os.system("git pull"):
            print("This repository is already updated")
    print("Starting the process...")

    num = random.randint(10, 250)
    with open("question.txt", "r") as f:
        file = f.read().splitlines()
    for i in range(num):
        quest = file[random.randint(0, len(file) - 1)]
        quest = quest.replace("__language__", "python")
        c = code(quest)

if __name__ == "__main__":
    main()
