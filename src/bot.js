require('dotenv').config()

const { Client } = require('discord.js')
const client = new Client()
const prefix="$"
const def="ist"

client.on("ready", () => {
  console.log(`${client.user.tag} has logged in`)
})

client.on("message", (message) => {
  if(message.author.bot) return
  if(message.content.startsWith(prefix)){
    const cmd = message.content
      .trim(4)
      .substring(prefix.length)
      .split(/\s+/)
    console.log(cmd)
  }
})

client.login(process.env.DISCORD_BOT_TOKEN);