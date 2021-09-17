const Discord = require('discord.js');
const client = new Discord.Client({ ws: { properties: { $browser: "Discord iOS" }} }, { partials: ["MESSAGE", "CHANNEL", "REACTION"]})
require('dotenv').config()
global.fs = require('fs');
global.chalk = require('chalk')
global.prefix = '!'
global.config = require('./config.js')
 
client.commands = new Discord.Collection();
client.events = new Discord.Collection();

['command.handler', 'event.handler'].forEach(handler =>{
    require(`./handlers/${handler}`)(client, Discord);
})
 
 client.once('ready', () =>{

    setInterval(() => {
        client.user.setActivity(`OMCODE x TikTok!`, {type: 'WATCHING'})
    }, 5000);
 });


















client.login('ODY2NjYyNzIyMTQ0OTYwNTIx.YPV0jg.froNM5KWDvEjyqq-asA4EsnKaQM');