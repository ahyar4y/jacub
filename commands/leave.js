module.exports = {
    name: 'leave',
    description: 'leave',
    execute(message, args) {
        if (message.guild.voice.channel) message.member.voice.channel.leave();
    }
}