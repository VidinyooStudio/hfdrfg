require('dotenv').config(); 
const Discord = require('discord.js');
const client = new Discord.Client();
client.login(process.env.TOKEN);

var prefix = 'l-';

client.on('message', message => {
    if(message.content.toLowerCase()===`${prefix}ping`) {
        message.channel.send('pong')
    }
});
