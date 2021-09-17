const config = require('../../config.js')

module.exports = {
    name: "werwiad",
    async execute(message, args, Discord, client) {
        const embedd = new Discord.MessageEmbed()
        embedd
            .setTitle(`Błąd!`)
            .setColor(config.kolor)
            .setDescription(config.werwiadperm)
            .setTimestamp()
            .setFooter(`${message.author.tag} (${message.author.id})`, message.author.displayAvatarURL({ dynamic: true }))

            if (!message.member.hasPermission('ADMINISTRATOR'))
            return message.channel.send(embedd).then(msg => {
            message.delete({ timeout: 30000 })
            })

        const embed = new Discord.MessageEmbed()
        .setTitle('Weryfikacja Info!')
        .setDescription(config.werwiad)
        .setColor(config.kolor)
        message.channel.send(embed)
    }
}