
const {Composer, Markup} =require('telegraf')
const {bot} =require('../../core/bot')

const composer= new Composer

composer.start( ctx =>{
    ctx.replyWithHTML(
      `Assalomu alaykum.\n`+`Hurmatli <b> ${ctx.from.first_name} </b>, botimizga xush kelibsiz!\n` + 
      `Bu bot orqali Youtebe, TikTok, Instagramdagi vediolarni yuklab olishingiz mumkin. \n`+
      `/help - <code> Batafsil ma'lumot olish uchun bu buyruqdan foydalanishingiz mumkin.</code>`
    ).then()
})




bot.use(composer.middleware())