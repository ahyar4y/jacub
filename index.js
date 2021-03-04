const Discord = require("discord.js");
const client = new Discord.Client();
const { prefix, token } = require("./config.json");

client.once("ready", () => {
    console.log("ready");
    client.user.setPresence({ activity: { name: ".whoru", type: "LISTENING" } });
});

client.on("message", async (message) => {
    if (!message.content.startsWith(prefix)) return;

    const args = message.content.slice(prefix.length).trim().split(/ +/);
    const command = args.shift().toLowerCase();
    switch (command) {
        case 'whoru':
            message.channel.send(`A bot, ${message.author}`);
            break;
        case 'whoami':        
            message.channel.send(`${message.author.username}\n${message.author.id}\n${message.author.createdAt}\n${message.author.displayAvatarURL({ format: 'png', dynamic: true })}`);
            break;
        case 'whois':
            const taggedUser = message.mentions.users.first();
            if (!taggedUser) return message.channel.send('who?');  
            message.channel.send(`${taggedUser.username}\n${taggedUser.id}\n${taggedUser.createdAt}\n${taggedUser.displayAvatarURL({ format: 'png', dynamic: true })}`);
            break;
        case 'join':
            if (message.member.voice.channel) await message.member.voice.channel.join();
            break;
        case 'leave':
            if (message.guild.voice.channel) message.member.voice.channel.leave();
    }
});

client.login(token);
