
const {Telegraf} = require('telegraf')
const bot= new Telegraf(process.env.TOKEN_BOT)

bot.launch().then()

module.exports={
    bot
}


