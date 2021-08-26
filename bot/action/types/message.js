const {Composer, Markup} = require('telegraf')

const axios = require('axios')

const {bot} =require('../../core/bot')

const composer = new Composer()

composer.on('text', async (ctx) => {
  let habar = ctx.message.text;
  console.log("haaaaaaaaaaaaaaaaba: ", habar)
  // let data= await axios.get(`http://localhost:5000/api/foods/getName/${habar.toLowerCase()}`).then(res =>{
  //   return res.data
  // })
  

  // let result= await axios.get(`http://localhost:5000/api/action/getName/${habar.toLowerCase()}`).then(res =>{
  //   return res.data
  // })

  // ctx.replyWithPhoto({ url: `http://localhost:5000${data?.data[0]?.image}`}).then()
  // ctx.replyWithHTML(`<b>Mahsulot nomi: </b> ${data?.data[0]?.name}\n`+
  // `<b>Ma'lumot: </b>${data?.data[0]?.description}\n`+
  // `<b>Halolmi: </b> ${data?.data[0]?.halolmi}\n`
  // ).then() 

  // ctx.replyWithPhoto({ url: `http://localhost:5000${result?.data[0]?.image}`}).then()
  // ctx.replyWithHTML(`<b>Amal nomi: </b> ${result?.data[0]?.name}\n`+
  // `<b>Ma'lumot: </b>${result?.data[0]?.description}\n`+
  // `<b>Halolmi: </b> ${result?.data[0]?.halolmi}\n`
  // ).then() 


})
 
bot.use(composer.middleware())