require('dotenv').config()

const { Client } = require('discord.js')
const client = new Client()
const prefix="$"

client.on("ready", () => {
  console.log(`${client.user.tag} has logged in`)
})

function changeTimezone(hr, min) {
  let date = new Date()
  date.setHours(hr)
  date.setMinutes(min)
  console.log('Given IST datetime: ' + date);

  let usaTime = date.toLocaleString("en-US", {
    timeZone: "America/New_York"
  })  

  console.log('USA datetime: ' + usaTime)
}


client.on("message", (msg) => {
  if(msg.author.bot) return
  if(msg.content.startsWith(prefix)){
    changeTimezone(4, 30)
    console.log("hello world!")
    const [cmd, ...args] = msg.content
      .trim()
      .substring(prefix.length)
      .split(/\s+/)
    console.log(cmd, args)
    if(cmd==='est'){
      changeTimezone(4, 30)
      console.log("hello world!")
    }
  }
})

client.login(process.env.DISCORD_BOT_TOKEN);