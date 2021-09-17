const config = require('../../config.js')

module.exports = {
    name: "zweryfikuj",
    async execute(message, args, Discord, client) {
            await message.delete().catch(err => console.log(err));
            const rola = message.guild.roles.cache.get(config.ID_ROLI);
        if(rola) {
            try {
        await message.member.roles.add(rola);
        const embed = new Discord.MessageEmbed()
        .setTitle('Zweryfikowano!')
        .setDescription(config.WIADOMOSC)
        .setColor(config.kolor)
        message.author.send(embed)
    }
    catch(err) {
        console.log(err);
            }
        }
    }
}