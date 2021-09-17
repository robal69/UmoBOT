const administracyjne_ilosc = fs.readdirSync(`cmds/administracyjne`).length
const administracyjne_lista = fs.readdirSync(`cmds/administracyjne`).join(` \``).replace(/\.js/gi, `\``)
const bot_ilosc = fs.readdirSync(`cmds/bot`).length
const bot_lista = fs.readdirSync(`cmds/bot`).join(` \``).replace(/\.js/gi, `\``)
const weryfikacja_ilosc = fs.readdirSync(`cmds/Weryfikacja`).length
const weryfikacja_lista = fs.readdirSync(`cmds/Weryfikacja`).join(` \``).replace(/\.js/gi, `\``)
const praktyczne_ilosc = fs.readdirSync(`cmds/praktyczne`).length
const praktyczne_lista = fs.readdirSync(`cmds/praktyczne`).join(` \``).replace(/\.js/gi, `\``)
const wszystko_ilosc = administracyjne_ilosc + bot_ilosc + weryfikacja_ilosc + praktyczne_ilosc

const config = require('../../config.js')
module.exports = {
    name: 'pomoc',
    async execute(message, args, Discord, client) {
        const embed = new Discord.MessageEmbed()
        embed
            .setTitle(`Help`)
            .setColor(config.kolor)
            .setDescription(`> **Aktualnie posiadam ${wszystko_ilosc} komend!**\n`)
            .addField(`Moderacyjne`, `\`${administracyjne_lista}`)
            .addField(`Bot`, `\`${bot_lista}`)
            .addField(`Weryfikacja`, `\`${weryfikacja_lista}`)
            .addField(`Użytkowe`, `\`${praktyczne_lista}`)
            .setTimestamp()
            .setFooter(`${message.author.tag} (${message.author.id})`, message.author.displayAvatarURL({ dynamic: true }))
        message.channel.send(embed)
    }
}