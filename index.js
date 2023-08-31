const TelegramApi = require('node-telegram-bot-api')
const token = '6649449024:AAGsdtCd2vP7bjjeG9Dxi0Hr2ZLtkgyo5fk'
const bot = new TelegramApi(token, {polling: true})

const projectsTypeOption = {
    reply_markup: JSON.stringify({
        inline_keyboard: [
            [
                {text: 'Links to DEMO', callback_data: 'DEMO'},
                {text: 'Links to GitHub', callback_data: 'GitHub page'},
            ]
        ]
    })
}

const projectsOptionSite= {
    reply_markup: JSON.stringify({
        inline_keyboard: [
            [{text: 'Board Games Shop DEMO', callback_data: 'Board Games Shop DEMO'}, {text: 'Junior Guide Map DEMO', callback_data: 'Junior Guide Map DEMO'}],
            [{text: 'Ultra Gym DEMO', callback_data: 'Ultra Gym DEMO'}, {text: 'Employees Register DEMO', callback_data: 'Employees Register DEMO'}],
            [{text: 'Star Wars community DEMO', callback_data: 'Star Wars community DEMO'}, {text: 'Marvel community DEMO', callback_data: 'Marvel community DEMO'}],
            [{text: 'back', callback_data: 'back'}]
        ]
    })
}

const projectsOptionGitHub = {
    reply_markup: JSON.stringify({
        inline_keyboard: [
            [{text: 'Board Games Shop GitHub page', callback_data: 'Board Games Shop GitHub page'}, {text: 'Junior Guide Map GitHub page', callback_data: 'Junior Guide Map GitHub page'}],
            [{text: 'Ultra Gym GitHub page', callback_data: 'Ultra Gym GitHub page'}, {text: 'Employees Register GitHub page', callback_data: 'Employees Register GitHub page'}],
            [{text: 'Star Wars community GitHub page', callback_data: 'Star Wars community GitHub page'}, {text: 'Marvel community GitHub page', callback_data: 'Marvel community GitHub page'}],
            [{text: 'back', callback_data: 'back'}]
        ]
    })
}

const start = () => {
    bot.setMyCommands([
        {command: '/start', description: 'Greetings'},
        {command: '/info', description: 'Get info about bot'},
        {command: '/projects', description: 'Get info about projects'},
    ])

    bot.on('message', async (message) => {
        const userMessage = message.text
        const chatId = message.chat.id
    
        if (userMessage === '/start') {
            return bot.sendMessage(chatId, 
`Hello! I'm Xlaoru portfolio bot 👋 
Here you can send me some 
commands and I will reply 
you. 

Also you can see my web-site: 
https://hlaoru.netlify.app/

Commands: 
/info 
/projects`)
        }
        if (userMessage === '/info') {
            return bot.sendMessage(chatId, 
`About me: 
I am a Junior React Front End developer. Graduated from the Junior ITStep Academy with a diploma. I also took JavaScript and React.js courses with a certificate. After effective study, I made a lot of interesting projects, which you can see in the Projects section. I am proficient in markup using HTML5 and CSS3, as well as JSX markup. In addition, I also have the skills to work with Redux.js. I also work with the Bootstrap.css and Material.ui libraries.

Here you can see my projects:
/projects`)
        }
        if (userMessage === '/projects') {
            return bot.sendMessage(chatId, 
`Here my projects! You have two options: 
see them in DEMO or on my GitHub page. 
Choose it:`, projectsTypeOption)
        }

        return bot.sendMessage(chatId, "Sorry! I don't understand you 😓")
    })

    bot.on('callback_query', (message) => {
        const userOption = message.data
        const chatId = message.message.chat.id

        if (userOption === 'DEMO') bot.sendMessage(chatId, userOption, projectsOptionSite)
        if (userOption === 'GitHub page') bot.sendMessage(chatId, userOption, projectsOptionGitHub)

        if (userOption === 'Board Games Shop DEMO') bot.sendMessage(chatId, 'https://board-games-store.netlify.app/')
        if (userOption === 'Junior Guide Map DEMO') bot.sendMessage(chatId, 'https://junior-guide-map.netlify.app/')
        if (userOption === 'Ultra Gym DEMO') bot.sendMessage(chatId, 'https://ultra-gym-info.netlify.app/')
        if (userOption === 'Employees Register DEMO') bot.sendMessage(chatId, 'https://employees-register-online.netlify.app/')
        if (userOption === 'Star Wars community DEMO') bot.sendMessage(chatId, 'https://sw-community-info.netlify.app/')
        if (userOption === 'Marvel community DEMO') bot.sendMessage(chatId, 'https://marvel-studios-information-portal.netlify.app/')

        if (userOption === 'Board Games Shop GitHub page') bot.sendMessage(chatId, 'https://github.com/xlaoru/board-games-shop')
        if (userOption === 'Junior Guide Map GitHub page') bot.sendMessage(chatId, 'https://github.com/xlaoru/junior-guide-map')
        if (userOption === 'Ultra Gym GitHub page') bot.sendMessage(chatId, 'https://github.com/xlaoru/ultra-gym')
        if (userOption === 'Employees Register GitHub page') bot.sendMessage(chatId, 'https://github.com/xlaoru/employees-register')
        if (userOption === 'Star Wars community GitHub page') bot.sendMessage(chatId, 'https://github.com/xlaoru/star_wars_community_app')
        if (userOption === 'Marvel community GitHub page') bot.sendMessage(chatId, 'https://github.com/xlaoru/marvel-info')

        if (userOption === 'back') bot.sendMessage(chatId, `Let's go back!`, projectsTypeOption)
    })
}

start()
