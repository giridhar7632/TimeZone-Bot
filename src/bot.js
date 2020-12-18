require('dotenv').config()

const { Client } = require('discord.js')
const client = new Client()
const prefix="$"
const def="ist"

client.on("ready", () => {
  console.log(`${client.user.tag} has logged in`)
})

client.on("message", (msg) => {
  if(msg.author.bot) return
  if(msg.content.startsWith(prefix)){
    const [cmd, ...args] = msg.content
      .trim()
      .substring(prefix.length)
      .split(/\s+/)
    console.log(cmd, args)

    if(cmd==='kick'){
      
    }
  }
})

client.login(process.env.DISCORD_BOT_TOKEN);