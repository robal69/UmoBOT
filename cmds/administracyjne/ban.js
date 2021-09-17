module.exports = {
    name: `ban`,
    async execute(message, args, Discord, client) {
        const wzmianka1 = message.mentions.members.first()
        const wzmianka2 = message.mentions.users.first()
        const powod = args.splice(1).join(` `) || `Brak powodu`

        const embed = new Discord.MessageEmbed()
        embed
            .setTitle(`Błąd!`)
            .setColor(config.kolor)
            .setDescription(config.banperm)
            .setTimestamp()
            .setFooter(`${message.author.tag} (${message.author.id})`, message.author.displayAvatarURL({ dynamic: true }))

        if (!message.member.hasPermission('BAN_MEMBERS'))
        return message.channel.send(embed).then(msg => {
        message.delete({ timeout: 30000 })
        })

        if (!wzmianka1) {
            const embed = new Discord.MessageEmbed()
            embed
                .setTitle(`Błąd!`)
                .setColor(config.kolor)
                .setDescription(`Nie oznaczono osoby!`)
                .setTimestamp()
                .setFooter(`${message.author.tag} (${message.author.id})`, message.author.displayAvatarURL({ dynamic: true }))
            message.channel.send(embed)
        }
        else {
            wzmianka1.ban({ days: 0, reason: `${powod} - Administrator: ${message.author.tag}` }).then(() => {
                const embed1 = new Discord.MessageEmbed()
                embed1
                    .setTitle(`Sukces!`)
                    .setColor(config.kolor)
                    .setDescription(`Pomyślnie zbanowano użytkownika!`)
                    .addField(`Administrator:`, `${message.author} (${message.author.tag})`)
                    .addField(`Użytkownik:`, `${wzmianka2} (${wzmianka2.tag})`)
                    .addField(`Powód:`, powod)
                    .addField(`Serwer:`, message.guild.name)
                    .setThumbnail(wzmianka2.displayAvatarURL({ dynamic: true }))
                    .setTimestamp()
                    .setFooter(`${message.author.tag} (${message.author.id})`, message.author.displayAvatarURL({ dynamic: true }))
                message.channel.send(embed1)
                const embed2 = new Discord.MessageEmbed()
                embed2
                    .setTitle(`Ban!`)
                    .setColor(config.kolor)
                    .setDescription(`Zostałeś(-aś) zbanowany!`)
                    .addField(`$Administrator:`, `${message.author} (${message.author.tag})`)
                    .addField(`Użytkownik:`, `${wzmianka2} (${wzmianka2.tag})`)
                    .addField(`Powód:`, powod)
                    .addField(`Serwer:`, message.guild.name)
                    .setThumbnail(wzmianka2.displayAvatarURL({ dynamic: true }))
                    .setTimestamp()
                    .setFooter(`${message.author.tag} (${message.author.id})`, message.author.displayAvatarURL({ dynamic: true }))
                wzmianka2.send(embed2)
            })
        }
    }
}