
const {Composer, Markup} =require('telegraf')
const {bot} =require('../../core/bot')
const axios = require('axios')

const composer= new Composer

composer.help(ctx =>{
    ctx.replyWithHTML(
        `Ishlatish mumkin bo'lgan komandallar ro'yxati: \n`+
        `/start- <code>botni ishga tushirish</code>\n`+
        `/help - <code> shu smsni ko'rsatish</code>\n`+
        `Botdan foydalanish uchun vedio yuklash vedio qo\'llanmalar:\n`,
      Markup.inlineKeyboard([
      Markup.button.callback('Youtube', 'youtub'),
      Markup.button.callback('TikTok', 'tik') ,
      Markup.button.callback('Instagram', 'instagram')
    ])
    .oneTime()
    .resize()
    ).then()
})



composer.action('youtub', async ctx =>{
  let data= await axios.get(`http://localhost:5000/api/vedio/all`).then(res =>{
    return res.data
  })
  ctx.replyWithVideo({ url: `http://localhost:5000${data[0].image}`}).then()
})

composer.action('tik', async ctx =>{
  let data= await axios.get(`http://localhost:5000/api/vedio/all`).then(res =>{
    return res.data
  })
  ctx.replyWithVideo({ url: `http://localhost:5000${data[1].image}`}).then()
})

composer.action('instagram', async ctx =>{
  let data= await axios.get(`http://localhost:5000/api/vedio/all`).then(res =>{
    return res.data
  })
  ctx.replyWithVideo({ url: `http://localhost:5000${data[2].image}`}).then()
})


bot.use(composer.middleware())