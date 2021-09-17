module.exports = {
    name: 'clear',
    description: 'clear',
    execute(message, args, Discord) {
        const embed = new Discord.MessageEmbed()
        embed
            .setTitle(`Błąd!`)
            .setColor(config.kolor)
            .setDescription(config.clearperm)
            .setTimestamp()
            .setFooter(`${message.author.tag} (${message.author.id})`, message.author.displayAvatarURL({ dynamic: true }))
        if (!message.member.hasPermission('MANAGE_MESSAGES'))
        return message.channel.send(embed).then(msg => {
        message.delete({ timeout: 30000 })
        })

        if (!args[0]) {
            const embed = new Discord.MessageEmbed()
            embed
                .setTitle(`Błąd!`)
                .setColor(config.kolor)
                .setDescription(`Nie podano ilości!`)
                .setTimestamp()
                .setFooter(`${message.author.tag} (${message.author.id})`, message.author.displayAvatarURL({ dynamic: true }))
            message.channel.send(embed)
        }
        else {
            if (Number.isNaN(+args[0])) {
                const embed = new Discord.MessageEmbed()
                embed
                    .setTitle(`Błąd!`)
                    .setColor(config.kolor)
                    .setDescription(`Podana ilość jest nieprawidłowa!`)
                    .setTimestamp()
                    .setFooter(`${message.author.tag} (${message.author.id})`, message.author.displayAvatarURL({ dynamic: true }))
                message.channel.send(embed)
            }
            else {
                if ((args[0]) > 100) {
                    const embed = new Discord.MessageEmbed()
                    embed
                        .setTitle(`Błąd!`)
                        .setColor(config.kolor)
                        .setDescription(`Ilość nie może przekraczać 100!`)
                        .setTimestamp()
                        .setFooter(`${message.author.tag} (${message.author.id})`, message.author.displayAvatarURL({ dynamic: true }))
                    message.channel.send(embed)
                }
                else {
                    if ((args[0]) < 1) {
                        const embed = new Discord.MessageEmbed()
                        embed
                            .setTitle(`Błąd!`)
                            .setColor(config.kolor)
                            .setDescription(`Ilość nie może być mniejsza niż 1!`)
                            .setTimestamp()
                            .setFooter(`${message.author.tag} (${message.author.id})`, message.author.displayAvatarURL({ dynamic: true }))
                        message.channel.send(embed)
                    }
                    else {
                        message.delete()
                        message.channel.bulkDelete(args[0], `Czyszczenie wiadomości - Administrator: ${message.author.tag}`).then(() => {
                            const embed = new Discord.MessageEmbed()
                            embed
                                .setTitle(`Sukces!`)
                                .setColor(config.kolor)
                                .setDescription(`Pomyślnie usunięto **${args[0]}** wiadomości!`)
                                .setTimestamp()
                                .setFooter(`${message.author.tag} (${message.author.id})`, message.author.displayAvatarURL({ dynamic: true }))
                            message.channel.send(embed)
                                .then(message => {
                                    setTimeout(function () {
                                        message.delete()
                                    }, 3000)
                                })
                        }).catch(() => {
                            const embed = new Discord.MessageEmbed()
                            embed
                                .setTitle(`Błąd!`)
                                .setColor(config.kolor)
                                .setDescription(`Nie mogę usuwać wiadomości starszych niż 14 dni!`)
                                .setTimestamp()
                                .setFooter(`${message.author.tag} (${message.author.id})`, message.author.displayAvatarURL({ dynamic: true }))
                            message.channel.send(embed)
                        })
                    }
                }
            }
        }
    }
}