require('dotenv').config()

import { Client, Message } from 'discord.js'
import { converter } from './converter'
const client = new Client()
const prefix: string="$"

client.on("ready", () => {
  console.log(`${client.user?.username} has logged in`)
})

client.on("message", (msg: Message) => {
  if(msg.author.bot) return
  if(msg.content?.startsWith(prefix)){
    const cmd = msg.content
      .trim()
      .substring(prefix.length)
    console.log(cmd)
    let result = converter(cmd)
    msg.channel.send(`@${msg.author.username} ${result}`)
      .then(message => console.log(`Sent message: ${message.content}`))
      .catch(console.error)
    console.log(result)
  }
})

client.login(process.env.DISCORD_BOT_TOKEN);