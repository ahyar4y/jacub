module.exports = {
    name: 'whoru',
    description: 'whoru',
    execute(message, args) {
        message.channel.send(`Just Another Casual Utilty Bot, ${message.author}`);
    }
}