const fs = require("fs")
const { exec } = require("child_process")
const date = require("./date")
const axios = require("axios")
let commits = Math.floor(Math.random() * 500)
commits += 100
let _commitments = 1
console.log(`You send git ${commits} commits`)
let run = async () => {
	const time = date("Asia/Manila")
	const m = `${time.getMonth() + 1}-${time.getDate()}-${time.getFullYear()} ${time.getHours()}:${time.getMinutes()}`
	const mm2 = [
		"Sana ako pa rin",
		"Bakit na mimiss ko pa rin sya",
		"Ano kaya ang susunod na ilalagay ko dito",
		"From valentines, hanggang pasko, na sana pati bagong taon",
		"Ang cute nya, lalo na pag inis sya saken",
		"Wala, talaga lang attractive sya saken",
		"Nugagawen kapag miss ko na sya?",
		"Parang malabo na pala, di na ko aasa",
		"Mahirap lang isipin, pero tanggap ko.",
		"Kahit anong gawin prii, sya pa rin."
	]
	const m2 = [
		"a random javascript code that has input",
		"a random javascript code that uses fetch",
		"a random javascript code that uses axios",
		"a random javascript code that uses cron",
		"a random javascript code of a random sort algorithm",
		"a random javascript code that uses api",
		"a random javascript code that connects thru async task in android",
		"How do you calculate the factorial of a number using javascript?",
		"How can I sort an array of integers using javascript?",
		"How do I generate a random number in a given range using javascript?",
		"How can I reverse a string in javascript?",
		"How do I concatenate two strings in javascript?",
		"How can I find the maximum value in an array using javascript?",
		"How do I remove duplicate elements from an array in javascript?",
		"How can I check if a number is a prime number in javascript?",
		"How do I implement a stack using an array in javascript?",
		"How can I convert a string to lowercase in javascript?",
		"How do I implement a binary search algorithm in javascript?",
		"How can I check if a string is a palindrome in javascript?",
		"How do I implement a linked list in javascript?",
		"How can I calculate the area of a triangle in javascript?",
		"How do I implement a breadth-first search algorithm in javascript?",
		"How can I convert a decimal number to binary in javascript?",
		"How do I implement a queue using a linked list in javascript?",
		"How can I remove whitespace from a string in JavaScript?",
		"How do I convert a string to an integer in javascript?",
		"How can I calculate the mean of a list of numbers in javascript?",
		"How do I implement a merge sort algorithm in javascript?",
		"How can I check if a string contains a specific substring in javascript?",
		"How do I implement a depth-first search algorithm, javascript?",
		"How can I find the length of a linked list in javascript?",
		"How do I implement a binary tree in javascript?",
		"How can I validate an email address using regular expressions in JavaScript?",
		"How do I implement a selection sort algorithm in javascript?",
		"How can I check if a string is a valid palindrome in javascript?",
		"How do I implement a hash table in javascript?",
		"How can I calculate the factorial of a number recursively in javascript?",
		"How do I implement a quicksort algorithm in javascript?",
		"How can I reverse a linked list in javascript?",
		"How do I implement a binary search tree in javascript?",
		"How can I find the middle element of a linked list in javascript?",
		"How do I implement a bubble sort algorithm in javascript?",
		"How can I count the occurrence of a character in a string in javascript?",
		"How do I implement a depth-limited search algorithm in javascript?",
		"How can I find the sum of all nodes in a binary tree in javascript?",
		"How do I implement a priority queue using a binary heap in javascript?",
		"How can I find the length of a string without using the built-in function in javascript?",
		"How do I implement a Dijkstra's algorithm for finding shortest paths in javascript?",
		"How can I check if a linked list contains a cycle in javascript?",
		"How do I implement an insertion sort algorithm in javascript?",
		"How can I remove a specific element from an array in JavaScript?",
		"How do I implement a breadth-limited search algorithm in javascript?",
		"How can I find the maximum depth of a binary tree in javascript?",
		"How do I implement a binary search algorithm recursively in javascript?",
		"How can I reverse the order of words in a string in javascript?",
		"How do I implement a depth-limited search algorithm iteratively in javascript?",
		"How can I find the nth node from the end of a linked list in javascript?",
		"How do I implement a heap sort algorithm in javascript?",
		"How can I remove all vowels from a string in javascript?",
		"How do I implement a beam search algorithm in javascript?",
		"How can I check if an array is sorted in ascending order in javascript?",
		"How do I implement an AVL tree in javascript?",
		"How can I find the longest common prefix of a set of strings in javascript?",
		"How do I implement a merge sort algorithm iteratively in javascript?",
		"How can I check if a string is an anagram in JavaScript?",
		"How do I implement a red-black tree in javascript?",
		"How can I find the number of leaf nodes in a binary tree in javascript?",
		"How do I implement a shell sort algorithm in javascript?",
		"How can I remove all spaces from a string in javascript?",
		"How do I implement a bi-directional search algorithm in javascript?",
		"How can I check if a string is a valid palindrome without using extra space in javascript?",
		"How do I implement a radix sort algorithm in javascript?",
		"How can I find the second largest element in an array in javascript?",
		"How do I implement a topological sort algorithm? in javascript",
		"How can I count the number of occurrences of a word in a string in JavaScript?",
		"How do I implement a trie data structure in javascript?",
		"How can I find the longest increasing subsequence in an array in javascript?",
		"How do I implement an interpolation search algorithm in javascript?",
		"How can I reverse the order of elements in an array in javascript?",
		"How do I implement an A* search algorithm in javascript?",
		"How can I check if a linked list is a palindrome in javascript?",
		"How do I implement a counting sort algorithm in javascript?",
		"How can I find the largest prime factor of a number in javascript?",
		"How do I implement a skip list data structure in javascript?",
		"How can I check if two strings are anagrams in javascript?",
		"How do I implement a Boyer-Moore algorithm for string searching in javascript?",
		"How can I find the maximum sum subarray in an array in javascript?",
		"How do I implement an efficient algorithm for string matching in javascript?",
		"How can I find the common elements in two arrays in JavaScript?",
		"How do I implement a Fibonacci search algorithm in javascript?",
		"How can I find the intersection of two linked lists in javascript?",
		"How do I implement a B-tree data structure in javascript?",
		"How can I find the first non-repeating character in a string in javascript?",
		"How do I implement a KMP algorithm for string searching in javascript?",
		"How can I find the kth smallest element in an array in javascript?",
		"How do I implement a suffix tree data structure in javascript?",
		"How can I find the median of two sorted arrays in javascript?",
		"How do I implement a Boyer-Moore-Horspool algorithm for string searching in javascript?",
		"How can I find the first repeated character in a string in javascript?",
		"How do I implement a Burrows-Wheeler Transform algorithm in javascript?",
		"How can I find the longest common subsequence of two strings in JavaScript?",
		"How do I implement a Tarjan's algorithm for strongly connected components in javascript?",
		"How can I find the diameter of a binary tree in javascript?",
		"How do I implement a Rabin-Karp algorithm for string searching in javascript?",
		"How can I find the majority element in an array in javascript?",
		"How do I implement a Bellman-Ford algorithm for finding shortest paths in javascript?",
		"How can I find the longest common substring of two strings in javascript?"
	]	
	const m3 = m2[Math.floor(Math.random() * m2.length)]
	
	
	try{
		let { data } = await axios.get(`https://hercai.onrender.com/turbo-16k/hercai?question=${m3}`)
		let datas = data.reply.split("\n")
		let result = ""
		let active = false
		
		for(let i = 0; i < datas.length; i++){
			if(datas[i].toLowerCase().startsWith("``` javascript")){
				active = !active
			}else if(datas[i].startsWith("```")){
				active = !active
			}
			if(active && !datas[i].startsWith("```")){
				result += datas[i] + "\n"
			}
		}
		
		
		fs.writeFileSync("Auto git.txt", mm2[Math.floor(Math.random() * mm2.length)], "utf-8")
		fs.writeFileSync("autogit.js", result, "utf-8")
		setTimeout(() => {
			console.log(`-----${_commitments}-----`)
			console.log("Git add")
			exec("git add .", (e) => {
				if(e) console.error(e)
				setTimeout(() => {
					console.log("Git Commit")
					exec(`git commit -m "${m} [User mode]"`, (e) => {
						if(e) console.error(e)
						console.log("Close")
						setTimeout(() => {
							_commitments++
							commits--
							if(commits > 0 ){
								run()
							}else{
								console.log("Thank you for spamming hahaha")
								process.exit(0)
							}
						}, 50)
					})
				}, 50)
			})
		})
	}catch(e){
		setTimeout(() => {
			run()
		}, 5000)
	}
}

console.log(`----- Git Fetch -----`)
exec("git fetch", (e) => {
	if(e) return console.error(e)
	console.log(`------ Git Pull ------`)
	exec("git pull", (e) => {
		if(e) return console.error(e)
		run()
	})
})
