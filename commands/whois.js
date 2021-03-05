module.exports = {
    name: 'whois',
    description: 'whois',
    execute(message, args) {
        const taggedUser = message.mentions.users.first();
            if (!taggedUser) return message.channel.send('who?');  
            message.channel.send(`${taggedUser.username}\n${taggedUser.id}\n${taggedUser.createdAt}\n${taggedUser.displayAvatarURL({ format: 'png', dynamic: true })}`);
    }
}