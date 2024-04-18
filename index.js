const fs = require("fs")
const { exec } = require("child_process")
const date = require("./date")
const axios = require("axios")
let commits = Math.floor(Math.random() * 200)
commits += 50
let _commitments = 1
console.log(`You send git ${commits} commits`)

let run = async () => {
	const time = date("Asia/Manila")
	const m = `${time.getMonth() + 1}-${time.getDate()}-${time.getFullYear()} ${time.getHours()}:${time.getMinutes()}`
	const mm2 = fs.readFileSync("rants.txt", "utf8").split("\n") 
	const m2 = fs.readFileSync("questions.txt", "utf8").split("\n")
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
	console.log(`----- Git Pull -----`)
	exec("git pull", (e) => {
		if(e) return console.error(e)
		run()
	})
})
