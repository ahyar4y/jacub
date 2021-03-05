module.exports = {
    name: 'whoami',
    description: 'whoami',
    execute(message, args) {
        message.channel.send(`${message.author.username}\n${message.author.id}\n${message.author.createdAt}\n${message.author.displayAvatarURL({ format: 'png', dynamic: true })}`);
    }
}