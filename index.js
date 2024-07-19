require('dotenv').config()
const {Bot,GrammyError, HttpError,Keyboard, InlineKeyboard} = require('grammy')


const bot = new Bot(process.env.BOT_API_KEY)









bot.api.setMyCommands(
[
    {command: 'start',description:'Запуск'},
// {command: 'aboutme', description:'про мене'},
] 
)

bot.command(['say_something','hello'], async(ctx)=>{
await ctx.reply('something')
})
bot.command('start',async (ctx)=>{
    await ctx.reply('  Привіт, я Женя Алейник, бізнес консультант з 14 річним досвідом ведення бізнесів. І я рада вітати тебе на своєму курсі «Як запустити успішний бізнес»! ☺️'),
    await ctx.reply(' Цей курс саме для тих, хто хоче знайти свою ідею, протестувати її на життєздатність та отримати перший прибуток. Протягом усього часу, я розповім тобі про:                                                                  1) види ідей,                                                                                                         2) де їх шукати та як протестувати,                                                                 3) де знайти інвестиції,                                                                                  4) розповідаю про плюси та мінуси партнерства,                                                                                  5) формування команди та делегув')


    const moodKeyboard = new Keyboard().text('Про мене').row().text('урок 1').row().text('урок 2').row().text('урок 3').row().text('урок 4').row().text('урок 5').row().text('урок 6').row().text('урок 7').row().text('урок 8').row().text('додатковий матерiал до 5-го уроку').row().text('Співпраця з блогерами').resized()
    await ctx.reply('...',{
        reply_markup: moodKeyboard
    })
})

bot.hears('Про мене', async (ctx) => {
    await ctx.reply('Я Женя Алейник, бізнес консультант з 14 річним досвідом ведення бізнесів. Мої бізнеси були абсолютно в різних нішах: від мувінговоі компаніі “Комфортний Переїзд», де ми займались організацією переїздів офісів та квартир до діджитал маркетингової агенції «Fish Digital», де ми просували бізнеси в онлайні. Від продажу косметики та аксесуарів онлайн (компанія «TrendyCandy) до креативної студії офлайн в Словаччині під назвою «Kolo Space», де ми займались йогою, стретчінгом, танцями, мовними курсами, арт-терапіями і тд.Працювала, також, найманим працівником у мережі магазинів канцтоварів «Офіс Центр», де ми розвивали онлайн напрямок, і у it компанії «Ultra», де ми займались маркетингом софту для кафе, барів, ресторанів.  Я обожнюю підприємців, надихаюсь ними та хочу надихнути молоде покоління на великі справи. ☺️Веду YouTube шоу «Я так відчуваю», де беру інтервʼю у підприємиць, які горять своєю справою.')
})
bot.hears('урок 1', async (ctx) =>{
    await ctx.reply('https://youtu.be/NxP3DOPYR0s')
} )

bot.hears('урок 2', async (ctx) =>{
    await ctx.reply('https://youtu.be/3Ni395zM3sM')
} )

bot.hears('урок 3', async (ctx) =>{
    await ctx.reply('https://youtu.be/HCS08uW43v0')
} )

bot.hears('урок 4', async (ctx) =>{
    await ctx.reply('https://youtu.be/9AUe9Ej9YG4')
} )

bot.hears('урок 5', async (ctx) =>{
    await ctx.reply('')
} )

bot.hears('урок 6', async (ctx) =>{
    await ctx.reply('https://youtu.be/MaQBrKbp1q0')
} )

bot.hears('урок 7', async (ctx) =>{
    await ctx.reply('https://youtu.be/fmlGp6C7RzM')
} )

bot.hears('урок 8', async (ctx) =>{
    await ctx.reply('https://youtu.be/o-J8_lyMwX0')
} )

bot.hears('додатковий матерiал до 5-го уроку', async (ctx) =>{
    await ctx.reply('https://business.diia.gov.ua/idea')
    await ctx.reply('https://inventure.com.ua/uk/analytics/articles/aktualni-biznes-ideyi-ta-biznes-proekti-dlya-vidkrittya-biznesu-v-ukrayini-u-2022-roci')
    await ctx.reply('https://www.shopify.com/blog/low-investment-business-ideas?term=&adid=649248676787&campaignid=19724533104&utm_medium=cpc&utm_source=google&gad_source=1&gbraid=0AAAAAC3Mv89QUHDekZTvL9okMlpsreagj&gclid=Cj0KCQjw6PGxBhCVARIsAIumnWaWJO3SH2gnVnNI3khbz_enW372EzS3FyUnVcRZRjhI5g8n-muViogaAmRaEALw_wcB&cmadid=516586848;cmadvertiserid=10730501;cmcampaignid=26990768;cmplacementid=324286430;cmcreativeid=163722649;cmsiteid=5500011')
} )

bot.hears('Співпраця з блогерами', async (ctx) =>{
    await ctx.reply('https://docs.google.com/spreadsheets/d/12ab5obr3wWr16Wnszsfbzve0wBqGpGl2ze8VkX1Z2HU/edit')
} )
















bot.catch((err)=>{
  const ctx = err.ctx;
  console.error(`Error while handling update ${ctx.update.update_id}:`); 
   const e = err.error;
   if (e instanceof GrammyError){
    console.error("Error in request:",e.description);
}else if (e instanceof HttpError){
    console.error ("Could not contact with Telegram")
}else {
    console.error("unknow errer",e);
}
});


bot.start();