import requests

url = "https://jsonplaceholder.typicode.com/posts"
response = requests.get(url)

if response.status_code == 200:
    data = response.json()
    for post in data:
        print(post['title'])
else:
    print("Failed to fetch data from API")

